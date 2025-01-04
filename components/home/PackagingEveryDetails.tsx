import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const data = [
  {
    title: "PACKAGING",
    description:
      "Choose between our online exclusive tote or boutique shopping bag to give your order the perfect finish",
    ctaText: "Explore Hazel Packaging",
    ctaLink: "#",
    image:
      "/assets/home/close-up-present-box-empty-tag-green-leaf-isolated-white-background.jpg",
  },
  {
    title: "PERSONALIZATION",
    description:
      "Choose between our online exclusive tote or boutique shopping bag to give your order the perfect finish",
    ctaText: "Discover The Collection",
    ctaLink: "#",
    image: "/assets/home/woman-live-streaming-online-shopping-campaign.jpg",
  },
  {
    title: "COMPLIMENTARY SHIPPING & RETURNS",
    description:
      "Choose between our online exclusive tote or boutique shopping bag to give your order the perfect finish",
    ctaText: "View Shipping Options",
    ctaLink: "#",
    image: "/assets/home/side-view-woman-writing-box-with-laptop-plant.jpg",
  },
];

const PackagingEveryDetails = () => {
  return (
    <div className="bg-sectionbg ">
      <div className="container py-10 md:py-20">
        <div className="flex flex-col md:flex-row justify-between items-center md:space-x-8">
          <div className="w-[100%] md:w-[35%]">
            <div className="font-aviano-regular">
              <h2 className="text-2xl  md:text-4xl font-semibold uppercase text-center md:text-left">
                Packaging <br />
                Every details
                <br className="hidden md:block" /> Matters
              </h2>
              <h2 className="text-base md:text-xl font-semibold mt-3 text-center md:text-left ">
                {` Choose between our online exclusive tote or boutique shopping bag to give your order the perfect finishL`}
              </h2>
            </div>
          </div>
          <div className="w-full md:w-[65%]  pt-8 md:pt-0">
            <div className="flex flex-col md:flex-row items-stretch  justify-between space-y-8 md:space-y-0 md:space-x-6">
              {data?.map((el, index) => (
                <div className="">
                  <Image
                    className="w-full h-auto transition-all duration-700 ease-in-out"
                    width={1000}
                    height={1000}
                    src={el?.image}
                    alt={`Gallery Image}`}
                    priority
                    quality={100}
                  />

                  <h2 className="text-xl font-semibold uppercase font-aviano-regular mt-3">
                    {el.title}
                  </h2>

                  <p className="text-lg font-light mt-1 font-outfit-sans">
                    {el?.description}
                  </p>

                  <Link
                    href={el?.ctaLink}
                    className="text-lg font-semibold mt-1 font-outfit-sans flex items-center space-x-2"
                  >
                    <p className="hover:underline"> {el?.ctaText}</p>
                    <BsArrowRight className="size-6" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagingEveryDetails;
