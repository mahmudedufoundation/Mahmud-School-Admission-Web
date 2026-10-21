"use client";

import React, { useEffect, useRef } from "react";
import { Award, ShieldCheck, Bus, GraduationCap, ArrowRight, Sparkles } from "lucide-react";
import gsap from "gsap";

export default function AdmissionHero({ onScrollToForm }) {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-logo", {
        opacity: 0,
        scale: 0.85,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.from(".hero-badge", {
        opacity: 0,
        y: -10,
        duration: 0.6,
        delay: 0.15,
        ease: "power2.out",
      });

      gsap.from(".hero-title", {
        opacity: 0,
        y: 15,
        duration: 0.7,
        delay: 0.25,
        ease: "power2.out",
      });

      gsap.from(".hero-desc", {
        opacity: 0,
        y: 12,
        duration: 0.6,
        delay: 0.35,
        ease: "power2.out",
      });

      gsap.from(".hero-cards", {
        opacity: 0,
        y: 15,
        stagger: 0.1,
        duration: 0.6,
        delay: 0.45,
        ease: "power2.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative pt-4 pb-6 sm:pt-6 sm:pb-8 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Official School Logo */}
        <div className="hero-logo w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center">
          <img
            src="/images/logo.png"
            alt="Mahmud International School Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Academic Session Pill */}
        <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-xs mb-3">
          <Sparkles size={13} className="text-indigo-600" />
          <span>Academic Session 2026-2027 Admissions Open</span>
        </div>

        {/* Main Heading - Clean Single-Color Solid Typography */}
        <h1 className="hero-title text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
          Empowering Tomorrow&apos;s Leaders at Mahmud International School
        </h1>

        {/* Subtitle - Compact and Informative */}
        <p className="hero-desc text-slate-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-2 sm:mt-3 leading-relaxed font-normal">
          Complete your child&apos;s admission registration online in 5 easy steps. Providing holistic English medium education, modern digital labs, and caring guidance in Rupahi, Nagaon.
        </p>

        {/* Action Button - Single Solid Color */}
        <div className="mt-4 sm:mt-5 flex items-center justify-center">
          <button
            type="button"
            onClick={onScrollToForm}
            className="w-full sm:w-auto px-6 py-2.5 sm:py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Start Online Application</span>
            <ArrowRight size={15} />
          </button>
        </div>

        {/* 4 Feature Value Badges - Clean Light Theme */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mt-6 sm:mt-8 text-left">
          <div className="hero-cards p-3.5 sm:p-4 rounded-xl bg-slate-50/80 border border-slate-200 shadow-2xs hover:bg-white transition-colors">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center mb-2">
              <GraduationCap size={16} />
            </div>
            <h4 className="text-xs font-bold text-slate-900">Nursery to Class XII</h4>
            <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
              Comprehensive curriculum across primary, secondary & senior streams.
            </p>
          </div>

          <div className="hero-cards p-3.5 sm:p-4 rounded-xl bg-slate-50/80 border border-slate-200 shadow-2xs hover:bg-white transition-colors">
            <div className="w-8 h-8 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center mb-2">
              <Award size={16} />
            </div>
            <h4 className="text-xs font-bold text-slate-900">Academic Excellence</h4>
            <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
              Experienced teaching faculty with personalized student mentoring.
            </p>
          </div>

          <div className="hero-cards p-3.5 sm:p-4 rounded-xl bg-slate-50/80 border border-slate-200 shadow-2xs hover:bg-white transition-colors">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center mb-2">
              <Bus size={16} />
            </div>
            <h4 className="text-xs font-bold text-slate-900">Safe GPS Bus Fleet</h4>
            <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
              Verified bus routes covering Rupahi, Juria, Nagaon and nearby areas.
            </p>
          </div>

          <div className="hero-cards p-3.5 sm:p-4 rounded-xl bg-slate-50/80 border border-slate-200 shadow-2xs hover:bg-white transition-colors">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
              <ShieldCheck size={16} />
            </div>
            <h4 className="text-xs font-bold text-slate-900">Digital Tracking Slip</h4>
            <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
              Instant acknowledgment slip with 24/7 online status lookup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
