"use client";

import React, { useState } from "react";
import { Search, X, Loader2, CheckCircle2, Clock, Calendar, AlertCircle } from "lucide-react";

export default function ApplicationTrackerModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      setLoading(true);
      setError("");
      setResults(null);

      const res = await fetch(`/api/admission/track?q=${encodeURIComponent(query.trim())}`);
      const json = await res.json();

      if (!res.ok || json.error) {
        throw new Error(json.error || "Failed to search application.");
      }

      setResults(json.results || []);
      if ((json.results || []).length === 0) {
        setError("No application found matching this reference or mobile number.");
      }
    } catch (err) {
      setError(err.message || "Search failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status) => {
    const s = (status || "").toLowerCase();
    if (s === "accepted") {
      return <span className="px-2.5 py-1 rounded-full text-[11px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300">Selected / Accepted</span>;
    }
    if (s === "interview_scheduled") {
      return <span className="px-2.5 py-1 rounded-full text-[11px] font-black bg-purple-100 text-purple-900 border border-purple-300">Interaction Scheduled</span>;
    }
    if (s === "under_review") {
      return <span className="px-2.5 py-1 rounded-full text-[11px] font-black bg-amber-100 text-amber-900 border border-amber-300">Under Review</span>;
    }
    if (s === "rejected") {
      return <span className="px-2.5 py-1 rounded-full text-[11px] font-black bg-rose-100 text-rose-800 border border-rose-300">Not Shortlisted</span>;
    }
    return <span className="px-2.5 py-1 rounded-full text-[11px] font-black bg-blue-100 text-blue-800 border border-blue-300">Application Submitted</span>;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-purple-100 overflow-hidden">
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-purple-950 to-indigo-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Search size={18} className="text-amber-400" />
            <h3 className="text-base font-bold">Track Application Status</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Search Input Body */}
        <div className="p-6 space-y-4">
          <form onSubmit={handleSearch} className="space-y-3">
            <label className="text-xs font-bold text-slate-700 block">
              Enter Application Number or Registered Phone Number
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="e.g. MIS-ADM-2026-1048 or 9876543210"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 py-2.5 px-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium focus:border-purple-600 focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading || !query.trim()}
                className="px-4 py-2.5 rounded-xl bg-purple-900 text-white text-xs font-bold hover:bg-purple-950 disabled:opacity-50 flex items-center gap-1.5 transition-all cursor-pointer"
              >
                {loading ? <Loader2 size={14} className="animate-spin" /> : <Search size={14} />}
                <span>Search</span>
              </button>
            </div>
          </form>

          {/* Error Message */}
          {error && (
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs font-medium text-rose-700 flex items-center gap-2">
              <AlertCircle size={15} className="shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Results List */}
          {results && results.length > 0 && (
            <div className="space-y-3 max-h-80 overflow-y-auto pt-2">
              {results.map((app) => (
                <div
                  key={app.id}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 hover:border-purple-200 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-purple-950 font-mono tracking-wider">
                      {app.application_number}
                    </span>
                    {getStatusBadge(app.status)}
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-slate-400 text-[10px] block">Student Name</span>
                      <span className="font-bold text-slate-800">
                        {app.first_name} {app.last_name}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">Class Applied</span>
                      <span className="font-bold text-slate-800">
                        {app.classes?.name || "Class"}
                      </span>
                    </div>
                  </div>

                  <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-200/60 flex items-center justify-between">
                    <span>Parent: {app.father_name}</span>
                    <span>Applied on: {new Date(app.created_at).toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
