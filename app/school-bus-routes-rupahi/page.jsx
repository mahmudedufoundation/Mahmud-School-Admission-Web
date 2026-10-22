import React from "react";
import Link from "next/link";
import {
  Bus,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  Phone,
  ArrowRight,
  Clock,
  Radio,
  Navigation,
} from "lucide-react";
import AdmissionNavbar from "@/components/AdmissionNavbar";
import AdmissionFooter from "@/components/AdmissionFooter";

export const metadata = {
  title: "School Bus Transport Routes Across Rupahi & Nagaon | Mahmud International School",
  description:
    "Explore GPS-tracked school bus routes covering Rupahi Town, Juria, Batadrava, Dhing Gate, Alitangani, Samaguri, and Nagaon Sadar at Mahmud International School. Safe transport with speed governors and female conductors.",
  keywords: [
    "school bus transport rupahi juria",
    "school bus facility rupahi nagaon",
    "gps bus route rupahihat batadrava",
    "school bus nagaon assam",
    "safe student transport rupahi",
  ],
  alternates: {
    canonical: "https://admission.misrupahi.com/school-bus-routes-rupahi",
  },
  openGraph: {
    title: "School Bus Transport Routes | Mahmud International School Rupahi",
    description:
      "Safe, GPS-tracked daily student transportation covering 25+ pickup points across Rupahi, Juria, Batadrava, and Nagaon district.",
    url: "https://admission.misrupahi.com/school-bus-routes-rupahi",
    siteName: "Mahmud International School Admissions",
    locale: "en_IN",
    type: "article",
  },
};

const ROUTES_DATA = [
  {
    name: "Route 1: Rupahi Town & Rupahihat Circular",
    stoppages: ["Rupahi BDO Office", "Rupahihat Main Market", "Chowk Bazar", "Khatowal Tiniali", "MIS Campus Gate"],
    timing: "Morning: 07:45 AM | Afternoon: 03:15 PM",
  },
  {
    name: "Route 2: Juria Corridor",
    stoppages: ["Juria Bazar", "Telia Bebejia", "Bhangamur", "Dagaon", "Rupahi College Point", "MIS Campus Gate"],
    timing: "Morning: 07:30 AM | Afternoon: 03:30 PM",
  },
  {
    name: "Route 3: Batadrava & Dhing Gate",
    stoppages: ["Batadrava Than Chariali", "Kujidah", "Dhing Gate", "Rupahi Bypass", "MIS Campus Gate"],
    timing: "Morning: 07:25 AM | Afternoon: 03:40 PM",
  },
  {
    name: "Route 4: Alitangani & Samaguri Link",
    stoppages: ["Alitangani Bazar", "Balisatra", "Samaguri Tiniali", "Rupahi North Gate", "MIS Campus Gate"],
    timing: "Morning: 07:20 AM | Afternoon: 03:45 PM",
  },
  {
    name: "Route 5: Nagaon Town Express",
    stoppages: ["Nagaon Police Point", "Haiborgaon", "Khutikatia", "Purana Gudaam", "MIS Campus Gate"],
    timing: "Morning: 07:15 AM | Afternoon: 03:50 PM",
  },
];

export default function SchoolBusRoutesRupahiPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <AdmissionNavbar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Admission Portal
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">School Bus Routes (Rupahi & Nagaon)</span>
          </nav>

          {/* Hero Banner */}
          <section className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
              <Bus size={15} className="text-amber-600" />
              <span>Safe GPS School Transport Network</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight max-w-2xl mx-auto">
              School Bus Transport Routes in Rupahi, Juria & Nagaon
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-xl mx-auto mt-3 leading-relaxed">
              Equipped with live GPS tracking, speed governors, female attendants, and certified drivers. Providing safe door-to-door transport for students from Nursery to Class 12.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <Link
                href="/#admission-wizard-card"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-sm transition-all hover:scale-[1.02]"
              >
                <span>Apply & Book Bus Seat</span>
                <ArrowRight size={14} />
              </Link>
              <a
                href="tel:+919854012345"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold transition-colors"
              >
                <Phone size={14} className="text-emerald-600" />
                <span>Transport Desk: +91 98540 12345</span>
              </a>
            </div>
          </section>

          {/* Safety Standards Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                <Radio size={18} />
              </div>
              <h4 className="font-bold text-sm text-slate-900">Live GPS Fleet Tracking</h4>
              <p className="text-xs text-slate-600">Parents can monitor the exact bus location and estimated arrival time in real-time.</p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                <ShieldCheck size={18} />
              </div>
              <h4 className="font-bold text-sm text-slate-900">Female Bus Attendants</h4>
              <p className="text-xs text-slate-600">Dedicated female attendants on all junior routes to assist younger children boarding.</p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <Navigation size={18} />
              </div>
              <h4 className="font-bold text-sm text-slate-900">Speed Governors & First Aid</h4>
              <p className="text-xs text-slate-600">Strictly regulated 40 km/h speed limits, fire safety extinguishers, and medical kits.</p>
            </div>
          </section>

          {/* Active Bus Routes Table */}
          <section className="space-y-4">
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
              Active Bus Routes & Stoppage Schedule
            </h2>

            <div className="space-y-3">
              {ROUTES_DATA.map((route, i) => (
                <div key={i} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <h3 className="font-bold text-sm sm:text-base text-slate-900">{route.name}</h3>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full self-start sm:self-auto">
                      {route.timing}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {route.stoppages.map((stop, sIdx) => (
                      <span key={sIdx} className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/80 text-[11px] font-medium text-slate-700">
                        📍 {stop}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Transport Direct CTA */}
          <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl text-center space-y-3">
            <h3 className="text-lg sm:text-xl font-bold">Reserve Bus Seat for Academic Session 2027–2028</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
              Select the &quot;School Bus Transport&quot; option in Step 4 of the online admission wizard to secure your child&apos;s seat.
            </p>
            <div className="pt-2">
              <Link
                href="/#admission-wizard-card"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-xs sm:text-sm transition-colors"
              >
                <span>Complete Admission with Bus Facility</span>
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
