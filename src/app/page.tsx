import StickyHeader from "@/components/layout/StickyHeader";
import HomeFooter from "@/components/layout/HomeFooter";
import Introduction from "@/components/home/Introduction";
import FeaturedProject from "@/components/home/FeaturedProject";
import BlueEconomyPlaceholder from "@/components/home/BlueEconomyPlaceholder";

export default function Home() {
  return (
    <div className="bg-editorial-bg text-editorial-text font-sans">
      <StickyHeader />
      <main>
        <div className="max-w-[860px] mx-auto">
          <div className="border-l border-r border-editorial-border/60">
            <Introduction />
            <FeaturedProject />
            <BlueEconomyPlaceholder />
          </div>
        </div>
      </main>
      <HomeFooter />
    </div>
  );
}
