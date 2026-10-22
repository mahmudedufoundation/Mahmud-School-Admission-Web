import "./globals.css";
import { Inter } from "next/font/google";
import LenisProvider from "@/lib/lenis-provider";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "Online Admission 2027–2028 | Mahmud International School, Rupahi (Nagaon, Assam)",
  description:
    "Official online admission portal for Mahmud International School, Rupahi, Nagaon, Assam (Session 2027–2028). Nursery to Class XII (Science, Commerce, Arts). Top English medium school with GPS bus fleet, smart campus & safe hostel. Apply in 3 mins.",
  keywords: [
    "best school in rupahi",
    "school admission in rupahi",
    "english medium school in rupahi",
    "mahmud international school rupahi",
    "mis rupahi admission",
    "rupahihat school admission 2027 2028",
    "admission form rupahi school",
    "top schools in nagaon assam",
    "nursery admission rupahi",
    "class 11 science admission rupahi",
    "boarding school in rupahi nagaon",
    "school bus transport rupahi juria",
    "hostel school in rupahi assam",
    "cbse english medium school rupahi",
  ],
  metadataBase: new URL("https://admission.misrupahi.com"),
  alternates: {
    canonical: "https://admission.misrupahi.com",
  },
  manifest: "/manifest.json",
  verification: {
    google: "google46adb45f47e61000",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Online Admission 2027–2028 | Mahmud International School, Rupahi",
    description:
      "Official Online Admission Portal for Nursery to Class XII. Modern smart digital classrooms, GPS bus fleet, science laboratories & residential boarding in Rupahi, Nagaon, Assam.",
    url: "https://admission.misrupahi.com",
    siteName: "Mahmud International School Admissions",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Admission 2027–2028 | Mahmud International School, Rupahi",
    description:
      "Apply online for Nursery to Class XII at Mahmud International School, Rupahi, Assam. Modern smart classrooms, safe GPS transport & hostel boarding.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["School", "EducationalOrganization", "LocalBusiness"],
      "@id": "https://admission.misrupahi.com/#school",
      name: "Mahmud International School",
      alternateName: ["MIS Rupahi", "Mahmud School Rupahi", "Mahmud International School Rupahihat"],
      url: "https://admission.misrupahi.com",
      logo: "https://admission.misrupahi.com/images/logo.png",
      description:
        "Leading English medium institution in Rupahi, Nagaon, Assam offering quality schooling from Nursery through Senior Secondary Class XII (Science, Commerce, Arts) with GPS-tracked bus transportation and residential hostel boarding.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rupahi Town, Near Block Development Office (BDO), Rupahi-Juria Road",
        addressLocality: "Rupahihat / Nagaon",
        addressRegion: "Assam",
        postalCode: "782125",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "26.4384",
        longitude: "92.6841",
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Rupahi" },
        { "@type": "AdministrativeArea", name: "Rupahihat" },
        { "@type": "AdministrativeArea", name: "Juria" },
        { "@type": "AdministrativeArea", name: "Batadrava" },
        { "@type": "AdministrativeArea", name: "Dhing" },
        { "@type": "AdministrativeArea", name: "Alitangani" },
        { "@type": "AdministrativeArea", name: "Samaguri" },
        { "@type": "City", name: "Nagaon" },
      ],
      telephone: "+91-98540-12345",
      email: "admissions@misrupahi.com",
      priceRange: "₹₹",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:30",
          closes: "15:30",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Academic Programs & Admissions 2027–2028",
        itemListElement: [
          {
            "@type": "Course",
            name: "Pre-Primary Foundational Stage (Nursery, LKG, UKG)",
            description: "Activity-based learning, phonics, numeracy, and motor skill development in Rupahi, Assam.",
            provider: "Mahmud International School",
          },
          {
            "@type": "Course",
            name: "Primary & Middle School (Classes I to VIII)",
            description: "English medium CBSE curriculum, mathematics, experiential science, computer coding, and holistic education.",
            provider: "Mahmud International School",
          },
          {
            "@type": "Course",
            name: "Secondary High School (Classes IX & X)",
            description: "Board exam preparation, advanced science & math labs, linguistic proficiency, and leadership development.",
            provider: "Mahmud International School",
          },
          {
            "@type": "Course",
            name: "Senior Secondary Class XI & XII (Science, Commerce, Arts)",
            description: "Specialized streams with integrated entrance coaching (NEET, JEE, CUET) in Rupahi, Nagaon.",
            provider: "Mahmud International School",
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://admission.misrupahi.com/#website",
      url: "https://admission.misrupahi.com",
      name: "Mahmud International School Admission Portal",
      publisher: {
        "@id": "https://admission.misrupahi.com/#school",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://admission.misrupahi.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Online Admission 2027-2028",
          item: "https://admission.misrupahi.com",
        },
      ],
    },
    {
      "@type": "ApplyAction",
      name: "Apply for Online School Admission 2027-2028",
      target: "https://admission.misrupahi.com",
      actionStatus: "https://schema.org/ActiveActionStatus",
      agent: {
        "@type": "EducationalOrganization",
        name: "Mahmud International School",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://admission.misrupahi.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which is the best English medium school in Rupahi, Nagaon, Assam?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mahmud International School (MIS Rupahi) is widely acknowledged as the premier English medium school in Rupahi, Nagaon, Assam. It offers smart digital classrooms, experienced faculty, modern science laboratories, GPS bus fleet across Rupahi and Juria, and residential hostel boarding for boys and girls.",
          },
        },
        {
          "@type": "Question",
          name: "How can parents apply for online admission at Mahmud International School Rupahi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Parents can complete the quick 5-step online admission form on admission.misrupahi.com in under 3 minutes. Enter student demographics, parent details, select bus or hostel preferences, and receive an instant digital admission acknowledgment slip with reference number.",
          },
        },
        {
          "@type": "Question",
          name: "What is the minimum age criterion for Nursery and Class 1 in Rupahi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "As per National Education Policy (NEP) guidelines: Nursery requires minimum 3+ years, LKG 4+ years, UKG 5+ years, and Class 1 requires minimum 6 years as of March 31, 2027.",
          },
        },
        {
          "@type": "Question",
          name: "Which areas in and around Rupahi are covered by MIS school bus transport?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our GPS-tracked bus fleet covers comprehensive routes across Rupahi town, Rupahihat, Juria, Batadrava, Dhing gate, Alitangani, Samaguri, Nagaon town, and nearby neighborhoods with verified drivers and female attendants.",
          },
        },
        {
          "@type": "Question",
          name: "Is residential hostel accommodation available for students in Rupahi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Mahmud International School provides clean, secure residential boarding facilities with nutritious dining, 24/7 CCTV surveillance, resident wardens, and supervised evening study hours for outstation students.",
          },
        },
        {
          "@type": "Question",
          name: "How do I check the live status of my submitted admission application?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Parents can track their application 24/7 by clicking 'Track Status' in the top navigation bar. Enter either your 16-character Application Number (MIS-ADM-2027-XXXX) or the registered parent mobile number.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="google-site-verification" content="google46adb45f47e61000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#f8fafc] text-slate-900">
        <LenisProvider>
          {children}
          <Toaster richColors position="top-center" />
        </LenisProvider>
      </body>
    </html>
  );
}
