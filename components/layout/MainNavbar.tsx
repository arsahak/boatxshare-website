"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown } from "react-icons/io";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import NavbarCurrenciesDropdown from "../shared/NavbarCurrenciesDropdown";
import { default as NavbarDropdown } from "../shared/NavbarDropdown";
import NavbarLanguageDropdown from "../shared/NavbarLanguageDropdown";

const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
) => {
  let timeout: NodeJS.Timeout | undefined;

  return (...args: Parameters<T>): void => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func(...args), wait);
  };
};

const MainNavbar = () => {
  const [isTroggleMenuOpen, setIsTroggleMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [navbarColor, setNavbarColor] = useState(false);
  const [boatExploreFlag, setBoatExploreFlag] = useState(false);
  const [lanFlag, setLanFlag] = useState(false);
  const [lanValue, setLanValue] = useState("En");

  const [currenciesFlag, setCurrenciesFlag] = useState(false);
  const [currenciesValue, setCurrenciesValue] = useState("USD");

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const menuItems = useMemo(
    () => [
      { title: "HOME", slug: "/" },
      { title: "ABOUT", slug: "/about" },
      { title: "GALLERY", slug: "/gallery" },
      { title: "CONTACT US", slug: "/contact" },
    ],
    []
  );

  const handleScroll = useCallback(
    debounce(() => {
      setNavbarColor(window.scrollY >= 100);
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isMenuOpen) {
      // Delay the scroll lock by 1 second
      timeoutId = setTimeout(() => {
        document.body.style.overflow = "hidden";
      }, 1000);
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up the effect and clear timeout
    return () => {
      clearTimeout(timeoutId);
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const { i18n, t } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang); // Change the active language
  };

  return (
    <section className={`relative z-50`}>
      <div
        className={`w-full py-3 md:py-5 fixed top-0 transition-colors duration-300 ${
          navbarColor ? "!bg-white  duration-1000" : "bg-transparent"
        } z-50`}
      >
        {/* Navbar top */}

        <div className="w-full flex items-center justify-between px-6 md:px-14 ">
          <div className="">
            <Link href={"/"}>
              {/* <h2
                className={` font-medium text-4xl ${
                  navbarColor ? "text-black" : "text-white"
                }`}
              >
                BoatXShare
              </h2> */}
              <Image
                src={
                  navbarColor
                    ? "/assets/site-logo/Boatxshare-blue.png"
                    : "/assets/site-logo/Boatxshare-white.png"
                }
                alt="Boatxshare Logo"
                width={500}
                height={500}
                quality={90}
                className="cursor-pointer w-[150px] md:w-[250px] h-auto mt-2 mb-2"
              />
            </Link>
          </div>

          <div className="md:hidden block">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(!isMenuOpen);
              }}
              className={`${navbarColor ? "text-black" : "text-white"}`}
            >
              {isMenuOpen ? (
                <RxCross2 className="size-8 " />
              ) : (
                <IoReorderThreeOutline className="size-8 " />
              )}
            </button>
          </div>

          {/* {navbarColor && (
            <div className="flex items-center justify-end border rounded-full border-gray-400 w-[40%]">
              <input
                id="location-input"
                type="text"
                placeholder="Where to?"
                className="w-full rounded-l-full py-3  focus:outline-none outline-none first-line:active:outline-none placeholder:text-gray-700 pl-3"
              />
              <input
                id="location-input"
                type="text"
                placeholder="When?  "
                className="w-full py-3  focus:outline-none outline-none first-line:active:outline-none placeholder:text-gray-700 border-l-1 border-r-1 border-gray-400 pl-2"
              />
              <input
                id="location-input"
                type="text"
                placeholder="Who’s in?"
                className="w-full rounded-r-full py-3 focus:outline-none outline-none first-line:active:outline-none text-gray-800 placeholder:text-gray-700 pl-2"
              />
            </div>
          )} */}

          <div className="w-full  hidden md:block">
            <div
              className={`flex items-center justify-end gap-x-4 md:gap-x-8 ${
                navbarColor ? "text-black" : "text-white"
              }`}
            >
              <div className="relative inline-block text-left">
                <button
                  className="flex items-center space-x-2 cursor-pointer focus:outline-none"
                  onClick={() => setBoatExploreFlag(!boatExploreFlag)}
                >
                  <Image
                    src={"/assets/home/navbar-icon/explore-icon.png"}
                    alt="Explore icon"
                    width={35}
                    height={35}
                    quality={90}
                    className="cursor-pointer"
                  />
                  <h3 className="text-base font-normal">Explore</h3>
                  <IoIosArrowDown
                    className={`transition-transform size-5 font-bold ${
                      boatExploreFlag ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <NavbarDropdown
                  boatExploreFlag={boatExploreFlag}
                  setBoatExploreFlag={setBoatExploreFlag}
                />
              </div>
              <Link
                href={"/sign-up"}
                className="flex items-center space-x-1 cursor-pointer"
              >
                <Image
                  src={"/assets/home/navbar-icon/list-your-boat.png"}
                  alt="usd icon"
                  width={100}
                  height={100}
                  quality={90}
                  className="cursor-pointer w-[35px] h-[35px] "
                />
                <h3 className="text-base font-normal pl-1">List Your Boat</h3>{" "}
                {/* <IoIosArrowDown className="size-5 font-bold" /> */}
              </Link>

              <div className="">
                <button
                  className="flex items-center space-x-1 cursor-pointer"
                  onClick={() => setLanFlag(!lanFlag)}
                >
                  <Image
                    src={"/assets/home/navbar-icon/world.png"}
                    alt="usd icon"
                    width={100}
                    height={100}
                    quality={90}
                    className="cursor-pointer w-[18px] h-[18px] "
                  />
                  <h3 className="text-base font-normal uppercase">
                    {lanValue}
                  </h3>
                  <IoIosArrowDown
                    className={`transition-transform size-5 font-bold ${
                      lanFlag ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <NavbarLanguageDropdown
                  setLanValue={setLanValue}
                  setLanFlag={setLanFlag}
                  lanFlag={lanFlag}
                />
              </div>

              <div className="">
                <button
                  className="flex items-center space-x-1 cursor-pointer"
                  onClick={() => setCurrenciesFlag(!currenciesFlag)}
                >
                  <Image
                    src={"/assets/home/navbar-icon/usd.png"}
                    alt="usd icon"
                    width={100}
                    height={100}
                    quality={90}
                    className="cursor-pointer w-[18px] h-[18px] "
                  />
                  <h3 className="text-base font-normal">{currenciesValue}</h3>
                  <IoIosArrowDown
                    className={`transition-transform size-5 font-bold ${
                      currenciesFlag ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <NavbarCurrenciesDropdown
                  setCurrenciesValue={setCurrenciesValue}
                  setCurrenciesFlag={setCurrenciesFlag}
                  currenciesFlag={currenciesFlag}
                />
              </div>

              <div className="hidden lg:block cursor-pointer">
                <Link
                  href={`/sign-in`}
                  className={`cursor-pointer hover:bg-primary hover:border-primary hover:text-white px-7 py-2.5 rounded-lg  transition text-lg border border-primary${
                    navbarColor
                      ? "text-black border-black"
                      : "text-white border-white "
                  }`}
                >
                  Sign In
                </Link>
              </div>
              <div className="hidden lg:block cursor-pointer">
                <Link
                  href="/sign-up"
                  className={`cursor-pointer bg-primary text-white px-4 py-3 rounded-lg hover:bg-hoverColor transition text-base`}
                >
                  Create Account
                </Link>
              </div>
              <NavbarLanguageDropdown />
            </div>
          </div>
        </div>
      </div>

      {/* Toggle Active */}
      <div
        className={`fixed top-0 right-0 h-full w-full z-40 transition-transform duration-1000 ease-in-out ${
          isMenuOpen
            ? "translate-x-0 bg-gray-500 opacity-95"
            : "translate-x-full bg-gray-500 opacity-95"
        }`}
      >
        <div className="text-white p-8 container my-20">
          <div className="flex items-center space-x-4 justify-center">
            <div className="">
              <Link
                href={`/sign-in`}
                className={`cursor-pointer hover:bg-primary hover:border-primary hover:text-white px-10 py-2.5 rounded-lg  transition text-lg border border-primary${
                  navbarColor
                    ? "text-black border-black"
                    : "text-white border-white "
                }`}
              >
                Sign In
              </Link>
            </div>
            <div className=" ">
              <Link
                href={`/sign-up`}
                className={`cursor-pointer bg-primary text-white px-4 py-3 rounded-lg hover:bg-hoverColor transition text-base`}
              >
                Create Account
              </Link>
            </div>
          </div>
          <div
            className={`flex items-center flex-col gap-y-6 md:gap-x-8 text-white `}
          >
            <div className="flex items-center space-x-1 mt-10">
              <Image
                src={"/assets/home/navbar-icon/explore-icon.png"}
                alt="usd icon"
                width={100}
                height={100}
                quality={90}
                className="cursor-pointer w-[35px] h-[35px] "
              />
              <h3 className="text-base font-medium">Explore</h3>{" "}
              <IoIosArrowDown className="size-5 font-bold" />
            </div>
            <div className="flex items-center space-x-1 ">
              <Image
                src={"/assets/home/navbar-icon/list-your-boat.png"}
                alt="usd icon"
                width={100}
                height={100}
                quality={90}
                className="cursor-pointer w-[35px] h-[35px] "
              />
              <h3 className="text-base font-medium pl-1">List Your Boat</h3>{" "}
              <IoIosArrowDown className="size-5 font-bold" />
            </div>

            <div className="flex items-center space-x-1">
              <Image
                src={"/assets/home/navbar-icon/world.png"}
                alt="usd icon"
                width={100}
                height={100}
                quality={90}
                className="cursor-pointer w-[18px] h-[18px] "
              />
              <h3 className="text-base font-medium">EN</h3>{" "}
              <IoIosArrowDown className="size-5 font-bold" />
            </div>

            <div className="flex items-center space-x-1 ">
              <Image
                src={"/assets/home/navbar-icon/usd.png"}
                alt="usd icon"
                width={100}
                height={100}
                quality={90}
                className="cursor-pointer w-[18px] h-[18px] "
              />
              <h3 className="text-base font-medium">USD</h3>{" "}
              <IoIosArrowDown className="size-5 font-bold" />
            </div>
          </div>
        </div>
      </div>
      {/* <LoginPage loginFlag={loginFlag} setLoginFlag={setLoginFlag} /> */}
    </section>
  );
};

export default React.memo(MainNavbar);
