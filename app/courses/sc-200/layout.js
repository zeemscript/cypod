export const metadata = {
  title:
    "SC-200 Microsoft Security Operations Analyst Training | Cypod Advisory",
  description:
    "Live, hands-on SC-200 Microsoft Security Operations Analyst training. Master SIEM, XDR, SOAR, and more. Early-bird discounts. Next cohort starts August 16. Saturdays 4pm-8pm. Enroll now!",
  keywords: [
    "SC-200",
    "Microsoft Security Operations Analyst",
    "cybersecurity training",
    "SIEM",
    "XDR",
    "SOAR",
    "Azure Security",
    "Cypod Advisory",
    "Security certification",
    "Microsoft certification",
  ],
  alternates: {
    canonical: "https://cypodadvisory.com/courses/sc-200",
  },
  openGraph: {
    title:
      "SC-200 Microsoft Security Operations Analyst Training | Cypod Advisory",
    description:
      "Live, hands-on SC-200 Microsoft Security Operations Analyst training. Master SIEM, XDR, SOAR, and more. Early-bird discounts. Next cohort starts August 16. Saturdays 4pm-8pm. Enroll now!",
    url: "https://cypodadvisory.com/courses/sc-200",
    type: "website",
    images: [
      {
        url: "https://cypodadvisory.com/sc-200.jpeg",
        width: 1200,
        height: 630,
        alt: "SC-200 Microsoft Security Operations Analyst Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SC-200 Microsoft Security Operations Analyst Training | Cypod Advisory",
    description:
      "Live, hands-on SC-200 Microsoft Security Operations Analyst training. Master SIEM, XDR, SOAR, and more. Early-bird discounts. Next cohort starts August 16. Saturdays 4pm-8pm. Enroll now!",
    images: ["https://cypodadvisory.com/sc-200.jpeg"],
  },
};

export default function Layout({ children }) {
  return <section>{children}</section>;
}
