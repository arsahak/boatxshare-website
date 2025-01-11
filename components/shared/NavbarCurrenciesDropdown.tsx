"use client";

import React from "react";
import { useTranslation } from "react-i18next";

interface NavbarDropdownProps {
  setCurrenciesFlag: (flag: boolean) => void; // Function to update the flag
  setCurrenciesValue: (value: string) => void; // Function to update the selected language value
  currenciesFlag: boolean; // Current flag value
}

const NavbarCurrenciesDropdown: React.FC<NavbarDropdownProps> = ({
  setCurrenciesValue,
  setCurrenciesFlag,
  currenciesFlag,
}) => {
  const { i18n, t } = useTranslation();

  const changeCurrenciesValue = (lang: string) => {
    setCurrenciesValue(lang);
    setCurrenciesFlag(false);
  };

  const navData = [
    {
      country: "Canada",
      currency: "Canadian Dollar",
      code: "CAD",
      symbol: "CA $",
    },
    { country: "European Union", currency: "Euro", code: "EUR", symbol: "€" },
    {
      country: "United States",
      currency: "US Dollar",
      code: "USD",
      symbol: "US $",
    },
    {
      country: "United Arab Emirates",
      currency: "Dirham",
      code: "AED",
      symbol: "د.إ",
    },
    { country: "Argentina", currency: "Peso", code: "ARS", symbol: "AR $" },
    {
      country: "Australia",
      currency: "Australian Dollar",
      code: "AUD",
      symbol: "AU $",
    },
    { country: "Brazil", currency: "Real", code: "BRL", symbol: "BR $" },
    {
      country: "Switzerland",
      currency: "Swiss Franc",
      code: "CHF",
      symbol: "CHF Fr",
    },
    { country: "China", currency: "Yuan", code: "CNY", symbol: "¥" },
    { country: "Costa Rica", currency: "Colón", code: "CRC", symbol: "₡" },
    { country: "Denmark", currency: "Krone", code: "DKK", symbol: "Kr" },
    {
      country: "United Kingdom",
      currency: "Pound Sterling",
      code: "GBP",
      symbol: "£",
    },
    { country: "Hong Kong", currency: "Dollar", code: "HKD", symbol: "HK $" },
    { country: "Indonesia", currency: "Rupiah", code: "IDR", symbol: "Rp" },
    { country: "Israel", currency: "Shekel", code: "ILS", symbol: "₪" },
    { country: "India", currency: "Indian Rupee", code: "INR", symbol: "₹" },
  ];

  return (
    <div className="relative">
      {currenciesFlag && (
        <div
          id="dropdown"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700 absolute right-0 mt-2 border overflow-y-auto h-[400px]"
        >
          <ul
            className="py-3 text-base text-gray-700"
            aria-labelledby="dropdownDefaultButton"
          >
            {navData.map((el, index) => (
              <li key={index} className="hover:bg-gray-100">
                <button
                  onClick={() => changeCurrenciesValue(el.code)} // Update language and close dropdown
                  className="block w-full text-left px-4 py-3"
                >
                  {el.code} {el?.symbol}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarCurrenciesDropdown;
