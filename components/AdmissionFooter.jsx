"use client";

import React from "react";
import { GraduationCap, MapPin, Phone, Mail, Clock, Heart } from "lucide-react";

export default function AdmissionFooter() {
  return (
    <footer className="mt-20 border-t border-purple-100 bg-gradient-to-b from-white to-purple-50/50 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-purple-100">
          {/* Col 1: School Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-900 text-amber-400 flex items-center justify-center font-bold shadow-md">
                <GraduationCap size={22} />
              </div>
              <div>
                <h3 className="font-extrabold text-sm text-slate-900">Mahmud International School</h3>
                <p className="text-[11px] text-purple-700 font-semibold">Excellence in Global Education</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Committed to providing world-class academic rigour, holistic character building, and modern digital learning in Rupahi, Nagaon.
            </p>
          </div>

          {/* Col 2: Campus & Contact */}
          <div className="space-y-2 text-xs text-slate-600">
            <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider mb-3">
              Admissions Office
            </h4>
            <p className="flex items-start gap-2">
              <MapPin size={15} className="text-purple-700 shrink-0 mt-0.5" />
              <span>Campus: Rupahi Town, Near Block Office, Nagaon, Assam - 782125</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={15} className="text-purple-700 shrink-0" />
              <span>Helpline: +91 98540 12345 / 98540 67890</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={15} className="text-purple-700 shrink-0" />
              <span>Email: admissions@misrupahi.com</span>
            </p>
          </div>

          {/* Col 3: Admissions Office Hours */}
          <div className="space-y-2 text-xs text-slate-600">
            <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider mb-3">
              Visiting Hours
            </h4>
            <p className="flex items-center gap-2">
              <Clock size={15} className="text-amber-600 shrink-0" />
              <span>Monday to Saturday: 8:30 AM – 3:30 PM</span>
            </p>
            <p className="text-[11px] text-slate-500 mt-2">
              Campus tours and counseling sessions are available on all working days by prior appointment.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
          <p>© {new Date().getFullYear()} Mahmud Educational Foundation. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>Official Online Admission Portal</span>
            <span>•</span>
            <span className="text-purple-700 font-bold">Session 2026-2027</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
