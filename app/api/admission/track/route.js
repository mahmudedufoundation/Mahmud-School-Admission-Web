import { NextResponse } from "next/server";
import { getAdminSupabase } from "@/lib/supabase";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q")?.trim();

    if (!query) {
      return NextResponse.json({ error: "Search query required." }, { status: 400 });
    }

    const supabase = getAdminSupabase();

    // Search by application_number OR father/mother/guardian phone
    const { data: records, error } = await supabase
      .from("admission_applications")
      .select(`
        id,
        application_number,
        first_name,
        last_name,
        gender,
        date_of_birth,
        father_name,
        father_phone,
        status,
        created_at,
        classes:applying_for_class_id(name)
      `)
      .or(`application_number.ilike.%${query}%,father_phone.ilike.%${query}%,mother_phone.ilike.%${query}%,guardian_phone.ilike.%${query}%`)
      .order("created_at", { ascending: false })
      .limit(5);

    if (error) {
      console.error("[API: Admission Track] Query error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      results: records || [],
    });
  } catch (err) {
    console.error("[API: Admission Track] Exception:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
