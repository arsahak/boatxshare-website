const VideoPlaySection = () => {
  return (
    <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/demovideo.mp4" // Replace with your video path
        autoPlay
        muted
        loop
      />

      {/* Overlay for dark background */}
      {/* <div className="absolute top-0 left-0 w-full h-full "></div> */}

      {/* Centered Button */}
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <button className="p-4 bg-white rounded-full shadow-lg text-blue-500 hover:bg-gray-200">
          <FaPlay size={24} />
        </button>
      </div> */}
    </div>
  );
};

export default VideoPlaySection;
