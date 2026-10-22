import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  Bus,
  Home,
  ArrowRight,
  ShieldCheck,
  BookOpen,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";
import AdmissionNavbar from "@/components/AdmissionNavbar";
import AdmissionFooter from "@/components/AdmissionFooter";

export const metadata = {
  title: "Best English Medium School in Rupahi | Admission 2027–2028 | Mahmud International School",
  description:
    "Looking for the best English medium school in Rupahi, Nagaon, Assam? Mahmud International School offers CBSE-standard schooling from Nursery to Class XII (Science, Commerce, Arts), GPS bus fleet across Rupahi & Juria, and residential hostel boarding. Apply online in 3 minutes.",
  keywords: [
    "best school in rupahi",
    "school admission in rupahi",
    "english medium school in rupahi",
    "mahmud international school rupahi",
    "top schools in rupahihat nagaon",
    "cbse school in rupahi assam",
    "school admission 2027 2028 rupahi",
    "nagaon english medium school",
  ],
  alternates: {
    canonical: "https://admission.misrupahi.com/admission-rupahi",
  },
  openGraph: {
    title: "Best English Medium School in Rupahi | Mahmud International School",
    description:
      "Admissions open for Session 2027-2028 at Mahmud International School, Rupahi. Modern smart classrooms, science labs, GPS bus transport & hostel boarding.",
    url: "https://admission.misrupahi.com/admission-rupahi",
    siteName: "Mahmud International School Admissions",
    locale: "en_IN",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["School", "EducationalOrganization", "LocalBusiness"],
      "@id": "https://admission.misrupahi.com/#school",
      name: "Mahmud International School",
      alternateName: ["MIS Rupahi", "Mahmud School Rupahi"],
      url: "https://admission.misrupahi.com/admission-rupahi",
      telephone: "+91-98540-12345",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rupahi Town, Near Block Development Office (BDO), Rupahi-Juria Road",
        addressLocality: "Rupahihat / Nagaon",
        addressRegion: "Assam",
        postalCode: "782125",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "26.4384",
        longitude: "92.6841",
      },
      areaServed: ["Rupahi", "Rupahihat", "Juria", "Batadrava", "Dhing", "Nagaon"],
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
          name: "Best School in Rupahi",
          item: "https://admission.misrupahi.com/admission-rupahi",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why is Mahmud International School ranked the best school in Rupahi, Nagaon?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mahmud International School is recognized as the leading institution in Rupahi due to its CBSE-aligned English medium curriculum, smart digital classrooms, student-teacher ratio of 1:20, experienced faculty, modern science laboratories, GPS bus transportation, and disciplined residential hostel boarding.",
          },
        },
        {
          "@type": "Question",
          name: "What classes are open for new admission at MIS Rupahi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Admissions for Academic Session 2027–2028 are open from Nursery, LKG, UKG up to Class XII in Science, Commerce, and Arts streams with integrated competitive entrance guidance.",
          },
        },
      ],
    },
  ],
};

