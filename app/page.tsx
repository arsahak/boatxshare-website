import { AmazingExperiencesAwait } from "@/components/home/AmazingExperiencesAwait";
import ExclusiveBoatDeals from "@/components/home/ExclusiveBoatDeals";
import ExploreOurCollection from "@/components/home/ExploreOurCollection";
import HeroSectionslider from "@/components/home/HeroSectionslider";
import SearchForm from "@/components/home/SearchForm";
import TopBoatingDestinations from "@/components/home/TopBoatingDestinations";
import VideoPlaySection from "@/components/home/VideoPlaySection";

export const metadata = {
  title: "Boatxshare: Boat Rentals & Yacht Charters",
  description:
    "Search boat rentals, jet skis, yachts, pontoons, and fishing charters. Compare updated prices and availability, photos, reviews and more!",
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
      <SearchForm />
      <ExploreOurCollection />
      <ExclusiveBoatDeals />
      <TopBoatingDestinations />
      <AmazingExperiencesAwait />
      <VideoPlaySection />
    </div>
  );
}
