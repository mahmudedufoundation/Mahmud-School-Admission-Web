import React from "react";
import Link from "next/link";
import { Shield, ArrowLeft, Lock, FileText, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import AdmissionNavbar from "@/components/AdmissionNavbar";
import AdmissionFooter from "@/components/AdmissionFooter";

export const metadata = {
  title: "Privacy Policy | Mahmud International School Admissions",
  description:
    "Official Privacy Policy for Mahmud International School Online Admission Portal. Learn how student and parent data is collected, processed, and safeguarded.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <AdmissionNavbar />

      <main className="flex-1 py-10 sm:py-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb / Back Link */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs"
            >
              <ArrowLeft size={14} />
              <span>Back to Admission Portal</span>
            </Link>
          </div>

          {/* Header Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Shield size={14} />
              <span>Official Student Data Policy</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Effective Date: Academic Session 2027–2028 • Last Updated: October 2026
            </p>

            <div className="mt-8 border-t border-slate-100 pt-6 space-y-8 text-xs sm:text-sm text-slate-650 leading-relaxed">
              {/* Section 1 */}
              <section className="space-y-2.5">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-900" />
                  1. Commitment to Privacy
                </h2>
                <p className="text-slate-600">
                  Mahmud International School (MIS), Rupahi, Nagaon, Assam, is deeply committed to protecting the privacy, confidentiality, and security of students, parents, and legal guardians who use our dedicated Online Student Admission Portal (<code className="text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono">admission.misrupahi.com</code>). This policy outlines how information submitted through the admission registration form is gathered, utilized, stored, and protected in compliance with the Digital Personal Data Protection (DPDP) Act of India and recognized educational standards.
                </p>
              </section>

              {/* Section 2 */}
              <section className="space-y-2.5">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-900" />
                  2. Information We Collect
                </h2>
                <p className="text-slate-600">
                  During online registration, we collect only data essential for processing the student&apos;s prospective enrollment:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <h3 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-emerald-600" />
                      Student Demographics
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      Full legal name, date of birth, gender, blood group, category, and target class/stream.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <h3 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-emerald-600" />
                      Parent & Guardian Contacts
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      Parents&apos; names, mobile contact numbers, email addresses, and occupations.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <h3 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-emerald-600" />
                      Residential Information
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      Permanent and current residential address, city, district, state, and postal PIN code.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <h3 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-emerald-600" />
                      Prior Academic & Facility Needs
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      Previous school records, school bus transport requirements, and boarding hostel requirements.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section className="space-y-2.5">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-900" />
                  3. How Your Information Is Used
                </h2>
                <ul className="space-y-1.5 list-disc pl-5 text-slate-600">
                  <li>Validating eligibility against age requirements and class standards for Session 2027–2028.</li>
                  <li>Generating your unique digital Application Reference Slip (<code className="text-slate-800 bg-slate-100 px-1 py-0.5 rounded text-[11px]">MIS-ADM-2027-XXXX</code>).</li>
                  <li>Communicating admission interview dates, document verification schedules, and status notifications via SMS, WhatsApp, and email.</li>
                  <li>Planning school bus transport routing and hostel room allocations for enrolled candidates.</li>
                  <li>Creating the foundational student profile in the school information management database upon admission confirmation.</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section className="space-y-2.5">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-900" />
                  4. Non-Disclosure & Security Safeguards
                </h2>
                <p className="text-slate-600">
                  We enforce a strict <strong>zero-commercial-sharing policy</strong>:
                </p>
                <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2 text-slate-700">
                  <div className="flex items-center gap-2 font-bold text-emerald-900 text-xs">
                    <Lock size={15} />
                    <span>Bank-Grade 256-Bit SSL Encryption</span>
                  </div>
                  <p className="text-[11px] leading-relaxed">
                    All application payloads are encrypted during transmission and stored in SOC-2 compliant database infrastructure with role-based access control. No student or parent information is ever rented, leased, or sold to third-party marketing companies, advertisers, or lead brokers.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section className="space-y-2.5">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-900" />
                  5. Parental Rights & Information Corrections
                </h2>
                <p className="text-slate-600">
                  Parents and guardians possess the legal right to inspect their application record, request corrections to clerical errors, or withdraw their application. To update submitted contact information or correct spellings, contact the Admissions Desk with your Application Number.
                </p>
              </section>

              {/* Section 6 */}
              <section className="space-y-2.5 pt-4 border-t border-slate-100">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-900" />
                  6. Contact the Admissions Desk
                </h2>
                <p className="text-slate-600">
                  For privacy inquiries, grievance redressal, or data verification questions, please contact:
                </p>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">Admissions Helpline</span>
                    <span className="text-slate-600">+91 98540 12345</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">Official Email</span>
                    <span className="text-slate-600">admissions@misrupahi.com</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">Campus Location</span>
                    <span className="text-slate-600">Rupahi, Nagaon, Assam - 782125</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <AdmissionFooter />
    </div>
  );
}
