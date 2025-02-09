import Link from "next/link";
import BoatListTableData from "./BoatListTableData";

const ListingBoat = () => {
  return (
    <div>
      <div className="flex items-center justify-between ">
        <h2 className="text-2xl font-bold text-primary">Your Boat List</h2>
        <Link
          href="/add-new-boat"
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-hoverColor"
        >
          Add New Boat
        </Link>
      </div>
      <div className="">
        <BoatListTableData />
      </div>
    </div>
  );
};

export default ListingBoat;
