"use client";

import React, { useState } from "react";
import { Search, X, Loader2, AlertCircle } from "lucide-react";

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
      return (
        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
          Selected / Accepted
        </span>
      );
    }
    if (s === "interview_scheduled") {
      return (
        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
          Interaction Scheduled
        </span>
      );
    }
    if (s === "under_review") {
      return (
        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
          Under Review
        </span>
      );
    }
    if (s === "rejected") {
      return (
        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-200">
          Not Shortlisted
        </span>
      );
    }
    return (
      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">
        Application Submitted
      </span>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/40 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        {/* Header - Pure Light Theme */}
        <div className="p-4 bg-white border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Search size={16} className="text-indigo-600" />
            <h3 className="text-sm font-bold text-slate-900">Track Application Status</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={15} />
          </button>
        </div>

        {/* Search Input Body */}
        <div className="p-4 sm:p-5 space-y-3.5">
          <form onSubmit={handleSearch} className="space-y-2.5">
            <label className="text-xs font-semibold text-slate-700 block">
              Enter Application Number or Registered Phone Number
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="e.g. MIS-ADM-2026-1048 or 9876543210"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 py-2 px-3 rounded-lg border border-slate-300 text-xs font-medium focus:border-indigo-600 focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading || !query.trim()}
                className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 disabled:opacity-50 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {loading ? <Loader2 size={13} className="animate-spin" /> : <Search size={13} />}
                <span>Search</span>
              </button>
            </div>
          </form>

          {/* Error Message */}
          {error && (
            <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg text-xs font-medium text-rose-700 flex items-center gap-2">
              <AlertCircle size={14} className="shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Results List */}
          {results && results.length > 0 && (
            <div className="space-y-2.5 max-h-80 overflow-y-auto pt-1">
              {results.map((app) => (
                <div
                  key={app.id}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-700 font-mono tracking-wider">
                      {app.application_number}
                    </span>
                    {getStatusBadge(app.status)}
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-slate-400 text-[10px] block">Student Name</span>
                      <span className="font-bold text-slate-900">
                        {app.first_name} {app.last_name}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">Class Applied</span>
                      <span className="font-bold text-slate-900">
                        {app.classes?.name || "Class"}
                      </span>
                    </div>
                  </div>

                  <div className="text-[10px] text-slate-400 pt-1.5 border-t border-slate-200 flex items-center justify-between">
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
