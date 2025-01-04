import Link from "next/link";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";

const footerData = [
  {
    title: "About",
    list: [
      { subTitle: "About Getmyboat", slug: "about-getmyboat" },
      { subTitle: "Careers", slug: "careers" },
      { subTitle: "Media Inquiries", slug: "media-inquiries" },
      { subTitle: "Terms of Use", slug: "terms-of-use" },
      { subTitle: "Privacy Policy", slug: "privacy-policy" },
      { subTitle: "Cookies Policy", slug: "cookies-policy" },
      { subTitle: "Accessibility Statement", slug: "accessibility-statement" },
      {
        subTitle: "Member Interface Agreement",
        slug: "member-interface-agreement",
      },
      {
        subTitle: "Contact Us",
        slug: "contact-us",
      },
    ],
  },
  {
    title: "Experiences",
    list: [
      { subTitle: "Boat Rentals", slug: "boat-rentals" },
      { subTitle: "Jet Ski Rental", slug: "Jet Ski Rental" },
      { subTitle: "Fishing Charters", slug: "fishing-charters" },
      { subTitle: "Houseboat Rental", slug: "houseboat-rental" },
      { subTitle: "Pontoon Rental", slug: "pontoon-rental" },
      { subTitle: "Yacht Rental", slug: "yacht-rental" },
      { subTitle: "Sailboat Rental", slug: "sailboat-rental" },
      {
        subTitle: "Bachelorette Party Boat Rental",
        slug: "bachelorette-party-boat-rental",
      },
    ],
  },
  {
    title: "Journal",
    list: [
      { subTitle: "Company News", slug: "company-news" },
      { subTitle: "Lifestyle", slug: "lifestyle" },
      { subTitle: "Experiences Guide", slug: "experiences-guide" },
      { subTitle: "Destinations", slug: "destinations" },
      {
        subTitle: "Tips for Renters and Owners",
        slug: "tips-for-renters-and-owners",
      },
    ],
  },
  {
    title: "Popular Destinations",
    list: [
      { subTitle: "Miami", slug: "miami" },
      { subTitle: "Lake Lanier", slug: "lake-lanier" },
      { subTitle: "Lake Tahoe", slug: "lake-tahoe" },
      { subTitle: "San Diego", slug: "san-diego" },
      { subTitle: "Lake Travis", slug: "lake-travis" },

      { subTitle: "Newport Beach", slug: "newport-beach" },
      { subTitle: "Chicago", slug: "chicago" },
      { subTitle: "Lake Norman", slug: "lake-norman" },
      { subTitle: "Key Largo", slug: "key-largo" },
      { subTitle: "Destin", slug: "destin" },
      { subTitle: "Marathon", slug: "marathon" },
    ],
  },
];

const MainFooter = () => {
  return (
    <div className="bg-primary text-white">
      <div className="container py-10 md:py-20">
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between md:items-start">
          {footerData?.map((section, index) => (
            <div key={index} className="mb-10 md:mb-0">
              <h3 className="text-2xl font-semibold mb-3 md:mb-5 uppercase font-aviano-regular text-center md:text-left">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.list.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start md:items-center md:justify-start justify-center"
                  >
                    <Link
                      href={"/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        "font-outfit-sans font-normal text-lg hover:underline pb-1"
                      }
                    >
                      {item.subTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between w-full space-x-10 mt-0 md:mt-6 mb-4">
          <hr className="h-px my-8 bg-gray-50 border-0 w-[20%] md:w-[40%]" />
          <div className="flex items-center justify-between space-x-2 w-[60%] md:w-[10%]">
            <FaXTwitter className="size-5 font-black cursor-pointer" />
            <GrInstagram className="size-5 font-black cursor-pointer" />
            <FaLinkedin className="size-5 font-black cursor-pointer" />
            <FaFacebookSquare className="size-5 font-black cursor-pointer" />
          </div>
          <hr className="h-px my-8 bg-gray-50 border-0 w-[20%] md:w-[40%]" />
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between ">
          <h2 className="text-base md:text-lg text-center md:text-left">
            © Boatxshare 2025 All rights reserved
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-5 md:mb-0">
            <Link href={"/privacy-policy"} className="hover:underline ">
              <h2 className="text-base md:text-lg">Privacy</h2>
            </Link>
            <Link href={"/cookie-policy"} className="hover:underline">
              <h2 className="text-base md:text-lg">Cookie Policy</h2>
            </Link>
            <Link href={"/terms-and-conditions"} className="hover:underline">
              <h2 className="text-base md:text-lg">Terms and Conditions</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
