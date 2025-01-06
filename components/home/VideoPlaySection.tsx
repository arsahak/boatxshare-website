'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { FiPlay, FiPause, FiVolume2, FiVolumeX } from 'react-icons/fi'
import img from "@/public/assets/home/hero-img/hero-with-boat.jpg"

export function VideoPlaySection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVideoEnd = () => {
    setIsPlaying(false)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-[#1a2744] mt-20">
      {/* Thumbnail Image (shown before video loads) */}
      {!isVideoLoaded && (
        <Image
          src={img}
          alt="Sailing yacht"
          fill
          className="object-cover"
          priority
        />
      )}

      {/* Video Player */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        onEnded={handleVideoEnd}
        onLoadedData={() => setIsVideoLoaded(true)}
        playsInline
        muted={isMuted}
        loop
      >
        <source src="/example" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-[#1a2744]/70 pointer-events-none" />

      {/* Play Button and Controls */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={handlePlayPause}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative z-10"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          <div
            className={`
              w-16 h-16 rounded-full 
              flex items-center justify-center
              transition-all duration-300 ease-in-out
              ${isHovered ? 'bg-white scale-110' : 'bg-white/90'}
            `}
          >
            {isPlaying ? (
              <FiPause 
                className={`
                  w-6 h-6
                  transition-colors duration-300
                  ${isHovered ? 'text-[#1a2744]' : 'text-[#1a2744]/90'}
                `}
              />
            ) : (
              <FiPlay 
                className={`
                  w-6 h-6 ml-1
                  transition-colors duration-300
                  ${isHovered ? 'text-[#1a2744]' : 'text-[#1a2744]/90'}
                `}
              />
            )}
          </div>
        </button>

        {/* Volume Control */}
        <button
          onClick={toggleMute}
          className={`
            absolute bottom-6 right-6 z-10
            w-10 h-10 rounded-full 
            flex items-center justify-center
            transition-all duration-300
            ${isHovered ? 'opacity-100' : 'opacity-0'}
            bg-white/90 hover:bg-white
          `}
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? (
            <FiVolumeX className="w-5 h-5 text-[#1a2744]" />
          ) : (
            <FiVolume2 className="w-5 h-5 text-[#1a2744]" />
          )}
        </button>
      </div>
    </div>
  )
}

