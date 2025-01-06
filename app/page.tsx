
import { AmazingExperiencesAwait } from "@/components/home/AmazingExperiencesAwait";
import ExclusiveBoatDeals from "@/components/home/ExclusiveBoatDeals";
import ExploreOurCollection from "@/components/home/ExploreOurCollection";
import HeroSectionslider from "@/components/home/HeroSectionslider";
import SearchForm from "@/components/home/SearchForm";
import TopBoatingDestinations from "@/components/home/TopBoatingDestinations";

export const metadata = {
  title: "Hazel Fashion Store",
  description: "B2B and B2C eCommerce platform",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-USA",
    },
  },
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSectionslider />
      <SearchForm/>
      <ExploreOurCollection />
      <ExclusiveBoatDeals />
      <TopBoatingDestinations />
      <AmazingExperiencesAwait />
    </div>
  );
}
