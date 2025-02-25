import { getAllBoatListDataSearch } from "@/app/action/boatList";
import { auth } from "@/auth";
import BoatDetails from "@/components/pages/BoatDetails/BoatDetails";
import { slugify } from "@/components/shared/ui/slugify";

const page = async ({ params }: any) => {
  const { slug } = await params;

  const session = await auth();

  const boatList = await getAllBoatListDataSearch();

  const boatDetails = boatList.data?.boatLister?.find(
    (boat: any) => slugify(boat.title) === slug
  );

  return (
    <div>
      <BoatDetails
        boatDetails={boatDetails}
        session={session?.user?.accessToken}
      />
    </div>
  );
};

export default page;
