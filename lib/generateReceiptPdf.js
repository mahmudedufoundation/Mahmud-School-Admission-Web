"use client";

import { jsPDF } from "jspdf";

/**
 * Loads an image from URL and returns a base64 Data URL, or null on failure.
 */
async function getBase64ImageFromUrl(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const blob = await res.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
}

/**
 * Universal Official Admission Slip PDF Generator
 * Generates an official, high-resolution A4 document for Mahmud International School.
 *
 * @param {Object} data - Application details
 * @returns {Promise<{ pdf: jsPDF, blob: Blob, file: File, filename: string, dataUri: string, download: Function }>}
 */
export async function generateReceiptPdf(data) {
  if (!data) throw new Error("Application data is required to generate receipt.");

  const appNo = data.applicationNumber || "MIS-ADM-2027-0000";
  const cleanAppNo = appNo.replace(/[^a-zA-Z0-9_-]/g, "");
  const filename = `${cleanAppNo}_Receipt.pdf`;

  const formattedDate = data.createdAt
    ? new Date(data.createdAt).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });

  const formattedTime = data.createdAt
    ? new Date(data.createdAt).toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    : new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

  // Initialize jsPDF A4 Portrait (210 x 297 mm)
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
    compress: true,
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 12;

  // 1. Double Outer Border
  doc.setDrawColor(203, 213, 225); // slate-300
  doc.setLineWidth(0.4);
  doc.rect(margin, margin, pageWidth - margin * 2, pageHeight - margin * 2);

  doc.setDrawColor(15, 23, 42); // slate-900 thin inner line
  doc.setLineWidth(0.2);
  doc.rect(margin + 1.5, margin + 1.5, pageWidth - (margin + 1.5) * 2, pageHeight - (margin + 1.5) * 2);

  // 2. Header Section
  // Try loading official logo
  const logoBase64 = await getBase64ImageFromUrl("/images/logo.png");
  if (logoBase64) {
    try {
      doc.addImage(logoBase64, "PNG", margin + 6, margin + 5, 18, 18);
    } catch (e) {
      console.warn("Could not render logo image to PDF:", e);
    }
  }

  // School Header Typography
  doc.setFont("helvetica", "bold");
  doc.setFontSize(17);
  doc.setTextColor(15, 23, 42); // slate-900
  doc.text("MAHMUD INTERNATIONAL SCHOOL", 110, margin + 9, { align: "center" });

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(67, 56, 202); // indigo-700
  doc.text("EXCELLENCE IN EDUCATION • ENGLISH MEDIUM CURRICULUM", 110, margin + 14, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139); // slate-500
  doc.text("Rupahi Town, Near Block Development Office, Nagaon, Assam - 782125", 110, margin + 18.5, { align: "center" });
  doc.text("Helpline: +91 98540 12345 • admissions@misrupahi.com • https://admission.misrupahi.com", 110, margin + 22.5, { align: "center" });

  // Divider Line
  doc.setDrawColor(15, 23, 42);
  doc.setLineWidth(0.6);
  doc.line(margin + 4, margin + 27, pageWidth - margin - 4, margin + 27);

  // 3. Document Title Badge
  doc.setFillColor(248, 250, 252); // slate-50
  doc.setDrawColor(226, 232, 240); // slate-200
  doc.setLineWidth(0.3);
  doc.roundedRect(margin + 4, margin + 30, pageWidth - margin * 2 - 8, 11, 2, 2, "FD");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text("STUDENT ADMISSION REGISTRATION ACKNOWLEDGMENT SLIP", 105, margin + 36, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(71, 85, 105);
  doc.text("ACADEMIC SESSION 2027–2028 • PROVISIONAL ONLINE REGISTRATION", 105, margin + 39.5, { align: "center" });

  // 4. Highlighted Reference Box
  const refBoxY = margin + 44;
  doc.setFillColor(241, 245, 249); // slate-100
  doc.setDrawColor(15, 23, 42);
  doc.setLineWidth(0.5);
  doc.roundedRect(margin + 4, refBoxY, pageWidth - margin * 2 - 8, 22, 2, 2, "FD");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text("APPLICATION REFERENCE NUMBER", 105, refBoxY + 5.5, { align: "center" });

  doc.setFont("courier", "bold");
  doc.setFontSize(16);
  doc.setTextColor(15, 23, 42);
  doc.text(appNo, 105, refBoxY + 12.5, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(16, 185, 129); // emerald-600
  doc.text("● STATUS: APPLICATION RECEIVED (UNDER VERIFICATION)", 105, refBoxY + 18, { align: "center" });

  // 5. Candidate Details Section
  const detailsY = margin + 70;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text("1. APPLICANT & GUARDIAN DETAILS", margin + 6, detailsY);

  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.3);
  doc.line(margin + 6, detailsY + 2, pageWidth - margin - 6, detailsY + 2);

  // Key-Value Grid Table
  const rows = [
    { label: "Student Full Name", value: data.studentName || "N/A" },
    { label: "Class / Grade Applied For", value: `${data.className || "Class"} (Session 2027-2028)` },
    { label: "Parent / Guardian Name", value: data.fatherName || "Parent / Guardian" },
    { label: "Registered Mobile Number", value: data.contactPhone || "N/A" },
    { label: "Residential Location", value: `${data.city || "Rupahi, Nagaon"}, Assam` },
    { label: "Registration Date & Time", value: `${formattedDate} at ${formattedTime}` },
  ];

  let currentY = detailsY + 7;
  rows.forEach((row, idx) => {
    // Alternating row background
    if (idx % 2 === 0) {
      doc.setFillColor(248, 250, 252);
      doc.rect(margin + 6, currentY - 3.5, pageWidth - margin * 2 - 12, 7, "F");
    }

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);
    doc.text(row.label, margin + 9, currentY + 1);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(row.value, margin + 70, currentY + 1);

    currentY += 7;
  });

  // 6. Next Steps & Instructions Box
  const nextY = currentY + 4;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text("2. REQUIRED DOCUMENTS FOR DESK VERIFICATION", margin + 6, nextY);

  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.3);
  doc.line(margin + 6, nextY + 2, pageWidth - margin - 6, nextY + 2);

  const docList = [
    "Original Birth Certificate (issued by Municipal Corporation / Registrar / Panchayat)",
    "Recent passport-size color photographs (4 copies of student, 1 copy each of parents)",
    "Original Transfer Certificate (TC) countersigned by authority (for Class 2 and above)",
    "Previous Academic Year Marksheet / Report Card from recognized school",
    "Government Photo ID Card of Parent / Guardian (Aadhaar / Voter ID / Passport)",
  ];

  let docY = nextY + 7;
  docList.forEach((item, i) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(67, 56, 202);
    doc.text(`[ ${i + 1} ]`, margin + 8, docY);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(51, 65, 85);
    doc.text(item, margin + 18, docY);

    docY += 5.5;
  });

  // 7. Important Notice Box
  const noticeY = docY + 4;
  doc.setFillColor(254, 243, 199); // amber-100
  doc.setDrawColor(245, 158, 11); // amber-500
  doc.setLineWidth(0.3);
  doc.roundedRect(margin + 6, noticeY, pageWidth - margin * 2 - 12, 16, 1.5, 1.5, "FD");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(146, 64, 14); // amber-800
  doc.text("IMPORTANT NOTICE FOR PARENTS & GUARDIANS:", margin + 9, noticeY + 4.5);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(120, 53, 15);
  doc.text(
    "1. This slip serves as official proof of online registration submission.",
    margin + 9,
    noticeY + 8.5
  );
  doc.text(
    "2. The Admissions Desk will contact you within 2-3 business days with an interaction date.",
    margin + 9,
    noticeY + 12
  );

  // 8. Signature Blocks
  const sigY = pageHeight - margin - 34;

  // Left Signature
  doc.setDrawColor(148, 163, 184);
  doc.setLineWidth(0.3);
  doc.line(margin + 12, sigY + 12, margin + 65, sigY + 12);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text("Signature of Parent / Guardian", margin + 18, sigY + 16);

  // Right Signature
  doc.line(pageWidth - margin - 65, sigY + 12, pageWidth - margin - 12, sigY + 12);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(15, 23, 42);
  doc.text("Authorized Admissions Officer", pageWidth - margin - 60, sigY + 16);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text("Mahmud International School", pageWidth - margin - 58, sigY + 19.5);

  // 9. Bottom Security Footer
  const footerY = pageHeight - margin - 6;
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.3);
  doc.line(margin + 4, footerY - 2, pageWidth - margin - 4, footerY - 2);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(148, 163, 184);
  doc.text("Generated via MIS Online Admissions Portal • admission.misrupahi.com", margin + 6, footerY + 1.5);
  doc.text("256-Bit SSL Encrypted Verification Record", pageWidth - margin - 6, footerY + 1.5, { align: "right" });

  // Generate outputs
  const blob = doc.output("blob");
  const file =
    typeof File !== "undefined"
      ? new File([blob], filename, { type: "application/pdf" })
      : null;
  const dataUri = doc.output("datauristring");

  const download = () => {
    if (typeof window === "undefined") return;
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 1000);
  };

  return {
    pdf: doc,
    blob,
    file,
    filename,
    dataUri,
    download,
  };
}
