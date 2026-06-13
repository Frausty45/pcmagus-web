import { redirect } from "next/navigation";
import { defaultLanguage, localizedPath } from "../lib/i18n";

export default function BuildsRedirectPage() {
  redirect(localizedPath(defaultLanguage, "/builds"));
}
