"use client";

import React, { useState, useEffect } from "react";
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
  Calendar,
  Phone,
  Mail,
  Briefcase,
  Bus,
  Home,
  Loader2,
  Sparkles,
  AlertCircle,
  HelpCircle,
  Clock,
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
      if (!formData.father_name.trim() && !formData.mother_name.trim() && !formData.guardian_name.trim()) {
        return "Please enter at least one parent or guardian name.";
      }
      const primaryPhone = formData.father_phone || formData.mother_phone || formData.guardian_phone;
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
    // Smooth scroll to top of wizard on step change
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

      // Fire victory confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#2e1065", "#fbbf24", "#10b981", "#6366f1"],
        });
      } catch {}

      // Clear draft storage
      if (typeof window !== "undefined") {
        try {
          sessionStorage.removeItem("mis_admission_draft");
        } catch {}
      }

      // Selected class name for slip
      const selectedClassObj = classesList.find((c) => c.id === formData.applying_for_class_id);

      onSuccess({
        applicationNumber: json.applicationNumber,
        createdAt: json.createdAt,
        studentName: `${formData.first_name} ${formData.last_name}`,
        className: selectedClassObj?.name || "Class",
        fatherName: formData.father_name || formData.guardian_name,
        contactPhone: formData.father_phone || formData.mother_phone || formData.guardian_phone,
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
    classesList.find((c) => c.id === formData.applying_for_class_id)?.name || "Not Selected";

  return (
    <div id="admission-wizard-card" className="w-full max-w-4xl mx-auto px-3 sm:px-6">
      {/* Wizard Step Navigation Bar */}
      <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-2xs mb-4 sm:mb-5">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[11px] font-bold">
              {currentStep}
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-900">
              {ADMISSION_STEPS[currentStep - 1].title}
            </span>
          </div>
          <span className="text-xs font-semibold text-slate-500">Step {currentStep} of 5</span>
        </div>

        {/* Animated Progress Bar - Single Color */}
        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-indigo-600 rounded-full"
            initial={{ width: "20%" }}
            animate={{ width: `${(currentStep / 5) * 100}%` }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>

        {/* Step Icons (Desktop View) */}
        <div className="hidden sm:grid grid-cols-5 gap-2 mt-3 pt-2.5 border-t border-slate-100">
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
                className={`text-left p-2 rounded-lg transition-colors ${
                  isCurrent
                    ? "bg-slate-50 border border-slate-300 text-slate-900"
                    : isCompleted
                    ? "opacity-90 hover:bg-slate-50 cursor-pointer"
                    : "opacity-40 cursor-not-allowed"
                }`}
              >
                <div className="flex items-center gap-1.5 mb-0.5">
                  {isCompleted ? (
                    <CheckCircle2 size={13} className="text-emerald-600" />
                  ) : (
                    <span
                      className={`w-3.5 h-3.5 rounded-full text-[9px] font-bold flex items-center justify-center ${
                        isCurrent ? "bg-indigo-600 text-white" : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      {step.id}
                    </span>
                  )}
                  <span
                    className={`text-[11px] font-bold truncate ${
                      isCurrent ? "text-slate-900" : "text-slate-600"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 truncate">{step.subtitle}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Wizard Form Card - Pure Light Theme */}
      <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-2xs relative">
        {/* Top Decorative Header */}
        <div className="flex items-center justify-between pb-3.5 mb-4 sm:mb-5 border-b border-slate-100">
          <div>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
              {ADMISSION_STEPS[currentStep - 1].title}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Please enter valid details according to the student&apos;s legal birth certificate.
            </p>
          </div>
          <div className="hidden sm:block text-right">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Target Class</span>
            <span className="text-xs font-black text-purple-900 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-200 inline-block mt-0.5">
              {selectedClassName}
            </span>
          </div>
        </div>

        {/* Error Alert Box */}
        {formError && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-3.5 bg-rose-50 border border-rose-200 rounded-2xl flex items-center gap-2.5 text-xs font-bold text-rose-800"
          >
            <AlertCircle size={16} className="text-rose-600 shrink-0" />
            <span>{formError}</span>
          </motion.div>
        )}

        {/* Framer Motion Step Transitions */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {/* STEP 1: STUDENT DEMOGRAPHICS */}
            {currentStep === 1 && (
              <div className="space-y-5">
                {/* Target Class Selector */}
                <div>
                  <label className="text-xs font-black text-slate-800 uppercase tracking-wider block mb-2">
                    Select Class Applying For *
                  </label>
                  <select
                    value={formData.applying_for_class_id}
                    onChange={(e) => updateField("applying_for_class_id", e.target.value)}
                    className="w-full py-3 px-4 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:border-purple-600 focus:ring-4 focus:ring-purple-600/10 transition-all cursor-pointer shadow-xs"
                  >
                    {classesList.map((cls) => (
                      <option key={cls.id} value={cls.id}>
                        {cls.name} (Academic Session 2026-2027)
                      </option>
                    ))}
                  </select>
                </div>

                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Student First Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Aarav"
                      value={formData.first_name}
                      onChange={(e) => updateField("first_name", e.target.value)}
                      className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600/10"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Student Last Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sharma"
                      value={formData.last_name}
                      onChange={(e) => updateField("last_name", e.target.value)}
                      className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600/10"
                    />
                  </div>
                </div>

                {/* DOB & Gender */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      value={formData.date_of_birth}
                      onChange={(e) => updateField("date_of_birth", e.target.value)}
                      className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600/10"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">Gender *</label>
                    <div className="grid grid-cols-3 gap-2">
                      {GENDERS.map((g) => (
                        <button
                          key={g.id}
                          type="button"
                          onClick={() => updateField("gender", g.id)}
                          className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                            formData.gender === g.id
                              ? "bg-purple-900 text-white border-purple-900 shadow-xs"
                              : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                          }`}
                        >
                          {g.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Blood Group, Category & Religion */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">Blood Group</label>
                    <select
                      value={formData.blood_group}
                      onChange={(e) => updateField("blood_group", e.target.value)}
                      className="w-full py-2.5 px-3 rounded-xl border border-slate-200 text-xs font-medium bg-white focus:outline-none focus:border-purple-600"
                    >
                      {BLOOD_GROUPS.map((bg) => (
                        <option key={bg} value={bg}>
                          {bg}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => updateField("category", e.target.value)}
                      className="w-full py-2.5 px-3 rounded-xl border border-slate-200 text-xs font-medium bg-white focus:outline-none focus:border-purple-600"
                    >
                      {CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">Religion</label>
                    <select
                      value={formData.religion}
                      onChange={(e) => updateField("religion", e.target.value)}
                      className="w-full py-2.5 px-3 rounded-xl border border-slate-200 text-xs font-medium bg-white focus:outline-none focus:border-purple-600"
                    >
                      {RELIGIONS.map((rel) => (
                        <option key={rel} value={rel}>
                          {rel}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: PARENTS & GUARDIAN */}
            {currentStep === 2 && (
              <div className="space-y-6">
                {/* Father Info Card */}
                <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-3">
                  <span className="text-xs font-black text-purple-900 uppercase tracking-wider block">
                    Father&apos;s Information
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Father Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Vikram Sharma"
                        value={formData.father_name}
                        onChange={(e) => updateField("father_name", e.target.value)}
                        className="w-full py-2 px-3 rounded-xl border border-slate-200 text-xs bg-white focus:border-purple-600"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Father Mobile Number *
                      </label>
                      <input
                        type="tel"
                        maxLength={10}
                        placeholder="10-digit mobile"
                        value={formData.father_phone}
                        onChange={(e) => updateField("father_phone", e.target.value)}
                        className="w-full py-2 px-3 rounded-xl border border-slate-200 text-xs bg-white focus:border-purple-600"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Occupation</label>
                      <input
                        type="text"
                        placeholder="e.g. Business / Service / Teacher"
                        value={formData.father_occupation}
                        onChange={(e) => updateField("father_occupation", e.target.value)}
                        className="w-full py-2 px-3 rounded-xl border border-slate-200 text-xs bg-white focus:border-purple-600"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="father@example.com"
                        value={formData.father_email}
                        onChange={(e) => updateField("father_email", e.target.value)}
                        className="w-full py-2 px-3 rounded-xl border border-slate-200 text-xs bg-white focus:border-purple-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Mother Info Card */}
                <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-3">
                  <span className="text-xs font-black text-purple-900 uppercase tracking-wider block">
                    Mother&apos;s Information
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Mother Full Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Sunita Sharma"
                        value={formData.mother_name}
                        onChange={(e) => updateField("mother_name", e.target.value)}
                        className="w-full py-2 px-3 rounded-xl border border-slate-200 text-xs bg-white focus:border-purple-600"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Mother Mobile Number</label>
                      <input
                        type="tel"
                        maxLength={10}
                        placeholder="10-digit mobile"
                        value={formData.mother_phone}
                        onChange={(e) => updateField("mother_phone", e.target.value)}
                        className="w-full py-2 px-3 rounded-xl border border-slate-200 text-xs bg-white focus:border-purple-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Primary Contact Selector */}
                <div className="p-3 bg-purple-50/60 rounded-xl border border-purple-200/70 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-purple-950 block">Primary Contact For SMS/Updates</span>
                    <span className="text-[11px] text-purple-700">Official notices will be sent to this contact</span>
                  </div>
                  <select
                    value={formData.primary_contact}
                    onChange={(e) => updateField("primary_contact", e.target.value)}
                    className="py-1 px-3 rounded-lg border border-purple-300 text-xs font-bold bg-white text-purple-950"
                  >
                    <option value="father">Father</option>
                    <option value="mother">Mother</option>
                    <option value="guardian">Guardian</option>
                  </select>
                </div>
              </div>
            )}

            {/* STEP 3: RESIDENTIAL ADDRESS */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Street Address / House / Village *
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. House No 42, Rupahi Bazar, Near Hospital Road"
                    value={formData.address}
                    onChange={(e) => updateField("address", e.target.value)}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600/10"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">City / Town *</label>
                    <input
                      type="text"
                      placeholder="e.g. Rupahi / Nagaon"
                      value={formData.city}
                      onChange={(e) => updateField("city", e.target.value)}
                      className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium focus:border-purple-600"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">District</label>
                    <input
                      type="text"
                      placeholder="e.g. Nagaon"
                      value={formData.district}
                      onChange={(e) => updateField("district", e.target.value)}
                      className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium focus:border-purple-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">State</label>
                    <input
                      type="text"
                      value={formData.state}
                      onChange={(e) => updateField("state", e.target.value)}
                      className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium focus:border-purple-600"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">PIN Code *</label>
                    <input
                      type="text"
                      maxLength={6}
                      placeholder="e.g. 782125"
                      value={formData.pin_code}
                      onChange={(e) => updateField("pin_code", e.target.value)}
                      className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium focus:border-purple-600"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: ACADEMIC & FACILITIES */}
            {currentStep === 4 && (
              <div className="space-y-5">
                {/* Previous Academic History */}
                <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-3">
                  <span className="text-xs font-black text-purple-900 uppercase tracking-wider block">
                    Previous School Record (If Applicable)
                  </span>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Previous School Name</label>
                    <input
                      type="text"
                      placeholder="Name of last school attended"
                      value={formData.prev_school_name}
                      onChange={(e) => updateField("prev_school_name", e.target.value)}
                      className="w-full py-2 px-3 rounded-xl border border-slate-200 text-xs bg-white focus:border-purple-600"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Last Class Passed</label>
                      <input
                        type="text"
                        placeholder="e.g. Class 8"
                        value={formData.prev_class}
                        onChange={(e) => updateField("prev_class", e.target.value)}
                        className="w-full py-2 px-3 rounded-xl border border-slate-200 text-xs bg-white focus:border-purple-600"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Percentage / Grade</label>
                      <input
                        type="number"
                        placeholder="e.g. 85.5"
                        value={formData.prev_score_percentage}
                        onChange={(e) => updateField("prev_score_percentage", e.target.value)}
                        className="w-full py-2 px-3 rounded-xl border border-slate-200 text-xs bg-white focus:border-purple-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Campus Facilities Opt-In */}
                <div className="space-y-3">
                  <span className="text-xs font-black text-slate-800 uppercase tracking-wider block">
                    Campus Facilities Required
                  </span>

                  {/* School Bus Transport */}
                  <div className="p-4 rounded-2xl border border-slate-200 bg-white space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-900 flex items-center justify-center">
                          <Bus size={18} />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-slate-900 block">
                            School Bus / Transport Service
                          </span>
                          <span className="text-[11px] text-slate-500">
                            GPS tracked buses covering Nagaon, Rupahi, and surrounding areas.
                          </span>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={formData.requires_transport}
                        onChange={(e) => updateField("requires_transport", e.target.checked)}
                        className="w-5 h-5 accent-purple-900 rounded cursor-pointer"
                      />
                    </div>

                    {formData.requires_transport && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="pt-2 border-t border-slate-100"
                      >
                        <label className="text-xs font-bold text-slate-700 block mb-1">
                          Preferred Pickup / Drop Point *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Rupahi Tiniali / Police Station Point"
                          value={formData.transport_pickup_location}
                          onChange={(e) => updateField("transport_pickup_location", e.target.value)}
                          className="w-full py-2 px-3 rounded-xl border border-slate-200 text-xs bg-slate-50 focus:border-purple-600"
                        />
                      </motion.div>
                    )}
                  </div>

                  {/* School Hostel */}
                  <div className="p-4 rounded-2xl border border-slate-200 bg-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-900 flex items-center justify-center">
                        <Home size={18} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-900 block">Hostel Accommodation</span>
                        <span className="text-[11px] text-slate-500">
                          Secure residential boarding facility for outstation students.
                        </span>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={formData.requires_hostel}
                      onChange={(e) => updateField("requires_hostel", e.target.checked)}
                      className="w-5 h-5 accent-purple-900 rounded cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5: REVIEW & DECLARATION */}
            {currentStep === 5 && (
              <div className="space-y-5">
                {/* Summary Card - Pure Light Theme */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="text-xs font-bold text-slate-900 uppercase">Application Summary</span>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="text-[11px] font-semibold text-indigo-600 hover:underline"
                    >
                      Edit Info
                    </button>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                    <div>
                      <span className="text-slate-400 text-[10px] block">Student Name</span>
                      <span className="font-bold text-slate-800">
                        {formData.first_name} {formData.last_name}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">Target Class</span>
                      <span className="font-bold text-indigo-700">{selectedClassName}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">Date of Birth</span>
                      <span className="font-bold text-slate-800">{formData.date_of_birth}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">Parent Contact</span>
                      <span className="font-bold text-slate-800">
                        {formData.father_phone || formData.mother_phone || formData.guardian_phone}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">Address</span>
                      <span className="font-bold text-slate-800 truncate block">
                        {formData.city}, {formData.state} - {formData.pin_code}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">Bus Transport</span>
                      <span className="font-bold text-slate-800">
                        {formData.requires_transport ? `Yes (${formData.transport_pickup_location})` : "No"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Document Verification Notice - Pure Light */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                  <FileCheck2 size={18} className="text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Documents Required at Interaction</h4>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                      Please keep ready: (1) Student Birth Certificate, (2) Previous Year Report Card, (3) 4 Passport Photos, and (4) Transfer Certificate upon school visit.
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
                      className="w-4 h-4 accent-indigo-600 rounded shrink-0 mt-0.5"
                    />
                    <span className="text-xs text-slate-700 leading-normal font-medium">
                      I hereby declare that all information furnished in this application is true and complete to the best of my knowledge. I agree to abide by the rules and code of conduct of Mahmud International School, Rupahi.
                    </span>
                  </label>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Wizard Footer Controls - Solid Single-Color Buttons */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              disabled={submitting}
              className="px-4 py-2 rounded-lg border border-slate-300 bg-white text-xs font-bold text-slate-700 hover:bg-slate-50 shadow-2xs flex items-center gap-1.5 transition-colors cursor-pointer"
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
              className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold shadow-2xs transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Continue</span>
              <ArrowRight size={14} />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitting}
              className="px-6 py-2.5 sm:py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold shadow-2xs transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
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
  );
}
