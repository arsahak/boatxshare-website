import { auth } from "@/auth";
import BoatListingSection from "@/components/boatListing/BoatListingSection";

const page = async () => {
  const session = await auth();
  return (
    <div>
      <BoatListingSection session={session?.user?.accessToken} />
    </div>
  );
};

export default page;
