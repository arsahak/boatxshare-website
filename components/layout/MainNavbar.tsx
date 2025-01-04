"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";

import React, { useCallback, useEffect, useMemo, useState } from "react";

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

  return (
    <section className={`relative z-50`}>
      <div
        className={`w-full py-3 md:py-3 fixed top-0 transition-colors duration-300 ${
          navbarColor ? "!bg-white  duration-1000" : "bg-transparent"
        } z-50`}
      >
        {/* Navbar top */}

        <div className="w-full flex items-center justify-between px-14">
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
                src={"/assets/site-logo/hazel-logo-black.png"}
                alt="Hazel Logo"
                width={500}
                height={500}
                className="cursor-pointer w-[100px] md:w-[180px] h-auto mt-2 mb-2"
              />
            </Link>
          </div>

          <div className="w-full ">
            <div
              className={`flex items-center justify-end gap-x-4 md:gap-x-8 ${
                navbarColor ? "text-black" : "text-white"
              }`}
            >
              <div className="flex items-center space-x-1 ">
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

              <div className="hidden lg:block">
                <Link
                  href={`/`}
                  className={`cursor-pointer text-lg lg:text-[17px]  transition-all duration-300 py-2.5 border rounded px-8  hover:bg-primary hover:border-primary ${
                    navbarColor
                      ? "text-black border-black"
                      : "text-white border-white "
                  }`}
                >
                  Sign In
                </Link>
              </div>
              <div className="hidden lg:block ">
                <Link
                  href={`/`}
                  className={`cursor-pointer text-lg lg:text-[17px]  transition-all duration-300  bg-primary text-white py-3 px-5 rounded`}
                >
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle Active */}
      <div
        className={`fixed top-0 right-0 h-full w-full z-40 transition-transform duration-1000 ease-in-out ${
          isMenuOpen
            ? "translate-x-0 bg-black opacity-90"
            : "translate-x-full bg-black"
        }`}
      >
        <div className="text-white p-8 container my-20">
          <Link href="#our-story" className="block text-lg mb-4">
            Our Story
          </Link>
          <Link href="#gallery" className="block text-lg mb-4">
            Gallery
          </Link>
          <Link href="#contact" className="block text-lg">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default React.memo(MainNavbar);
