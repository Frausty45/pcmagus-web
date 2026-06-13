import { redirect } from "next/navigation";
import { localizedPath, defaultLanguage } from "./lib/i18n";

export default function RootPage() {
  redirect(localizedPath(defaultLanguage));
}
