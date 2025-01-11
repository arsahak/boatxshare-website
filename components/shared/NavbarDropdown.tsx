import React from "react";

// Define the props type
interface NavbarDropdownProps {
  setBoatExploreFlag: (flag: boolean) => void; // Function to update the flag
  boatExploreFlag: boolean; // Current flag value
}

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({
  setBoatExploreFlag,
  boatExploreFlag,
}) => {
  return (
    <div className="">
      {boatExploreFlag && (
        <div
          id="dropdown"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-64 dark:bg-gray-700 absolute right-0 mt-2 border"
        >
          <ul
            className="py-3 text-base text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => setBoatExploreFlag(false)}
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => setBoatExploreFlag(false)}
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => setBoatExploreFlag(false)}
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => setBoatExploreFlag(false)}
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarDropdown;
