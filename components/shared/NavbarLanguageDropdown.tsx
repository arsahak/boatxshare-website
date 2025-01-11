"use client";

import React from "react";
import { useTranslation } from "react-i18next";

interface NavbarDropdownProps {
  setLanFlag: (flag: boolean) => void; // Function to update the flag
  setLanValue: (value: string) => void; // Function to update the selected language value
  lanFlag: boolean; // Current flag value
}

const NavbarLanguageDropdown: React.FC<NavbarDropdownProps> = ({
  setLanValue,
  setLanFlag,
  lanFlag,
}) => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang); // Change the active language
    setLanValue(lang); // Update the selected language value
    setLanFlag(false); // Close the dropdown
  };

  const navData = [
    { title: "English", value: "en" },
    { title: "Español", value: "es" },
    { title: "Français", value: "fr" },
    { title: "日本語", value: "ja" },
    { title: "Português", value: "pt" },
  ];

  return (
    <div className="relative">
      {lanFlag && (
        <div
          id="dropdown"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700 absolute right-0 mt-2 border"
        >
          <ul
            className="py-3 text-base text-gray-700"
            aria-labelledby="dropdownDefaultButton"
          >
            {navData.map((el, index) => (
              <li key={index} className="hover:bg-gray-100">
                <button
                  onClick={() => changeLanguage(el.value)} // Update language and close dropdown
                  className="block w-full text-left px-4 py-3"
                >
                  {el.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarLanguageDropdown;
