import React from "react";
import Link from "next/link";
import { FileText, ArrowLeft, Scale, CheckCircle2, AlertTriangle, HelpCircle } from "lucide-react";
import AdmissionNavbar from "@/components/AdmissionNavbar";
import AdmissionFooter from "@/components/AdmissionFooter";

export const metadata = {
  title: "Terms and Conditions | Mahmud International School Admissions",
  description:
    "Official Terms and Conditions and Admission Regulations for Academic Session 2027–2028 at Mahmud International School, Rupahi.",
};

export default function TermsPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Scale size={14} />
              <span>Official Admission Regulations</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Academic Session 2027–2028 • Mahmud International School, Rupahi, Nagaon, Assam
            </p>

            <div className="mt-8 border-t border-slate-100 pt-6 space-y-8 text-xs sm:text-sm text-slate-650 leading-relaxed">
              {/* Section 1 */}
              <section className="space-y-2.5">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-900" />
                  1. Acceptance of Terms
                </h2>
                <p className="text-slate-600">
                  By completing and submitting an online admission registration form on this portal, parents, guardians, and prospective candidates acknowledge that they have read, understood, and agreed to adhere to these official Terms and Conditions, school rules, fee regulations, and the code of discipline established by the Mahmud Educational Foundation.
                </p>
              </section>

              {/* Section 2 */}
              <section className="space-y-2.5">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-900" />
                  2. Accuracy of Information & Declaration
                </h2>
                <p className="text-slate-600">
                  All personal details, dates of birth, category claims, parent information, and previous academic scores entered into the admission wizard must be accurate, genuine, and verified against government-issued documentation.
                </p>
                <div className="p-3.5 bg-rose-50/70 border border-rose-200 rounded-xl text-rose-800 text-xs flex items-start gap-2.5">
                  <AlertTriangle size={16} className="text-rose-600 shrink-0 mt-0.5" />
                  <p>
                    Submission of false, forged, or deliberately misleading information will result in immediate disqualification of the application or cancellation of the student&apos;s admission at any stage without refund of registration fees.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section className="space-y-2.5">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-900" />
                  3. In-Person Document Verification
                </h2>
                <p className="text-slate-600">
                  Receipt of a digital application reference slip (<code className="text-slate-800 bg-slate-100 px-1 py-0.5 rounded text-[11px]">MIS-ADM-2027-XXXX</code>) confirms registration receipt, but does not constitute final enrolled admission. Final seat confirmation is contingent upon physical verification of:
                </p>
                <ul className="space-y-1.5 list-disc pl-5 text-slate-600">
                  <li>Original Birth Certificate issued by the Municipal Corporation, Registrar of Births, or Village Panchayat.</li>
                  <li>Recent passport-sized photographs of the student and parents.</li>
                  <li>Original Transfer Certificate (TC) countersigned by the competent authority (for Class 2 and above).</li>
                  <li>Official Marksheet and character certificate from the previous recognized educational institution.</li>
                  <li>Parent/Guardian government ID card (Aadhaar / Voter ID / Passport).</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section className="space-y-2.5">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-900" />
                  4. Seat Allotment & Merit Matrix
                </h2>
                <p className="text-slate-600">
                  Admissions are granted based on merit, seat availability in the desired grade/stream, age eligibility criteria as of March 31, 2027, and candidate interaction or screening evaluation where applicable. The Admission Committee reserves the sole right to grant or deny admission.
                </p>
              </section>

              {/* Section 5 */}
              <section className="space-y-2.5">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-900" />
                  5. School Fees & Payment Schedule
                </h2>
                <p className="text-slate-600">
                  Upon selection confirmation, parents must remit the prescribed admission and term fees within the designated payment window to secure the seat. Fee structures are clearly communicated and itemized. Failure to deposit fees within the specified timeline may result in the seat being offered to the next waitlisted applicant.
                </p>
              </section>

              {/* Section 6 */}
              <section className="space-y-2.5">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-900" />
                  6. Bus Transport & Hostel Boarding Guidelines
                </h2>
                <p className="text-slate-600">
                  School bus transport and hostel facilities are optional amenities subject to route viability and boarding availability. While the school takes meticulous safety and security measures (including GPS tracking and resident wardens), users agree to follow all safety protocols, boarding guidelines, and timing schedules.
                </p>
              </section>

              {/* Section 7 */}
              <section className="space-y-2.5 pt-4 border-t border-slate-100">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-900" />
                  7. Grievances & Inquiries
                </h2>
                <p className="text-slate-600">
                  For any clarifications regarding the admission regulations, please connect directly with the campus admission desk:
                </p>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">Admissions Helpline</span>
                    <span className="text-slate-600">+91 98540 12345</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">Official Inquiries</span>
                    <span className="text-slate-600">admissions@misrupahi.com</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">Campus Hours</span>
                    <span className="text-slate-600">Mon - Sat: 8:30 AM – 3:30 PM</span>
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
