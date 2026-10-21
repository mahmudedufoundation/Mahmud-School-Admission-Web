import "./globals.css";
import LenisProvider from "@/lib/lenis-provider";
import { Toaster } from "sonner";

export const metadata = {
  title: "Online Admission 2026-2027 | Mahmud International School, Rupahi",
  description:
    "Apply online for admission to Nursery through Class XII (Science, Commerce, Arts) at Mahmud International School, Rupahi, Nagaon, Assam. Transparent CBSE education and online application tracking.",
  keywords: [
    "Mahmud International School",
    "MIS Rupahi",
    "Online Admission 2026-2027",
    "School Admission Nagaon",
    "CBSE School Rupahi Assam",
    "School Admission Form Assam",
  ],
  metadataBase: new URL("https://admission.misrupahi.com"),
  alternates: {
    canonical: "https://admission.misrupahi.com",
  },
  openGraph: {
    title: "Online Admission 2026-2027 | Mahmud International School",
    description:
      "Apply online for Nursery to Class 12 (Science, Commerce & Arts). World-class education in Rupahi, Assam.",
    url: "https://admission.misrupahi.com",
    siteName: "Mahmud International School Admissions",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Admission 2026-2027 | Mahmud International School",
    description:
      "Apply online for Nursery to Class 12 (Science, Commerce & Arts). World-class education in Rupahi, Assam.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://admission.misrupahi.com/#school",
      name: "Mahmud International School",
      url: "https://admission.misrupahi.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rupahi Town, Near Block Office",
        addressLocality: "Nagaon",
        addressRegion: "Assam",
        postalCode: "782125",
        addressCountry: "IN",
      },
      telephone: "+91-98540-12345",
      email: "admissions@misrupahi.com",
    },
    {
      "@type": "ApplyAction",
      name: "Apply for Online School Admission 2026-2027",
      target: "https://admission.misrupahi.com",
      actionStatus: "https://schema.org/ActiveActionStatus",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
