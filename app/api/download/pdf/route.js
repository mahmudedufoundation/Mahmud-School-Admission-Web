import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/**
 * POST /api/download/pdf
 * Universal Binary PDF Streamer
 *
 * Receives JSON or Form-Data containing { base64, filename } and streams
 * back a pure application/pdf response with Content-Disposition: attachment.
 *
 * This triggers:
 * 1. iOS Safari's native download prompt: "Do you want to download...?" -> saves directly to iPhone Files > Downloads.
 * 2. Android Chrome / DownloadManager -> saves directly to phone Downloads directory.
 * 3. Desktop browsers -> saves directly to Downloads folder.
 */
export async function POST(request) {
  try {
    let base64 = "";
    let filename = "MIS_Admission_Receipt.pdf";

    const contentType = request.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      const body = await request.json();
      base64 = body.base64 || "";
      filename = body.filename || filename;
    } else {
      // Support standard HTML form POST (application/x-www-form-urlencoded or multipart/form-data)
      const formData = await request.formData();
      base64 = formData.get("base64") || "";
      filename = formData.get("filename") || filename;
    }

    if (!base64) {
      return NextResponse.json({ error: "No PDF data provided" }, { status: 400 });
    }

    // Strip any Data URI header if present (e.g. data:application/pdf;base64,...)
    const cleanBase64 = base64.includes(",") ? base64.split(",")[1] : base64;
    const cleanFilename = (filename || "MIS_Admission_Receipt.pdf").replace(/[^a-zA-Z0-9_.-]/g, "_");
    const finalFilename = cleanFilename.endsWith(".pdf") ? cleanFilename : `${cleanFilename}.pdf`;

    const buffer = Buffer.from(cleanBase64, "base64");

    return new Response(buffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${finalFilename}"`,
        "Content-Length": buffer.length.toString(),
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0",
      },
    });
  } catch (err) {
    console.error("PDF Download Stream Error:", err);
    return NextResponse.json({ error: "Failed to generate download stream" }, { status: 500 });
  }
}
