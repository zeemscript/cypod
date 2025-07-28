import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Cypod Advisory | Cybersecurity Training, Microsoft Certification, SC-200, AZ-500, CISSP, Live Online Courses",
  description:
    "Cypod Advisory offers world-class cybersecurity training and Microsoft certification courses (SC-200, AZ-500, CISSP). Live, hands-on classes, expert instructors, and career-focused learning. Enroll now for early-bird discounts!",
  keywords: [
    "cybersecurity training",
    "Microsoft certification",
    "SC-200",
    "AZ-500",
    "CISSP",
    "live online courses",
    "security operations analyst",
    "SIEM",
    "XDR",
    "SOAR",
    "Cypod Advisory",
    "cybersecurity career",
    "expert instructors",
    "early-bird discount",
  ],
  alternates: {
    canonical: "https://cypodadvisory.com/",
  },
  openGraph: {
    title:
      "Cypod Advisory | Cybersecurity Training, Microsoft Certification, SC-200, AZ-500, CISSP, Live Online Courses",
    description:
      "Cypod Advisory offers world-class cybersecurity training and Microsoft certification courses (SC-200, AZ-500, CISSP). Live, hands-on classes, expert instructors, and career-focused learning. Enroll now for early-bird discounts!",
    url: "https://cypodadvisory.com/",
    type: "website",
    images: [
      {
        url: "https://cypodadvisory.com/cypod_logo.png",
        width: 1200,
        height: 630,
        alt: "Cypod Advisory Cybersecurity Training and Certification",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Cypod Advisory | Cybersecurity Training, Microsoft Certification, SC-200, AZ-500, CISSP, Live Online Courses",
    description:
      "Cypod Advisory offers world-class cybersecurity training and Microsoft certification courses (SC-200, AZ-500, CISSP). Live, hands-on classes, expert instructors, and career-focused learning. Enroll now for early-bird discounts!",
    images: ["https://cypodadvisory.com/cypod_logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Navbar />
        {/* Main content (with top padding for navbar) */}
        <div className="relative z-30 ">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
