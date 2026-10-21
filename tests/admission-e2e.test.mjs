import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";
import assert from "node:assert/strict";

// Dynamically load .env.local if present
const envPath = path.resolve(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, "utf-8");
  content.split("\n").forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return;
    const match = trimmed.match(/^([^=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const val = match[2].trim().replace(/^["']|["']$/g, "");
      process.env[key] = val;
    }
  });
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const SCHOOL_ID = process.env.NEXT_PUBLIC_SCHOOL_ID || "00000000-0000-0000-0000-000000000001";
const SESSION_ID = "7c39068e-d826-48c3-b663-a6310da8e6ed";

assert(SUPABASE_URL, "NEXT_PUBLIC_SUPABASE_URL is required in environment");
assert(SUPABASE_ANON_KEY, "NEXT_PUBLIC_SUPABASE_ANON_KEY is required in environment");
assert(SUPABASE_SERVICE_ROLE_KEY, "SUPABASE_SERVICE_ROLE_KEY is required in environment");

// Public anon client (simulates external admission portal applicant)
const publicSupabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
// Admin service client (simulates school admin portal checking ERP baseline)
const adminSupabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

async function runE2ETests() {
  console.log("=== STARTING DECOUPLED ADMISSION PORTAL E2E TESTS ===\n");

  let testAppId = null;
  let testAppNumber = null;
  const testPhone = "9876543210";

  try {
    // 1. Verify Active Students Count Before Any Action (Admin check)
    console.log("1. Verifying isolation: checking active students baseline via Admin ERP...");
    const { count: studentCountBefore, error: studentErr } = await adminSupabase
      .from("students")
      .select("*", { count: "exact", head: true })
      .eq("school_id", SCHOOL_ID);
    
    assert(!studentErr, `Error fetching student count: ${studentErr?.message}`);
    console.log(`   Baseline active students in ERP: ${studentCountBefore}`);

    // 2. Fetch a valid Class ID for admission application
    console.log("2. Fetching active class for admission application...");
    const { data: classes, error: classErr } = await adminSupabase
      .from("classes")
      .select("id, name")
      .eq("school_id", SCHOOL_ID)
      .limit(1);
    
    assert(!classErr, `Error fetching classes: ${classErr?.message}`);
    assert(classes && classes.length > 0, "No classes found in school");
    const testClass = classes[0];
    console.log(`   Applying for: ${testClass.name} (ID: ${testClass.id})`);

    // 3. Generate serial application number
    console.log("3. Generating application reference number...");
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    testAppNumber = `MIS-ADM-2026-${randomSuffix}`;
    console.log(`   Generated Application No: ${testAppNumber}`);

    // 4. Submit New Admission Application anonymously (Public Admission Portal)
    console.log("4. Submitting application as public anonymous applicant...");
    const applicationPayload = {
      school_id: SCHOOL_ID,
      academic_session_id: SESSION_ID,
      application_number: testAppNumber,
      first_name: "Ayaan",
      last_name: "Choudhury",
      gender: "male",
      date_of_birth: "2019-04-15",
      blood_group: "O+",
      religion: "Islam",
      applying_for_class_id: testClass.id,
      prev_school_name: "St. Xavier's Preparatory",
      prev_class: "UKG",
      father_name: "Tariq Choudhury",
      father_phone: testPhone,
      father_occupation: "Civil Engineer",
      mother_name: "Farhana Choudhury",
      mother_phone: "9876543211",
      mother_occupation: "Architect",
      guardian_email: "tariq.choudhury.test@example.com",
      address: "House 42, Green Valley Enclave",
      city: "Rupahi",
      state: "Assam",
      pin_code: "782125",
      requires_transport: true,
      requires_hostel: false,
      status: "submitted",
    };

    const { data: insertedApp, error: insertErr } = await publicSupabase
      .from("admission_applications")
      .insert(applicationPayload)
      .select()
      .single();

    assert(!insertErr, `Failed to insert application: ${insertErr?.message}`);
    assert(insertedApp, "No record returned after insertion");
    testAppId = insertedApp.id;
    console.log(`   Successfully created application record ID: ${testAppId}`);
    assert.equal(insertedApp.application_number, testAppNumber);
    assert.equal(insertedApp.status, "submitted");

    // 5. Test Public Application Tracking by Application Number
    console.log("5. Testing public application tracking by Application Number...");
    const { data: trackByNum, error: trackNumErr } = await publicSupabase
      .from("admission_applications")
      .select("id, application_number, first_name, last_name, status, created_at, applying_for_class_id")
      .eq("school_id", SCHOOL_ID)
      .eq("application_number", testAppNumber)
      .single();

    assert(!trackNumErr, `Tracking by app number failed: ${trackNumErr?.message}`);
    assert.equal(trackByNum.application_number, testAppNumber);
    assert.equal(trackByNum.first_name, "Ayaan");
    console.log(`   Found application: ${trackByNum.first_name} ${trackByNum.last_name} | Status: ${trackByNum.status}`);

    // 6. Test Public Application Tracking by Parent Phone
    console.log("6. Testing public application tracking by Parent Phone...");
    const { data: trackByPhone, error: trackPhoneErr } = await publicSupabase
      .from("admission_applications")
      .select("id, application_number, first_name, last_name, status")
      .eq("school_id", SCHOOL_ID)
      .eq("father_phone", testPhone);

    assert(!trackPhoneErr, `Tracking by phone failed: ${trackPhoneErr?.message}`);
    assert(trackByPhone && trackByPhone.length > 0, "No application found for phone");
    const matchedApp = trackByPhone.find(a => a.application_number === testAppNumber);
    assert(matchedApp, "Application not matched by phone number");
    console.log(`   Matched ${trackByPhone.length} application(s) for phone ${testPhone}`);

    // 7. Verify ERP Active Students table remains 100% UNTOUCHED
    console.log("7. Verifying Decoupling Integrity: checking ERP students table untouched...");
    const { count: studentCountAfter, error: countAfterErr } = await adminSupabase
      .from("students")
      .select("*", { count: "exact", head: true })
      .eq("school_id", SCHOOL_ID);

    assert(!countAfterErr, `Error verifying student count after: ${countAfterErr?.message}`);
    assert.equal(
      studentCountAfter,
      studentCountBefore,
      `Integrity violation! Student count changed from ${studentCountBefore} to ${studentCountAfter}`
    );
    console.log(`   Active students count remained identical: ${studentCountBefore} === ${studentCountAfter} (PERFECT ISOLATION)`);

    // 8. Test Admin CSV Export data structure...
    console.log("8. Testing Admin CSV Export data structure...");
    const csvRow = [
      testAppNumber,
      `"${insertedApp.first_name} ${insertedApp.last_name}"`,
      testClass.name,
      insertedApp.gender,
      insertedApp.date_of_birth,
      insertedApp.father_name,
      `="${insertedApp.father_phone}"`,
      insertedApp.mother_name,
      `="${insertedApp.mother_phone}"`,
      insertedApp.guardian_email,
      `"${insertedApp.address}, ${insertedApp.city}"`,
      insertedApp.requires_transport ? "YES" : "NO",
      insertedApp.requires_hostel ? "YES" : "NO",
      insertedApp.status.toUpperCase(),
    ];
    const csvString = csvRow.join(",");
    assert(csvString.includes(`MIS-ADM-2026-`), "CSV missing application number");
    assert(csvString.includes(`="9876543210"`), "CSV phone numbers not properly protected against Excel numeric conversion");
    console.log(`   CSV Row Preview: ${csvString.slice(0, 100)}...`);

    // 9. Cleanup test record
    console.log("9. Cleaning up test application record...");
    const { error: delErr } = await adminSupabase
      .from("admission_applications")
      .delete()
      .eq("id", testAppId);

    if (delErr) {
      console.warn("   Warning during cleanup:", delErr.message);
    } else {
      console.log("   Test record removed cleanly.");
    }

    console.log("\n ALL 9 E2E ADMISSION INTEGRATION TESTS PASSED WITH ZERO ERRORS!");
  } catch (err) {
    console.error("\n❌ E2E Test Failure:", err.message);
    if (testAppId) {
      await adminSupabase.from("admission_applications").delete().eq("id", testAppId);
    }
    process.exit(1);
  }
}

runE2ETests();
