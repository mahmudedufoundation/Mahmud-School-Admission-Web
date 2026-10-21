# Mahmud International School - Online Admission Web Portal

Dedicated, high-performance online student admission and enrollment portal for **Mahmud International School (MIS)**, designed for deployment on a standalone subdomain (e.g., `https://admission.misrupahi.com`).

---

## 🏛️ Architectural Principle: Strict Decoupling

This portal is **strictly decoupled** from the active school ERP and production students table:
1. **Zero Contamination**: Prospective applicants and inquiry leads are collected in an isolated Supabase table (`admission_applications`).
2. **ERP Integrity**: Active student registers, fee rolls, and gradebooks in `Mahmud-School-Management-Admin` are never altered or inflated by open public applications.
3. **Owner & Super Admin Console**: School leadership manages prospective leads at `/admissions-data` inside the Admin panel, with real-time status management and **1-Click UTF-8 CSV / Excel Export** for phone calling and offline admissions committee review.

---

## ✨ Features

- **Fluid 5-Step Application Wizard**:
  1. Student Demographics & Academic Preferences
  2. Father & Mother Credentials & Occupations
  3. Residential Address & Local Verification
  4. Transport & Boarding / Hostel Facilities
  5. Final Review, Document Check & Submission
- **Smooth Interaction & Motion**:
  - Lenis smooth momentum scrolling
  - GSAP entrance choreography and value badges
  - Directional Framer Motion page steps with sound layout transitions
- **Digital Slip & Receipt**:
  - Auto-generated serial reference format: `MIS-ADM-2026-XXXX`
  - 1-Click Print & PDF Receipt Slip
  - Direct WhatsApp sharing link
- **Live Application Tracking**:
  - Parents can check status 24/7 by Application Number or registered Phone Number
- **Independent Subdomain SEO**:
  - JSON-LD Structured Data (`EducationalOrganization`, `ApplyAction`)
  - `sitemap.xml` & `robots.txt` optimized for admission indexing
- **Enterprise Security**:
  - Strict Row Level Security (RLS) policies on Supabase
  - Server-side payload validation and field sanitization

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router, React 19)
- **Styling**: Tailwind CSS
- **Animations**: GSAP, Framer Motion, Lenis Smooth Scroll
- **Icons**: Lucide React
- **Confetti**: Canvas Confetti
- **Notifications**: Sonner
- **Database**: Supabase PostgreSQL (`admission_applications`)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Copy `.env.example` to `.env.local` and configure your Supabase credentials:
```bash
cp .env.example .env.local
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
npm start
```
