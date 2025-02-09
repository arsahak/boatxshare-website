"use client";

import { userLogOut } from "@/app/action/userAuth";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { IoBoatOutline } from "react-icons/io5";
import { RiSettings3Line, RiUser6Line } from "react-icons/ri";
import { toast } from "react-toastify";

const UserDropDownButton = ({ userData }: any) => {
  const notify = () =>
    toast.success("Wow so easy!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  useEffect(() => {
    if (
      pathname === "/account" ||
      pathname === "/inbox" ||
      pathname === "/settings" ||
      pathname === "/favorites" ||
      pathname === "/list-your-boat"
    ) {
      setIsOpen(false);
    }
  }, [pathname]);

  console.log("check user data", userData?.isBoatLister);

  return (
    <div>
      <div className="relative inline-block text-left z-20" ref={dropdownRef}>
        <div>
          <button
            type="button"
            className={`inline-flex w-[40px] h-[40px] items-center justify-center rounded-full   text-gray-900 ring-1 ring-inset ring-[#383E54] hover:bg-[#383E54] border-2 border-primary  shadow ${
              isOpen ? "bg-[#383E54]" : "bg-[#383E54]"
            }`}
            id="menu-button"
            aria-expanded={isOpen}
            aria-haspopup="true"
            onClick={toggleDropdown}
          >
            <div className="rounded-full flex items-center justify-center w-[40px] h-[40px] overflow-hidden">
              <Image
                src={userData?.image}
                alt="User Image"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
          </button>
        </div>

        {isOpen && (
          <div
            className="absolute right-0 z-10 mt-2 w-72 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div className="py-4" role="none">
              <Link
                href={"/inbox"}
                className="w-full px-5 py-3 text-left text-lg text-gray-700 hover:bg-primary hover:text-white flex items-center space-x-2"
              >
                <HiOutlineInboxArrowDown className="size-4" />
                <p>Inbox</p>
              </Link>
              <Link
                href={"/favorites"}
                className="w-full px-5 py-3 text-left text-lg text-gray-700 hover:bg-primary hover:text-white flex items-center space-x-2"
              >
                <GrFavorite className="size-4" />
                <p>Favorites</p>
              </Link>
              <Link
                href={"/account"}
                className="w-full px-5 py-3 text-left text-lg text-gray-700 hover:bg-primary hover:text-white flex items-center space-x-2"
              >
                <RiUser6Line className="size-4" />
                <p>Account</p>
              </Link>

              <Link
                href={userData?.isBoatLister ? "/dashboard" : "/list-your-boat"}
                className="w-full px-5 py-3 text-left text-lg text-gray-700 hover:bg-primary hover:text-white flex items-center space-x-2"
              >
                <IoBoatOutline className="size-4" />
                <p>List Your Boat</p>
              </Link>

              <Link
                href={"/settings"}
                className="w-full px-5 py-3 text-left text-lg text-gray-700 hover:bg-primary hover:text-white flex items-center space-x-2"
              >
                <RiSettings3Line className="size-4" />
                <p>Settings</p>
              </Link>
              <form action={userLogOut}>
                <button
                  type="submit"
                  className="w-full px-5 py-3 text-left text-lg text-gray-700 hover:bg-primary hover:text-white flex items-center space-x-2"
                >
                  <FiLogOut className="size-4" />
                  <p> Logout</p>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDropDownButton;
