"use client";

import Image from "next/image";
import { BiStar } from "react-icons/bi";
import { GoStarFill } from "react-icons/go";

interface Review {
  id: number;
  author: string;
  image: string;
  date: string;
  rating: number;
  text: string;
  avatarColor: string;
}

const reviews: Review[] = [
  {
    id: 1,
    author: "bryan",
    image: "/assets/home/top/sssman.jpg",
    date: "Dec 2024",
    rating: 5,
    text: "Beautiful boat in great condition, smooth ride, perfect for our dinner cruise. Captain Lazaro was flexible and accommodating to ensure we had a good time. Hope to ...",
    avatarColor: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    author: "Endigo",
    image: "/assets/home/top/sssman.jpg",
    date: "Dec 2024",
    rating: 5,
    text: "Lazaro was the best captain! We chose 3 hrs which was the perfect amount of time. We sailed out an hour parked for an hour and headed back to the dock the last hour. Grea ...",
    avatarColor: "bg-purple-100 text-purple-600",
  },
  {
    id: 3,
    author: "John",
    image: "",
    date: "Dec 2024",
    rating: 5,
    text: "The Rinker was a very nice boat! Captain Lazaro Perez was fantastic! We got to see great views of Miami and beautiful Dolphins! Will definitely use them again!!!",
    avatarColor: "bg-pink-100 text-pink-600",
  },
  {
    id: 4,
    author: "Milan",
    image: "/assets/home/top/sssman.jpg",
    date: "Dec 2024",
    rating: 5,
    text: "I rented this Yacht for my wife's surprise 40th birthday, Yimiley helped me with decoration and other arrangement too. My wife and her friends were super ...",
    avatarColor: "bg-amber-100 text-amber-600",
  },
  {
    id: 5,
    author: "Kyria",
    image: "/assets/home/top/sssman.jpg",
    date: "Dec 2024",
    rating: 5,
    text: "Really great boat, awesome Captain! Can't wait to book again",
    avatarColor: "bg-green-100 text-green-600",
  },
  {
    id: 6,
    author: "Joel",
    image: "",
    date: "Dec 2024",
    rating: 5,
    text: "Our Captain, Alain was awesome. It was our first time using boatsetter and we will use it again. Alain made sure we had an awesome experience. The boat was incredible. Very ...",
    avatarColor: "bg-slate-100 text-slate-600",
  },
];

export default function Review() {
  return (
    <div className="">
      <div className="flex items-start justify-between gap-5">
        <div className="w-[25%] ">
          <div className="mb-1">
            <h2 className="text-2xl font-semibold">Ratings & reviews</h2>
            <div className="flex items-center text-base text-gray-600 space-x-2">
              <GoStarFill className=" size-5 fill-current" />
              <span className="ml-1 font-medium text-black">4.9</span>
              <span className="ml-1">(129 ratings)</span>
            </div>
          </div>
          <button className="md:absolute mt-8 bottom-0 border border-primary rounded-lg py-2 px-4 text-sm text-center text-primary hover:bg-gray-50">
            SEE ALL 129 REVIEWS
          </button>
        </div>
        <div className="w-[75%] ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
            {reviews.map(
              ({ id, image, avatarColor, author, date, rating, text }) => (
                <div key={id} className="space-y-3">
                  {/* Author Image/Avatar */}
                  <div className="flex items-center gap-4">
                    {image ? (
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <Image
                          src={image}
                          alt={`${author}'s avatar`}
                          height={200}
                          width={200}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-16 h-16 rounded-full ${avatarColor} flex items-center justify-center font-medium`}
                      >
                        {author?.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-medium">{author}</h3>
                      <p className="text-sm text-gray-600">{date}</p>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <BiStar
                        key={i}
                        className={`size-4 ${
                          i < rating ? "text-gray-800" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-base text-gray-800 line-clamp-2">{text}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <hr className="my-10" />
    </div>
  );
}
