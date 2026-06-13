import type { Metadata } from "next";
import BuildsPageContent from "./BuildsPageContent";

export const metadata: Metadata = {
  title: "Korábbi építések",
  description:
    "PCMagus korábbi PC építések és konfigurációk rövid bemutatója.",
};

export default function BuildsPage() {
  return <BuildsPageContent />;
}
