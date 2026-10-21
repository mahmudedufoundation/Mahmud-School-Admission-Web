import "./globals.css";
import LenisProvider from "@/lib/lenis-provider";
import { Toaster } from "sonner";

export const viewport = {
  themeColor: "#4338ca",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "Online Admission 2026-2027 | Mahmud International School, Rupahi",
  description:
    "Apply online for student admission 2026-2027 for Nursery to Class XII (Science, Commerce, Arts) at Mahmud International School, Rupahi, Nagaon, Assam. Instant digital slip, 24/7 application tracking, smart campus, hostel & school bus facilities.",
  keywords: [
    "Mahmud International School",
    "MIS Rupahi",
    "Online Admission 2026-2027",
    "School Admission Nagaon Assam",
    "English Medium School Rupahi",
    "Best School in Nagaon Assam",
    "Class 11 Science Admission Rupahi",
    "School Admission Form Assam",
    "Hostel Facility School Assam",
    "Mahmud School Admission Portal",
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
    title: "Online Admission 2026-2027 | Mahmud International School",
    description:
      "Apply online for Nursery to Class XII. Modern digital smart classrooms, science labs, safe bus transport & residential boarding in Rupahi, Nagaon.",
    url: "https://admission.misrupahi.com",
    siteName: "Mahmud International School Admissions",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Admission 2026-2027 | Mahmud International School",
    description:
      "Apply online for Nursery to Class XII. Modern digital smart classrooms, safe transport & hostel in Rupahi, Assam.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://admission.misrupahi.com/#school",
      name: "Mahmud International School",
      alternateName: ["MIS Rupahi", "Mahmud School"],
      url: "https://admission.misrupahi.com",
      logo: "https://admission.misrupahi.com/images/logo.png",
      description:
        "Premier English medium educational institution in Rupahi, Nagaon, Assam offering Nursery through Senior Secondary Class XII education.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rupahi Town, Near Block Development Office",
        addressLocality: "Nagaon",
        addressRegion: "Assam",
        postalCode: "782125",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "26.4384",
        longitude: "92.6841",
      },
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
          name: "Online Admission 2026-2027",
          item: "https://admission.misrupahi.com",
        },
      ],
    },
    {
      "@type": "ApplyAction",
      name: "Apply for Online School Admission 2026-2027",
      target: "https://admission.misrupahi.com",
      actionStatus: "https://schema.org/ActiveActionStatus",
      agent: {
        "@type": "EducationalOrganization",
        name: "Mahmud International School",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How can I apply for admission to Mahmud International School for session 2026-2027?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Parents and guardians can complete the official 5-step online admission form directly on admission.misrupahi.com. Enter student demographics, parent details, address, and facility requirements (transport/hostel) to receive an instant digital admission acknowledgment slip.",
          },
        },
        {
          "@type": "Question",
          name: "Which classes are open for new admission at MIS Rupahi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Admissions for Academic Session 2026-2027 are open from Pre-Primary (Nursery, LKG, UKG), Primary & Middle School (Classes I to VIII), Secondary (Classes IX & X), up to Senior Secondary Class XI & XII (Science, Commerce, and Arts streams).",
          },
        },
        {
          "@type": "Question",
          name: "Are school bus transport and hostel facilities available for students?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Mahmud International School provides GPS-tracked safe bus transportation covering Rupahi, Juria, Batadrava, Nagaon Town, and surrounding rural routes. Dedicated on-campus residential hostel accommodation is also available with 24/7 security and faculty supervision.",
          },
        },
        {
          "@type": "Question",
          name: "How do I check the live status of my submitted admission application?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can track your application live 24/7 by clicking the 'Track Application' button at the top of the portal. Enter either your 16-digit Application Reference Number (e.g., MIS-ADM-2026-XXXX) or the registered parent phone number.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="google46adb45f47e61000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LenisProvider>
          {children}
          <Toaster richColors position="top-center" />
        </LenisProvider>
      </body>
    </html>
  );
}
