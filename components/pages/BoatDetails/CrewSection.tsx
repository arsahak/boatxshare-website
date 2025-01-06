import Image from 'next/image'
import { BiStar } from 'react-icons/bi'
import { GoDotFill } from 'react-icons/go'
// import { Star } from 'lucide-react'

export default function CrewSection() {
  return (
    <div className="">

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <h2 className="text-xl font-semibold mb-4">Your crew</h2>
        <div className="flex items-center gap-4">
          {/* Profile Section */}
          <div className="flex gap-4">
            <div>
              <h1 className='font-semibold mb-2'>Boat Owner</h1>
              <div className="w-16 h-[60px] !rounded-full mb-5">
                <Image src='/assets/home/top/sssman.jpg' alt="image" height={200} width={200} className="h-full w-full rounded-full" />
              </div>
              <a href="#" className="text-[#0066FF] text-sm hover:underline">
                See profile
              </a>
            </div>
            <div className='mt-8'>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="font-medium">Yenisley</span>
                <span className="bg-amber-100 text-amber-700 text-[10px] px-1.5 py-0.5 rounded font-medium uppercase">
                  Top choice
                </span>
              </div>
              <div className="flex items-center gap-1.5 mb-1">
                <BiStar className="w-3.5 h-3.5 fill-current text-gray-900" />
                <span className="text-sm font-semibold text-black">4.8</span>
                <span className="text-sm text-gray-500">(129 bookings)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats and Button */}
        <div className="flex flex-col md:items-end gap-4">
          <div className="space-y-1 text-sm">
            <div className="flex items-center gap-2">
              <p><GoDotFill className='text-[6px]' /></p>
              <span className="text-gray-700">Response rate:</span>
              <span className="font-medium">99%</span>
            </div>
            <div className="flex items-center gap-2">
              <p><GoDotFill className='text-[6px]' /></p>
              <span className="text-gray-700">Avg. response time:</span>
              <span className="font-medium">{'< 1 hour'}</span>
            </div>
          </div>
          <button className="w-full  bg-white border border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors">
            MESSAGE OWNER
          </button>
        </div>
      </div>
      <hr className='my-10' />
    </div>
  )
}

