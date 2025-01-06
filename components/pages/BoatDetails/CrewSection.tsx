import Image from 'next/image'
import { BiStar } from 'react-icons/bi'
// import { Star } from 'lucide-react'

export default function CrewSection() {
  return (
    <div className=" p-6">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <h2 className="text-xl font-semibold mb-4">Your crew</h2>
        <div className="flex items-center gap-4">
          {/* Profile Section */}
          <div className="flex items-center gap-4">
            <Image
              src="/placeholder.svg?height=56&width=56"
              alt="Yenisley"
              width={56}
              height={56}
              className="rounded-full"
            />
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="font-medium">Yenisley</span>
                <span className="bg-amber-100 text-amber-700 text-[10px] px-1.5 py-0.5 rounded font-medium uppercase">
                  Top choice
                </span>
              </div>
              <div className="flex items-center gap-1.5 mb-1">
                <BiStar className="w-3.5 h-3.5 fill-current text-gray-900" />
                <span className="text-sm font-medium">4.8</span>
                <span className="text-sm text-gray-500">(129 bookings)</span>
              </div>
              <a href="#" className="text-[#0066FF] text-sm hover:underline">
                See profile
              </a>
            </div>
          </div>
        </div>

        {/* Stats and Button */}
        <div className="flex flex-col md:items-end gap-4">
          <div className="space-y-1 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gray-500">Response rate:</span>
              <span className="font-medium">99%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">Avg. response time:</span>
              <span className="font-medium">{'< 1 hour'}</span>
            </div>
          </div>
          <button className="w-full md:w-auto bg-white border border-[#0066FF] text-[#0066FF] px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors">
            MESSAGE OWNER
          </button>
        </div>
      </div>
      <hr className='my-10'/>
    </div>
  )
}

