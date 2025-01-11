import React from "react";

// Define the props type
interface NavbarDropdownProps {
  setBoatExploreFlag: (flag: boolean) => void; // Function to update the flag

  boatExploreFlag: boolean; // Current flag value
}

const navData = [
  {
    title: "Boat Rentals Near Me",
    slug: "boat-rentals-near-me",
  },
  {
    title: "Jet Ski Rentals Near Me",
    slug: "jet-ski-rentals-near-me",
  },
  {
    title: "Fishing Charters Near Me",
    slug: "fishing-charters-near-me",
  },
  {
    title: "Yacht Rentals Near Me",
    slug: "yacht-rentals-near-me",
  },
  {
    title: "Top Boat Rental Cities",
    slug: "top-boat-rental-cities",
  },
  {
    title: "Lake Boat Rentals",
    slug: "lake-boat-rentals",
  },
  {
    title: "International Boat Rental Cities",
    slug: "international-boat-rental-cities",
  },
];

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({
  setBoatExploreFlag,
  boatExploreFlag,
}) => {
  return (
    <div className="">
      {boatExploreFlag && (
        <div
          id="dropdown"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-72 dark:bg-gray-700 absolute right-0 mt-2 border"
        >
          <ul
            className="py-3 text-base text-gray-700 "
            aria-labelledby="dropdownDefaultButton"
          >
            {navData?.map((el, index) => (
              <li key={index} className="hover:bg-gray-100">
                <button
                  href="#"
                  className="block px-4 py-3  "
                  onClick={() => setBoatExploreFlag(false)}
                >
                  {el?.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarDropdown;
