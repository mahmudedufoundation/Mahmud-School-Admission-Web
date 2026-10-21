"use client";

import React, { useEffect, useRef } from "react";
import { Sparkles, CheckCircle2, Award, ShieldCheck, Bus, GraduationCap, ChevronDown } from "lucide-react";
import gsap from "gsap";

export default function AdmissionHero({ onScrollToForm }) {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-badge", {
        opacity: 0,
        y: -15,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".hero-title", {
        opacity: 0,
        y: 25,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".hero-desc", {
        opacity: 0,
        y: 20,
        duration: 0.9,
        delay: 0.4,
        ease: "power3.out",
      });

      gsap.from(".hero-cards", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.9,
        delay: 0.5,
        ease: "back.out(1.4)",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-20">
      {/* Background ambient gradient orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-purple-200/40 via-amber-100/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Glowing Session Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-100 via-amber-50 to-purple-100 border border-purple-200/80 text-purple-950 font-bold text-xs sm:text-sm shadow-xs mb-6 hero-badge">
          <Sparkles size={14} className="text-amber-500 animate-spin" style={{ animationDuration: "6s" }} />
          <span>Academic Session 2026-2027 Admissions Open</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
        </div>

        {/* Main Heading */}
        <h1 className="hero-title text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
          Empowering Tomorrow&apos;s Leaders at{" "}
          <span className="bg-gradient-to-r from-purple-900 via-indigo-800 to-amber-600 bg-clip-text text-transparent">
            Mahmud International School
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-desc text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4 sm:mt-6 leading-relaxed font-normal">
          Complete your child&apos;s admission registration online in 5 simple steps. Experience world-class CBSE education, holistic sports development, and state-of-the-art campus infrastructure in Rupahi.
        </p>

        {/* Action Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={onScrollToForm}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-purple-950 via-purple-900 to-indigo-900 text-amber-300 font-bold text-sm sm:text-base shadow-xl shadow-purple-950/25 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 border border-amber-400/30 cursor-pointer"
          >
            <span>Start Online Application</span>
            <ChevronDown size={18} className="text-amber-400 animate-bounce" />
          </button>
        </div>

        {/* 4 Feature Value Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-12 sm:mt-16 text-left">
          <div className="hero-cards glass-panel p-4 rounded-2xl hover:border-purple-300 hover:shadow-md transition-all">
            <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-purple-900 mb-2.5">
              <GraduationCap size={18} />
            </div>
            <h4 className="text-xs font-extrabold text-slate-900">Nursery to Class XII</h4>
            <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
              Specialized streams in Science, Commerce & Arts.
            </p>
          </div>

          <div className="hero-cards glass-panel p-4 rounded-2xl hover:border-purple-300 hover:shadow-md transition-all">
            <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 mb-2.5">
              <Award size={18} />
            </div>
            <h4 className="text-xs font-extrabold text-slate-900">100% CBSE Results</h4>
            <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
              Experienced faculty with high academic pass rates.
            </p>
          </div>

          <div className="hero-cards glass-panel p-4 rounded-2xl hover:border-purple-300 hover:shadow-md transition-all">
            <div className="w-9 h-9 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-900 mb-2.5">
              <Bus size={18} />
            </div>
            <h4 className="text-xs font-extrabold text-slate-900">GPS Transport</h4>
            <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
              Safe school buses covering Rupahi, Nagaon & vicinity.
            </p>
          </div>

          <div className="hero-cards glass-panel p-4 rounded-2xl hover:border-purple-300 hover:shadow-md transition-all">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 mb-2.5">
              <ShieldCheck size={18} />
            </div>
            <h4 className="text-xs font-extrabold text-slate-900">Digital Tracking</h4>
            <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
              Instant digital application slip with real-time status.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
