import { WorkbenchPageContent } from "@/components/public/workbench/workbench-page-content";
import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prajwal-koundinya-portfolio.vercel.app/';

export const metadata: Metadata = {
  title: "Achievements",
  description: "Active experiments, prototypes, and work in progress. A peek into the digital workshop where ideas take shape.",
  keywords: ["achievements", "experiments", "prototypes", "work in progress", "playground", "dev tools"],
  openGraph: {
    title: "Achievements — PKCODE",
    description: "Active experiments, prototypes, and work in progress.",
    url: `${baseUrl}/workbench`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image-workbench.png`,
        width: 1200,
        height: 630,
        alt: "PKCODE Achievements",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Achievements — PKCODE",
    description: "Active experiments, prototypes, and work in progress.",
    images: [`${baseUrl}/og-image-workbench.png`],
  },
  alternates: {
    canonical: `${baseUrl}/workbench`,
  },
};

export default function WorkbenchPage() {
  return (
    <div className="pt-24">
      <WorkbenchPageContent />
    </div>
  );
}
