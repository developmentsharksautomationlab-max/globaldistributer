import { Header } from "@/components/replica/Header";
import { SiteFooter } from "@/components/replica/SiteFooter";

export default function MainSiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-col bg-stone-50 text-stone-900">
      <Header />
      <main className="w-full flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
