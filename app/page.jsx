"use client";

import React, { useState } from "react";
import AdmissionNavbar from "@/components/AdmissionNavbar";
import AdmissionHero from "@/components/AdmissionHero";
import AdmissionWizard from "@/components/AdmissionWizard";
import AdmissionSuccessModal from "@/components/AdmissionSuccessModal";
import ApplicationTrackerModal from "@/components/ApplicationTrackerModal";
import AdmissionFooter from "@/components/AdmissionFooter";

export default function AdmissionHomePage() {
  const [successData, setSuccessData] = useState(null);
  const [trackerOpen, setTrackerOpen] = useState(false);

  const handleScrollToForm = () => {
    const el = document.getElementById("admission-wizard-card");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#faf8ff]">
      {/* Top Navigation */}
      <AdmissionNavbar
        onOpenTracker={() => setTrackerOpen(true)}
        onScrollToForm={handleScrollToForm}
      />

      {/* Hero Section */}
      <AdmissionHero onScrollToForm={handleScrollToForm} />

      {/* Main Form Section */}
      <section className="py-6 sm:py-10 flex-1">
        <AdmissionWizard onSuccess={(data) => setSuccessData(data)} />
      </section>

      {/* Footer */}
      <AdmissionFooter />

      {/* Success Modal */}
      {successData && (
        <AdmissionSuccessModal
          data={successData}
          onClose={() => setSuccessData(null)}
        />
      )}

      {/* Application Tracking Modal */}
      <ApplicationTrackerModal
        isOpen={trackerOpen}
        onClose={() => setTrackerOpen(false)}
      />
    </main>
  );
}