export default function AdmissionRupahiPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AdmissionNavbar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Admission Portal
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Best School in Rupahi</span>
          </nav>

          {/* Hero Authority Banner */}
          <section className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-gradient-to-b from-amber-100/30 via-indigo-50/20 to-transparent blur-2xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
              <Award size={14} className="text-amber-600" />
              <span>Ranked #1 English Medium School in Rupahi</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight max-w-2xl mx-auto">
              Mahmud International School, Rupahi
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-xl mx-auto mt-3 leading-relaxed">
              Empowering students from Nursery to Class XII with academic excellence, moral values, and 360° personality development in Rupahi, Nagaon, Assam.
            </p>

            {/* Quick Action CTA */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <Link
                href="/#admission-wizard-card"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-sm transition-all hover:scale-[1.02]"
              >
                <span>Apply for Admission 2027–2028</span>
                <ArrowRight size={14} />
              </Link>
              <a
                href="tel:+919854012345"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold transition-colors"
              >
                <Phone size={14} className="text-emerald-600" />
                <span>Call Helpline: +91 98540 12345</span>
              </a>
            </div>
          </section>

          {/* 4 Pillars of Excellence in Rupahi */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                CBSE-Aligned English Medium Curriculum
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Modern pedagogy with foundational phonics, advanced STEM laboratories, computer coding, and multilingual fluency from Nursery to Senior Secondary.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                <Bus size={20} />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                Safe GPS Bus Fleet Across Rupahi & Nagaon
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Extensive fleet covering Rupahi town, Juria, Batadrava, Dhing gate, Alitangani, and Nagaon Sadar with female conductors and verified drivers.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                <Home size={20} />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                On-Campus Boarding Hostel Facilities
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clean, safe residential accommodation for boys and girls with 24/7 CCTV security, resident wardens, nutritious dining, and supervised evening study hours.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                Instant Online Admission Registration
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Parents can submit applications online in under 3 minutes, receive an official digital receipt slip with QR verification, and track status live 24/7.
              </p>
            </div>
          </section>

          {/* Academic Stages Overview */}
          <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800">
              <BookOpen size={15} className="text-indigo-600" />
              <span>Comprehensive Schooling from Age 3+ to 18</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Academic Streams Open for 2027–2028 Admissions in Rupahi
            </h2>

            <div className="divide-y divide-slate-100 text-xs sm:text-sm">
              <div className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="font-bold text-slate-900">Pre-Primary (Nursery, LKG, UKG)</span>
                  <p className="text-xs text-slate-500 mt-0.5">Play-based early learning, phonics, number sense & sensory motor development</p>
                </div>
                <span className="text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md self-start sm:self-auto shrink-0">
                  Ages 3+ to 5+ Years
                </span>
              </div>

              <div className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="font-bold text-slate-900">Primary & Middle School (Classes I to VIII)</span>
                  <p className="text-xs text-slate-500 mt-0.5">Core English medium subjects, experiential sciences, mathematics & computer coding</p>
                </div>
                <span className="text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md self-start sm:self-auto shrink-0">
                  Ages 6+ to 14 Years
                </span>
              </div>

              <div className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="font-bold text-slate-900">Secondary High School (Classes IX & X)</span>
                  <p className="text-xs text-slate-500 mt-0.5">Rigorous board exam preparation, physics/chemistry/biology laboratories & career counseling</p>
                </div>
                <span className="text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md self-start sm:self-auto shrink-0">
                  Classes 9 & 10
                </span>
              </div>

              <div className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="font-bold text-slate-900">Senior Secondary Class XI & XII (Science, Commerce, Arts)</span>
                  <p className="text-xs text-slate-500 mt-0.5">Specialized stream selection with integrated competitive entrance coaching (NEET, JEE, CUET)</p>
                </div>
                <span className="text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md self-start sm:self-auto shrink-0">
                  Senior Secondary
                </span>
              </div>
            </div>
          </section>

          {/* Location & Contact Information Card */}
          <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <MapPin size={15} />
              <span>Campus Location & Visiting Hours</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight">
              Visit Mahmud International School Campus in Rupahi
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              Located conveniently in Rupahi town, near the Block Development Office (BDO), accessible via main Rupahi-Juria and Nagaon transport links.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-slate-300">
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-amber-400 shrink-0" />
                <span>Rupahihat, Nagaon, Assam - 782125</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} className="text-amber-400 shrink-0" />
                <span>Office Hours: 08:30 AM - 03:30 PM (Mon-Sat)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Phone size={13} className="text-amber-400 shrink-0" />
                <span>Helpline: +91 98540 12345</span>
              </span>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <Link
                href="/#admission-wizard-card"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-bold transition-colors"
              >
                <span>Fill Online Admission Application Now</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </section>
        </div>
      </main>

      <AdmissionFooter />
    </div>
  );
}
