import { NextResponse } from "next/server";
import { getAdminSupabase } from "@/lib/supabase";
import { DEFAULT_SCHOOL_ID } from "@/lib/constants";

export async function POST(request) {
  try {
    const body = await request.json();
    const supabase = getAdminSupabase();

    const {
      first_name,
      last_name,
      date_of_birth,
      gender,
      blood_group,
      category,
      religion,
      applying_for_class_id,
      father_name,
      father_phone,
      father_email,
      father_occupation,
      mother_name,
      mother_phone,
      mother_email,
      mother_occupation,
      guardian_name,
      guardian_phone,
      primary_contact,
      address,
      city,
      district,
      state,
      pin_code,
      prev_school_name,
      prev_class,
      prev_score_percentage,
      requires_transport,
      transport_pickup_location,
      requires_hostel,
      documents = [],
    } = body;

    // Validate required fields
    if (!first_name || !last_name || !date_of_birth || !gender || !applying_for_class_id) {
      return NextResponse.json(
        { error: "Student first name, last name, date of birth, gender, and class are required." },
        { status: 400 }
      );
    }

    if (!father_phone && !mother_phone && !guardian_phone) {
      return NextResponse.json(
        { error: "At least one parent/guardian contact phone number is required." },
        { status: 400 }
      );
    }

    if (!address || !city || !pin_code) {
      return NextResponse.json(
        { error: "Complete address, city, and PIN code are required." },
        { status: 400 }
      );
    }

    // 1. Resolve Active Session
    let activeSessionId = null;
    const { data: sessionRows } = await supabase
      .from("academic_sessions")
      .select("id")
      .eq("is_active", true)
      .limit(1);

    if (sessionRows && sessionRows.length > 0) {
      activeSessionId = sessionRows[0].id;
    } else {
      const { data: anySession } = await supabase
        .from("academic_sessions")
        .select("id")
        .limit(1);
      activeSessionId = anySession?.[0]?.id || "7c39068e-d826-48c3-b663-a6310da8e6ed";
    }

    // 2. Generate Unique Application Serial (e.g. MIS-ADM-2027-1042)
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const appNumber = `MIS-ADM-2027-${randomSuffix}`;

    // 3. Insert into isolated admission_applications table
    const applicationPayload = {
      application_number: appNumber,
      school_id: DEFAULT_SCHOOL_ID,
      academic_session_id: activeSessionId,
      applying_for_class_id,
      first_name: first_name.trim(),
      last_name: last_name.trim(),
      date_of_birth,
      gender,
      blood_group: blood_group || null,
      nationality: "Indian",
      religion: religion || null,
      category: category || "General",
      father_name: father_name?.trim() || null,
      father_phone: father_phone?.trim() || null,
      father_email: father_email?.trim() || null,
      father_occupation: father_occupation?.trim() || null,
      mother_name: mother_name?.trim() || null,
      mother_phone: mother_phone?.trim() || null,
      mother_email: mother_email?.trim() || null,
      mother_occupation: mother_occupation?.trim() || null,
      guardian_name: guardian_name?.trim() || null,
      guardian_phone: guardian_phone?.trim() || null,
      primary_contact: primary_contact || "father",
      address: address.trim(),
      city: city.trim(),
      district: district?.trim() || null,
      state: state?.trim() || "Assam",
      pin_code: pin_code.trim(),
      prev_school_name: prev_school_name?.trim() || null,
      prev_class: prev_class?.trim() || null,
      prev_score_percentage: prev_score_percentage ? parseFloat(prev_score_percentage) : null,
      requires_transport: !!requires_transport,
      transport_pickup_location: transport_pickup_location?.trim() || null,
      requires_hostel: !!requires_hostel,
      documents: Array.isArray(documents) ? documents : [],
      status: "submitted",
    };

    const { data: inserted, error: insertError } = await supabase
      .from("admission_applications")
      .insert(applicationPayload)
      .select("id, application_number, created_at")
      .single();

    if (insertError) {
      console.error("[API: Admission Submit] Database insert error:", insertError);
      return NextResponse.json(
        { error: insertError.message || "Failed to record admission application." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      applicationNumber: inserted.application_number,
      applicationId: inserted.id,
      createdAt: inserted.created_at,
      message: "Application submitted successfully!",
    });
  } catch (err) {
    console.error("[API: Admission Submit] Internal exception:", err);
    return NextResponse.json(
      { error: err.message || "Internal server error occurred." },
      { status: 500 }
    );
  }
}
