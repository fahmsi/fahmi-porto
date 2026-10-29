import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EditorialContainer from "@/components/layout/EditorialContainer";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-editorial-bg text-editorial-text">
      <Header />
      <main className="flex-1 flex items-center py-20">
        <EditorialContainer size="narrow">
          <div className="text-center space-y-6">
            <span className="font-mono text-xs text-editorial-accent uppercase tracking-widest font-bold">
              404 — Page Not Found
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-editorial-text">
              This page does not exist.
            </h1>
            <p className="text-base text-editorial-secondary max-w-md mx-auto">
              The page you are looking for may have been moved, removed, or never existed. Return to the homepage to explore the portfolio.
            </p>
            <div className="pt-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-editorial-text text-editorial-bg font-medium text-sm rounded hover:bg-editorial-accent transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Homepage</span>
              </Link>
            </div>
          </div>
        </EditorialContainer>
      </main>
      <Footer />
    </div>
  );
}
