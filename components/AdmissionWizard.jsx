"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Users,
  MapPin,
  GraduationCap,
  FileCheck2,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Check,
  Calendar,
  Phone,
  Mail,
  Briefcase,
  Bus,
  Home,
  Loader2,
  AlertCircle,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";
import {
  BLOOD_GROUPS,
  CATEGORIES,
  RELIGIONS,
  GENDERS,
  FALLBACK_CLASSES,
  ADMISSION_STEPS,
} from "@/lib/constants";
import { supabase } from "@/lib/supabase";
import confetti from "canvas-confetti";

export default function AdmissionWizard({ onSuccess }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [classesList, setClassesList] = useState(FALLBACK_CLASSES);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Student Demographics
    first_name: "",
    last_name: "",
    date_of_birth: "",
    gender: "male",
    blood_group: "O+",
    category: "General",
    religion: "Islam",
    applying_for_class_id: "",

    // Step 2: Parents Info
    father_name: "",
    father_phone: "",
    father_email: "",
    father_occupation: "",
    mother_name: "",
    mother_phone: "",
    mother_email: "",
    mother_occupation: "",
    guardian_name: "",
    guardian_phone: "",
    primary_contact: "father",

    // Step 3: Residential Address
    address: "",
    city: "Rupahi",
    district: "Nagaon",
    state: "Assam",
    pin_code: "782125",

    // Step 4: Academic Background & Facilities
    prev_school_name: "",
    prev_class: "",
    prev_score_percentage: "",
    requires_transport: false,
    transport_pickup_location: "",
    requires_hostel: false,

    // Step 5: Declaration
    declaration_accepted: false,
  });

  // Load active classes from Supabase
  useEffect(() => {
    async function loadSchoolClasses() {
      try {
        const { data, error } = await supabase
          .from("classes")
          .select("id, name, numeric_level")
          .order("numeric_level", { ascending: true });

        if (!error && Array.isArray(data) && data.length > 0) {
          setClassesList(data);
          if (!formData.applying_for_class_id) {
            setFormData((prev) => ({ ...prev, applying_for_class_id: data[0].id }));
          }
        } else {
          setFormData((prev) => ({ ...prev, applying_for_class_id: FALLBACK_CLASSES[0].id }));
        }
      } catch (err) {
        console.warn("Using fallback classes list:", err);
      }
    }
    loadSchoolClasses();
  }, []);

  // Restore saved session storage if available
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = sessionStorage.getItem("mis_admission_draft");
        if (saved) {
          const parsed = JSON.parse(saved);
          setFormData((prev) => ({ ...prev, ...parsed }));
        }
      } catch {}
    }
  }, []);

  // Update session storage
  const updateField = (field, value) => {
    setFormData((prev) => {
      const updated = { ...prev, [field]: value };
      if (typeof window !== "undefined") {
        try {
          sessionStorage.setItem("mis_admission_draft", JSON.stringify(updated));
        } catch {}
      }
      return updated;
    });
    setFormError("");
  };

  // Grouped classes for structured dropdown
  const groupedClasses = useMemo(() => {
    const prePrimary = [];
    const primary = [];
    const middle = [];
    const secondary = [];
    const seniorSecondary = [];

    classesList.forEach((c) => {
      const name = c.name.toLowerCase();
      if (name.includes("nursery") || name.includes("lkg") || name.includes("ukg")) {
        prePrimary.push(c);
      } else if (
        name.includes("class 11") ||
        name.includes("class 12") ||
        name.includes("xi") ||
        name.includes("xii")
      ) {
        seniorSecondary.push(c);
      } else if (
        name.includes("class 9") ||
        name.includes("class 10") ||
        name.includes("ix") ||
        name.includes("x")
      ) {
        secondary.push(c);
      } else if (
        name.includes("class 6") ||
        name.includes("class 7") ||
        name.includes("class 8")
      ) {
        middle.push(c);
      } else {
        primary.push(c);
      }
    });

    return [
      { label: "Pre-Primary Section (Foundational)", classes: prePrimary },
      { label: "Primary Section (Classes 1 to 5)", classes: primary },
      { label: "Middle Section (Classes 6 to 8)", classes: middle },
      { label: "Secondary Section (Classes 9 & 10)", classes: secondary },
      { label: "Senior Secondary (Classes 11 & 12)", classes: seniorSecondary },
    ].filter((group) => group.classes.length > 0);
  }, [classesList]);

  // Step Validation
  const validateStep = (stepNumber) => {
    setFormError("");

    if (stepNumber === 1) {
      if (!formData.first_name.trim()) return "Student first name is required.";
      if (!formData.last_name.trim()) return "Student last name is required.";
      if (!formData.date_of_birth) return "Date of birth is required.";
      if (!formData.applying_for_class_id) return "Please select the class applying for.";
      return null;
    }

    if (stepNumber === 2) {
      if (
        !formData.father_name.trim() &&
        !formData.mother_name.trim() &&
        !formData.guardian_name.trim()
      ) {
        return "Please enter at least one parent or guardian name.";
      }
      const primaryPhone =
        formData.father_phone || formData.mother_phone || formData.guardian_phone;
      if (!primaryPhone || primaryPhone.replace(/\D/g, "").length < 10) {
        return "A valid 10-digit primary contact phone number is required.";
      }
      return null;
    }

    if (stepNumber === 3) {
      if (!formData.address.trim()) return "Residential address is required.";
      if (!formData.city.trim()) return "City / Town is required.";
      if (!formData.pin_code.trim() || formData.pin_code.trim().length < 6) {
        return "A valid 6-digit PIN code is required.";
      }
      return null;
    }

    if (stepNumber === 4) {
      if (formData.requires_transport && !formData.transport_pickup_location.trim()) {
        return "Please enter preferred pickup location for school bus transport.";
      }
      return null;
    }

    if (stepNumber === 5) {
      if (!formData.declaration_accepted) {
        return "Please review the declaration and check the agreement box before submitting.";
      }
      return null;
    }

    return null;
  };

  const handleNext = () => {
    const error = validateStep(currentStep);
    if (error) {
      setFormError(error);
      return;
    }
    setDirection(1);
    setCurrentStep((prev) => Math.min(prev + 1, 5));
    const el = document.getElementById("admission-wizard-card");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleBack = () => {
    setDirection(-1);
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    setFormError("");
    const el = document.getElementById("admission-wizard-card");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Final Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateStep(5);
    if (error) {
      setFormError(error);
      return;
    }

    try {
      setSubmitting(true);
      setFormError("");

      const res = await fetch("/api/admission/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (!res.ok || json.error) {
        throw new Error(json.error || "Failed to submit admission application.");
      }

      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#0f172a", "#2563eb", "#10b981", "#f59e0b"],
        });
      } catch {}

      if (typeof window !== "undefined") {
        try {
          sessionStorage.removeItem("mis_admission_draft");
        } catch {}
      }

      const selectedClassObj = classesList.find(
        (c) => c.id === formData.applying_for_class_id
      );

      onSuccess({
        applicationNumber: json.applicationNumber,
        createdAt: json.createdAt,
        studentName: `${formData.first_name} ${formData.last_name}`,
        className: selectedClassObj?.name || "Class",
        fatherName: formData.father_name || formData.guardian_name,
        contactPhone:
          formData.father_phone || formData.mother_phone || formData.guardian_phone,
        city: formData.city,
      });
    } catch (err) {
      console.error("Submission failed:", err);
      setFormError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const selectedClassName =
    classesList.find((c) => c.id === formData.applying_for_class_id)?.name ||
    "Not Selected";

  return (
    <div id="admission-wizard-card" className="w-full max-w-4xl mx-auto px-3 sm:px-6">
      {/* Unified Master Card with Stepper & Form */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300">
        {/* Stepper Navigation Header */}
        <div className="bg-gradient-to-r from-slate-50/90 via-slate-50 to-slate-100/70 border-b border-slate-200/80 p-3.5 sm:p-5">
          {/* Mobile Step Header */}
          <div className="sm:hidden space-y-2">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-6 h-6 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-bold shadow-2xs shrink-0">
                  {currentStep}
                </span>
                <span className="text-xs font-bold text-slate-900 tracking-tight truncate">
                  {ADMISSION_STEPS[currentStep - 1].title}
                </span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-200/80 px-2 py-0.5 rounded-full">
                  {selectedClassName}
                </span>
                <span className="text-[10px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                  {currentStep}/5
                </span>
              </div>
            </div>

            {/* Mobile Progress Bar */}
            <div className="w-full h-1.5 bg-slate-200/80 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-slate-900 rounded-full"
                initial={{ width: "20%" }}
                animate={{ width: `${(currentStep / 5) * 100}%` }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Desktop Stepper */}
          <div className="hidden sm:grid grid-cols-5 gap-2 lg:gap-2.5">
            {ADMISSION_STEPS.map((step) => {
              const isCompleted = step.id < currentStep;
              const isCurrent = step.id === currentStep;

              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => {
                    if (step.id < currentStep) {
                      setDirection(-1);
                      setCurrentStep(step.id);
                    }
                  }}
                  disabled={step.id > currentStep}
                  className={`text-left p-3 rounded-xl border transition-all duration-200 ${
                    isCurrent
                      ? "bg-slate-900 text-white border-slate-900 shadow-xs ring-2 ring-slate-900/10"
                      : isCompleted
                      ? "bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50 cursor-pointer shadow-2xs"
                      : "bg-white/60 text-slate-400 border-slate-200/60 opacity-60 cursor-not-allowed"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {isCompleted ? (
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <Check size={12} strokeWidth={2.5} />
                      </span>
                    ) : (
                      <span
                        className={`w-5 h-5 rounded-full text-[11px] font-bold flex items-center justify-center shrink-0 ${
                          isCurrent
                            ? "bg-white text-slate-900"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {step.id}
                      </span>
                    )}
                    <span className="text-xs font-bold truncate tracking-tight">{step.title}</span>
                  </div>
                  <p
                    className={`text-[10px] truncate ${
                      isCurrent ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {step.subtitle}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Form Body Container */}
        <div className="p-4 sm:p-7 md:p-8 relative">
          {/* Top Step Header (Desktop & Tablet only - mobile has the unified stepper bar above) */}
          <div className="hidden sm:flex items-center justify-between pb-4 mb-5 border-b border-slate-100">

          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Step {currentStep} of 5
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mt-0.5">
              {ADMISSION_STEPS[currentStep - 1].title}
            </h2>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
              Applying For
            </span>
            <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200 inline-block mt-0.5">
              {selectedClassName}
            </span>
          </div>
        </div>

        {/* Error Alert Box */}
        {formError && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-center gap-2.5 text-xs font-medium text-rose-800"
          >
            <AlertCircle size={15} className="text-rose-600 shrink-0" />
            <span>{formError}</span>
          </motion.div>
        )}

        {/* Framer Motion Step Transitions */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            initial={{ opacity: 0, x: direction * 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -24 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {/* STEP 1: STUDENT DEMOGRAPHICS */}
            {currentStep === 1 && (
              <div className="space-y-4 sm:space-y-5">
                {/* Class Selector Dropdown */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-900 block">
                      Select Class / Grade Applying For <span className="text-rose-500">*</span>
                    </label>
                    <span className="text-[11px] font-medium text-slate-500 hidden sm:inline">
                      Session 2027–2028
                    </span>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <GraduationCap size={18} />
                    </div>
                    <select
                      value={formData.applying_for_class_id}
                      onChange={(e) => updateField("applying_for_class_id", e.target.value)}
                      className="w-full h-11 sm:h-12 pl-10 pr-9 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 transition-colors cursor-pointer appearance-none shadow-2xs"
                    >
                      {groupedClasses.map((group) => (
                        <optgroup
                          key={group.label}
                          label={group.label}
                          className="font-bold text-slate-700 bg-slate-100"
                        >
                          {group.classes.map((cls) => (
                            <option
                              key={cls.id}
                              value={cls.id}
                              className="font-medium text-slate-900 bg-white py-1"
                            >
                              {cls.name} • Session 2027-2028
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-500">
                      <ChevronDown size={16} />
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 leading-normal">
                    Admissions currently open for Academic Session 2027-2028. Select your child&apos;s prospective grade.
                  </p>
                </div>

                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Student First Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ayaan"
                      value={formData.first_name}
                      onChange={(e) => updateField("first_name", e.target.value)}
                      className="w-full h-11 px-3.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Student Last Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Choudhury"
                      value={formData.last_name}
                      onChange={(e) => updateField("last_name", e.target.value)}
                      className="w-full h-11 px-3.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors"
                    />
                  </div>
                </div>

                {/* DOB & Gender */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Date of Birth <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={formData.date_of_birth}
                      onChange={(e) => updateField("date_of_birth", e.target.value)}
                      className="w-full h-11 px-3.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Gender <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {GENDERS.map((g) => (
                        <button
                          key={g.id}
                          type="button"
                          onClick={() => updateField("gender", g.id)}
                          className={`h-11 rounded-lg text-xs sm:text-sm font-semibold transition-all border ${
                            formData.gender === g.id
                              ? "bg-slate-900 text-white border-slate-900 shadow-2xs"
                              : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                          }`}
                        >
                          {g.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Blood Group, Category & Religion */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Blood Group
                    </label>
                    <div className="relative">
                      <select
                        value={formData.blood_group}
                        onChange={(e) => updateField("blood_group", e.target.value)}
                        className="w-full h-11 pl-3 pr-8 rounded-lg border border-slate-300 text-xs sm:text-sm font-medium bg-white text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 appearance-none"
                      >
                        {BLOOD_GROUPS.map((bg) => (
                          <option key={bg} value={bg}>
                            {bg}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none text-slate-400">
                        <ChevronDown size={14} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Category
                    </label>
                    <div className="relative">
                      <select
                        value={formData.category}
                        onChange={(e) => updateField("category", e.target.value)}
                        className="w-full h-11 pl-3 pr-8 rounded-lg border border-slate-300 text-xs sm:text-sm font-medium bg-white text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 appearance-none"
                      >
                        {CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none text-slate-400">
                        <ChevronDown size={14} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Religion
                    </label>
                    <div className="relative">
                      <select
                        value={formData.religion}
                        onChange={(e) => updateField("religion", e.target.value)}
                        className="w-full h-11 pl-3 pr-8 rounded-lg border border-slate-300 text-xs sm:text-sm font-medium bg-white text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 appearance-none"
                      >
                        {RELIGIONS.map((rel) => (
                          <option key={rel} value={rel}>
                            {rel}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none text-slate-400">
                        <ChevronDown size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: PARENTS & GUARDIAN */}
            {currentStep === 2 && (
              <div className="space-y-4 sm:space-y-5">
                {/* Father Info Card */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                    Father&apos;s Information
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Father Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Tariq Choudhury"
                        value={formData.father_name}
                        onChange={(e) => updateField("father_name", e.target.value)}
                        className="w-full h-10 px-3 rounded-lg border border-slate-300 text-xs sm:text-sm bg-white focus:outline-none focus:border-slate-900"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Father Mobile Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        maxLength={10}
                        placeholder="10-digit mobile number"
                        value={formData.father_phone}
                        onChange={(e) => updateField("father_phone", e.target.value)}
                        className="w-full h-10 px-3 rounded-lg border border-slate-300 text-xs sm:text-sm bg-white focus:outline-none focus:border-slate-900"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Occupation
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Business / Government / Professional"
                        value={formData.father_occupation}
                        onChange={(e) => updateField("father_occupation", e.target.value)}
                        className="w-full h-10 px-3 rounded-lg border border-slate-300 text-xs sm:text-sm bg-white focus:outline-none focus:border-slate-900"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. parent@example.com"
                        value={formData.father_email}
                        onChange={(e) => updateField("father_email", e.target.value)}
                        className="w-full h-10 px-3 rounded-lg border border-slate-300 text-xs sm:text-sm bg-white focus:outline-none focus:border-slate-900"
                      />
                    </div>
                  </div>
                </div>

                {/* Mother Info Card */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                    Mother&apos;s Information
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Mother Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ruksana Begum"
                        value={formData.mother_name}
                        onChange={(e) => updateField("mother_name", e.target.value)}
                        className="w-full h-10 px-3 rounded-lg border border-slate-300 text-xs sm:text-sm bg-white focus:outline-none focus:border-slate-900"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Mother Mobile Number
                      </label>
                      <input
                        type="tel"
                        maxLength={10}
                        placeholder="10-digit mobile number"
                        value={formData.mother_phone}
                        onChange={(e) => updateField("mother_phone", e.target.value)}
                        className="w-full h-10 px-3 rounded-lg border border-slate-300 text-xs sm:text-sm bg-white focus:outline-none focus:border-slate-900"
                      />
                    </div>
                  </div>
                </div>

                {/* Primary Contact Selector */}
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
                      Primary Contact for Admission Updates
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Official notices & verification SMS will be sent to this contact
                    </span>
                  </div>
                  <div className="relative">
                    <select
                      value={formData.primary_contact}
                      onChange={(e) => updateField("primary_contact", e.target.value)}
                      className="h-9 pl-3 pr-7 rounded-lg border border-slate-300 text-xs font-bold bg-white text-slate-900 focus:outline-none focus:border-slate-900 appearance-none"
                    >
                      <option value="father">Father</option>
                      <option value="mother">Mother</option>
                      <option value="guardian">Guardian</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none text-slate-400">
                      <ChevronDown size={13} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: RESIDENTIAL ADDRESS */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    Street Address / Village / Locality <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Near Block Development Office, Rupahi Bazar Road"
                    value={formData.address}
                    onChange={(e) => updateField("address", e.target.value)}
                    className="w-full p-3 rounded-lg border border-slate-300 text-xs sm:text-sm font-medium focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      City / Town <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rupahi / Nagaon"
                      value={formData.city}
                      onChange={(e) => updateField("city", e.target.value)}
                      className="w-full h-11 px-3.5 rounded-lg border border-slate-300 text-xs sm:text-sm font-medium focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      District
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Nagaon"
                      value={formData.district}
                      onChange={(e) => updateField("district", e.target.value)}
                      className="w-full h-11 px-3.5 rounded-lg border border-slate-300 text-xs sm:text-sm font-medium focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">State</label>
                    <input
                      type="text"
                      value={formData.state}
                      onChange={(e) => updateField("state", e.target.value)}
                      className="w-full h-11 px-3.5 rounded-lg border border-slate-300 text-xs sm:text-sm font-medium focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      PIN Code <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      placeholder="e.g. 782125"
                      value={formData.pin_code}
                      onChange={(e) => updateField("pin_code", e.target.value)}
                      className="w-full h-11 px-3.5 rounded-lg border border-slate-300 text-xs sm:text-sm font-medium focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: ACADEMIC & FACILITIES */}
            {currentStep === 4 && (
              <div className="space-y-4 sm:space-y-5">
                {/* Previous School Record */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                    Previous School Record (Optional)
                  </span>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Previous School Name
                    </label>
                    <input
                      type="text"
                      placeholder="Name of previous school (if applicable)"
                      value={formData.prev_school_name}
                      onChange={(e) => updateField("prev_school_name", e.target.value)}
                      className="w-full h-10 px-3 rounded-lg border border-slate-300 text-xs sm:text-sm bg-white focus:outline-none focus:border-slate-900"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Last Class Completed
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Class 7 / UKG"
                        value={formData.prev_class}
                        onChange={(e) => updateField("prev_class", e.target.value)}
                        className="w-full h-10 px-3 rounded-lg border border-slate-300 text-xs sm:text-sm bg-white focus:outline-none focus:border-slate-900"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Percentage / Grade
                      </label>
                      <input
                        type="number"
                        placeholder="e.g. 88.5"
                        value={formData.prev_score_percentage}
                        onChange={(e) => updateField("prev_score_percentage", e.target.value)}
                        className="w-full h-10 px-3 rounded-lg border border-slate-300 text-xs sm:text-sm bg-white focus:outline-none focus:border-slate-900"
                      />
                    </div>
                  </div>
                </div>

                {/* Campus Facilities Opt-In */}
                <div className="space-y-3">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                    Campus Facilities Required
                  </span>

                  {/* School Bus Transport */}
                  <div className="p-3.5 sm:p-4 rounded-xl border border-slate-200 bg-white space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                          <Bus size={18} />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-slate-900 block">
                            School Bus Transport
                          </span>
                          <span className="text-[11px] text-slate-500">
                            GPS-tracked bus routes covering Rupahi, Juria, Nagaon and nearby areas.
                          </span>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={formData.requires_transport}
                        onChange={(e) => updateField("requires_transport", e.target.checked)}
                        className="w-5 h-5 accent-slate-900 rounded cursor-pointer"
                      />
                    </div>

                    {formData.requires_transport && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="pt-2 border-t border-slate-100"
                      >
                        <label className="text-xs font-semibold text-slate-700 block mb-1">
                          Preferred Pickup / Drop Point <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Rupahi Tiniali / Police Station Point"
                          value={formData.transport_pickup_location}
                          onChange={(e) => updateField("transport_pickup_location", e.target.value)}
                          className="w-full h-10 px-3 rounded-lg border border-slate-300 text-xs sm:text-sm bg-slate-50 focus:outline-none focus:border-slate-900"
                        />
                      </motion.div>
                    )}
                  </div>

                  {/* School Hostel */}
                  <div className="p-3.5 sm:p-4 rounded-xl border border-slate-200 bg-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                        <Home size={18} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-900 block">
                          Hostel Accommodation
                        </span>
                        <span className="text-[11px] text-slate-500">
                          Secure residential boarding facility with 24/7 warden supervision.
                        </span>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={formData.requires_hostel}
                      onChange={(e) => updateField("requires_hostel", e.target.checked)}
                      className="w-5 h-5 accent-slate-900 rounded cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5: REVIEW & DECLARATION */}
            {currentStep === 5 && (
              <div className="space-y-4 sm:space-y-5">
                {/* Summary Card */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="text-xs font-bold text-slate-900 uppercase">
                      Application Summary
                    </span>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="text-xs font-semibold text-slate-700 hover:text-slate-900 hover:underline cursor-pointer"
                    >
                      Edit Info
                    </button>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                    <div>
                      <span className="text-slate-400 text-[10px] block">Student Name</span>
                      <span className="font-bold text-slate-900">
                        {formData.first_name} {formData.last_name}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">Target Class</span>
                      <span className="font-bold text-slate-900">{selectedClassName}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">Date of Birth</span>
                      <span className="font-bold text-slate-900">{formData.date_of_birth}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">Parent Contact</span>
                      <span className="font-bold text-slate-900">
                        {formData.father_phone ||
                          formData.mother_phone ||
                          formData.guardian_phone}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">Address</span>
                      <span className="font-bold text-slate-900 truncate block">
                        {formData.city}, {formData.state} - {formData.pin_code}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">Bus Transport</span>
                      <span className="font-bold text-slate-900">
                        {formData.requires_transport
                          ? `Yes (${formData.transport_pickup_location})`
                          : "No"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Document Verification Notice */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                  <FileCheck2 size={18} className="text-slate-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      Documents Required for Verification
                    </h4>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                      Please bring during school visit: (1) Student Birth Certificate, (2) Previous Year Report Card, (3) 4 Passport Photos, and (4) Transfer Certificate (Class 2 and above).
                    </p>
                  </div>
                </div>

                {/* Legal Declaration Checkbox */}
                <div className="p-3.5 sm:p-4 rounded-xl border border-slate-200 bg-white">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.declaration_accepted}
                      onChange={(e) => updateField("declaration_accepted", e.target.checked)}
                      className="w-4 h-4 accent-slate-900 rounded shrink-0 mt-0.5"
                    />
                    <span className="text-xs text-slate-700 leading-normal font-medium">
                      I hereby declare that all information provided in this application is true and correct to the best of my knowledge. I agree to abide by the admission regulations of Mahmud International School, Rupahi.
                    </span>
                  </label>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Wizard Footer Controls */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              disabled={submitting}
              className="h-10 sm:h-11 px-4 sm:px-5 rounded-lg border border-slate-300 bg-white text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 shadow-2xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < 5 ? (
            <button
              type="button"
              onClick={handleNext}
              className="h-10 sm:h-11 px-5 sm:px-6 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold shadow-2xs transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Continue</span>
              <ArrowRight size={14} />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitting}
              className="h-11 sm:h-12 px-6 sm:px-7 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold shadow-2xs transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {submitting ? (
                <>
                  <Loader2 size={15} className="animate-spin" />
                  <span>Submitting Application...</span>
                </>
              ) : (
                <>
                  <CheckCircle2 size={15} />
                  <span>Submit Admission Form</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  </div>
  );
}
