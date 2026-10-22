import React from "react";
import Link from "next/link";
import {
  Home,
  ShieldCheck,
  Utensils,
  Clock,
  CheckCircle2,
  Phone,
  ArrowRight,
  BookOpen,
  Wifi,
  Lock,
} from "lucide-react";
import AdmissionNavbar from "@/components/AdmissionNavbar";
import AdmissionFooter from "@/components/AdmissionFooter";

export const metadata = {
  title: "School with Hostel in Rupahi, Nagaon | Boarding Admissions 2027–2028 | Mahmud International School",
  description:
    "Looking for a safe, modern boarding school with hostel in Rupahi, Nagaon, Assam? Mahmud International School provides air-conditioned residential hostels for boys and girls, 24/7 security, nutritious dining, and supervised evening study hours.",
  keywords: [
    "school with hostel in rupahi assam",
    "boarding school in rupahi nagaon",
    "hostel school in rupahi",
    "residential school assam",
    "hostel facility rupahihat nagaon",
    "best boarding school nagaon",
  ],
  alternates: {
    canonical: "https://admission.misrupahi.com/hostel-school-rupahi",
  },
  openGraph: {
    title: "School with Hostel in Rupahi, Nagaon | Mahmud International School",
    description:
      "Secure on-campus residential boarding for boys and girls in Rupahi, Assam. Modern dormitories, nutritious meal schedule & 24/7 CCTV surveillance.",
    url: "https://admission.misrupahi.com/hostel-school-rupahi",
    siteName: "Mahmud International School Admissions",
    locale: "en_IN",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Accommodation",
      name: "Mahmud International School Residential Hostel",
      description: "On-campus residential student boarding facility in Rupahi, Nagaon, Assam with round-the-clock security and faculty tutoring.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rupahi Town, Near BDO Office",
        addressLocality: "Rupahihat, Nagaon",
        addressRegion: "Assam",
        postalCode: "782125",
        addressCountry: "IN",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://admission.misrupahi.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Hostel & Boarding Facility",
          item: "https://admission.misrupahi.com/hostel-school-rupahi",
        },
      ],
    },
  ],
};

export default function HostelSchoolRupahiPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AdmissionNavbar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Admission Portal
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Hostel & Boarding in Rupahi</span>
          </nav>

          {/* Hero Banner */}
          <section className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
              <Home size={15} className="text-blue-600" />
              <span>Residential Boarding Admissions 2027–2028</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight max-w-2xl mx-auto">
              Safe & Disciplined Residential Hostel in Rupahi, Assam
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-xl mx-auto mt-3 leading-relaxed">
              A home away from home. Dedicated boarding facilities for boys and girls with 24/7 CCTV surveillance, nutritious dining, resident faculty mentors, and medical support.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <Link
                href="/#admission-wizard-card"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-sm transition-all hover:scale-[1.02]"
              >
                <span>Apply for Hostel Admission</span>
                <ArrowRight size={14} />
              </Link>
              <a
                href="tel:+919854012345"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold transition-colors"
              >
                <Phone size={14} className="text-emerald-600" />
                <span>Hostel Inquiry: +91 98540 12345</span>
              </a>
            </div>
          </section>

          {/* Key Amenities Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <Lock size={18} />
              </div>
              <h4 className="font-bold text-sm text-slate-900">Separate Dormitories</h4>
              <p className="text-xs text-slate-600">Strictly segregated residential blocks for boys and girls with resident wardens.</p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                <Utensils size={18} />
              </div>
              <h4 className="font-bold text-sm text-slate-900">Nutritious Hygienic Food</h4>
              <p className="text-xs text-slate-600">Pure RO drinking water, 4 balanced daily meals designed for growing students.</p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                <Clock size={18} />
              </div>
              <h4 className="font-bold text-sm text-slate-900">Supervised Evening Study</h4>
              <p className="text-xs text-slate-600">Compulsory daily self-study and doubt-clearing sessions guided by resident teachers.</p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center font-bold">
                <ShieldCheck size={18} />
              </div>
              <h4 className="font-bold text-sm text-slate-900">24/7 Security & CCTV</h4>
              <p className="text-xs text-slate-600">Perimeter security guards, smart biometric access, and complete CCTV surveillance.</p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                <BookOpen size={18} />
              </div>
              <h4 className="font-bold text-sm text-slate-900">Hostel Library & Reading Hall</h4>
              <p className="text-xs text-slate-600">Quiet study environment equipped with reference books, newspapers, and computers.</p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
                <CheckCircle2 size={18} />
              </div>
              <h4 className="font-bold text-sm text-slate-900">Medical Care on Call</h4>
              <p className="text-xs text-slate-600">First-aid clinic, tie-ups with nearby Nagaon hospitals, and emergency ambulance on campus.</p>
            </div>
          </section>

          {/* Callout */}
          <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl text-center space-y-3">
            <h3 className="text-lg sm:text-xl font-bold">Plan a Campus & Hostel Visit in Rupahi</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
              Parents are welcome to inspect hostel dormitories, dining halls, and meet resident faculty wardens.
            </p>
            <div className="pt-2">
              <Link
                href="/#admission-wizard-card"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-xs sm:text-sm transition-colors"
              >
                <span>Register with Hostel Option</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <AdmissionFooter />
    </div>
  );
}
