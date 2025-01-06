"use client"

import { BiStar } from "react-icons/bi"


interface Review {
    id: number
    author: string
    initial: string
    date: string
    rating: number
    text: string
    avatarColor: string
}

const reviews: Review[] = [
    {
        id: 1,
        author: 'bryan',
        initial: 'B',
        date: 'Dec 2024',
        rating: 5,
        text: 'Beautiful boat in great condition, smooth ride, perfect for our dinner cruise. Captain Lazaro was flexible and accommodating to ensure we had a good time. Hope to ...',
        avatarColor: 'bg-blue-100 text-blue-600'
    },
    {
        id: 2,
        author: 'Endigo',
        initial: 'E',
        date: 'Dec 2024',
        rating: 5,
        text: 'Lazaro was the best captain! We chose 3 hrs which was the perfect amount of time. We sailed out an hour parked for an hour and headed back to the dock the last hour. Grea ...',
        avatarColor: 'bg-purple-100 text-purple-600'
    },
    {
        id: 3,
        author: 'John',
        initial: 'J',
        date: 'Dec 2024',
        rating: 5,
        text: 'The Rinker was a very nice boat! Captain Lazaro Perez was fantastic! We got to see great views of Miami and beautiful Dolphins! Will definitely use them again!!!',
        avatarColor: 'bg-pink-100 text-pink-600'
    },
    {
        id: 4,
        author: 'Milan',
        initial: 'M',
        date: 'Dec 2024',
        rating: 5,
        text: 'I rented this Yacht for my wife\'s surprise 40th birthday, Yimiley helped me with decoration and other arrangement too. My wife and her friends were super ...',
        avatarColor: 'bg-amber-100 text-amber-600'
    },
    {
        id: 5,
        author: 'Kyria',
        initial: 'K',
        date: 'Dec 2024',
        rating: 5,
        text: 'Really great boat, awesome Captain! Can\'t wait to book again',
        avatarColor: 'bg-green-100 text-green-600'
    },
    {
        id: 6,
        author: 'Joel',
        initial: 'J',
        date: 'Dec 2024',
        rating: 5,
        text: 'Our Captain, Alain was awesome. It was our first time using boatsetter and we will use it again. Alain made sure we had an awesome experience. The boat was incredible. Very ...',
        avatarColor: 'bg-slate-100 text-slate-600'
    }
]

export default function Review() {
    return (
        <div className=" p-6">
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div className="col-span-1 mb-8">
                    <div className="mb-1">
                        <h2 className="text-xl font-semibold">Ratings & reviews</h2>
                        <div className="flex items-center text-sm text-gray-600">
                            <BiStar className="w-4 h-4 fill-current" />
                            <span className="ml-1 font-medium">4.9</span>
                            <span className="ml-1">(129 ratings)</span>
                        </div>
                    </div>
                    <button className="absolute mt-8  border border-gray-300 rounded-lg py-2 px-4 text-sm text-center hover:bg-gray-50">
                        SEE ALL 129 REVIEWS
                    </button>
                </div>
                <div className="col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 space-y-6">
                        {reviews.map((review) => (
                            <div key={review.id} className="flex gap-4">
                                <div className={`w-8 h-8 rounded-full ${review.avatarColor} flex items-center justify-center font-medium`}>
                                    {review.initial}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                        <div>
                                            <h3 className="text-sm font-medium">{review.author}</h3>
                                            <p className="text-xs text-gray-500">{review.date}</p>
                                        </div>
                                    </div>
                                    <div className="flex mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <BiStar
                                                key={i}
                                                className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-200'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-sm text-gray-600 line-clamp-2">
                                        {review.text}
                                    </p>
                                    <button className="text-sm text-blue-600 mt-1 hover:underline">
                                        Read more
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <hr className="my-10"/>
        </div>
    )
}

