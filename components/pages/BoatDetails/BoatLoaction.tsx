"use client"
export default function BoatLocation() {
    return (
      <div className="">
        <div className="space-y-2 mb-4">
          <h2 className="text-xl font-semibold text-[#1A1A1A]">Boat location</h2>
          <p className="text-gray-600 text-sm">
            Exact location information is provided after a booking is confirmed.
          </p>
        </div>
        
        <div className="relative w-full h-[350px] rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.53925916665!2d-80.29949920266738!3d25.782390733874154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20FL!5e0!3m2!1sen!2sus!4v1696459433619!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          />
          
          {/* Zoom Controls */}
          <div className="absolute right-4 bottom-16 flex flex-col gap-2">
            <button className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50">
              <span className="text-gray-600 text-xl">+</span>
            </button>
            <button className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50">
              <span className="text-gray-600 text-xl">−</span>
            </button>
          </div>
  
          {/* Attribution */}
          {/* <div className="absolute bottom-0 right-0 bg-white/90 text-[10px] text-gray-600 py-1 px-2">
            <span>Keyboard shortcuts</span>
            <span className="mx-1">|</span>
            <span>Map data ©2024 Google</span>
            <span className="mx-1">|</span>
            <a href="#" className="text-gray-600 hover:underline">Terms</a>
            <span className="mx-1">|</span>
            <a href="#" className="text-gray-600 hover:underline">Get a map view</a>
          </div> */}
        </div>
        <hr  className="my-10"/>
      </div>
    )
  }
  
  