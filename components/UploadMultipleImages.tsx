"use client";

import { userMultipleImageUpload } from "@/app/action/testImage";
import { useState } from "react";

const UploadMultipleImages = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadStatus, setUploadStatus] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setSelectedFiles(Array.from(files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedFiles.length === 0) {
      setUploadStatus("No files selected");
      return;
    }

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("gallery", file);
    });

    try {
      const response = await userMultipleImageUpload(formData);

      if (!response.ok) {
        setUploadStatus(`Upload failed: ${response.message}`);
        return;
      }
      setUploadStatus(`Success! Uploaded images.`);
    } catch (error) {
      console.error("Upload error:", error);
      setUploadStatus("An error occurred during upload");
    }
  };

  return (
    <div>
      <h1>Upload Multiple Images</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          accept="image/*"
        />
        <button type="submit">Upload</button>
      </form>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default UploadMultipleImages;

// <div className="flex items-center justify-center">
//               <div className="relative h-[480px] md:h-[850px]">
//                 <Image
//                   src="/assets/home/hero-img/hero-section-one.jpg"
//                   alt="home-banner"
//                   layout="fill"
//                   objectFit="cover"
//                   priority
//                   className="z-10 hidden md:block"
//                   rel="preload"
//                 />

//                 <Image
//                   src="/assets/home/hero-img/hero-section-one.jpg"
//                   alt="home-banner"
//                   layout="fill"
//                   objectFit="cover"
//                   priority
//                   className="z-10 block md:hidden"
//                   rel="preload"
//                 />

//                 <motion.div
//                   className="absolute inset-0 z-20 flex items-center my-0"
//                   initial="hidden"
//                   animate="visible"
//                   exit={{ opacity: 0, transition: { duration: 1 } }}
//                   variants={{
//                     visible: { transition: { staggerChildren: 0.2 } },
//                   }}
//                 >
//                   <div className="container">
//                     <div className="grid items-center grid-cols-1 md:grid-cols-3">
//                       <div className="col-span-2">
//                         <motion.h2
//                           variants={variants}
//                           className="text-xl font-normal text-center text-[#9B8573] md:text-2xl md:text-left mb-4"
//                         >
//                           Spring-Summer 2025
//                         </motion.h2>

//                         <h1
//                           className={`text-[50px] md:text-[90px] text-white text-center md:text-left leading-[85px] tracking-normal font-aviano-regular`}
//                         >
//                           {text.map((word, index) => (
//                             <motion.span
//                               initial={{ opacity: 0 }}
//                               animate={{ opacity: 1 }}
//                               transition={{ duration: 0.25, delay: index / 10 }}
//                               key={index}
//                             >
//                               {word}{" "}
//                             </motion.span>
//                           ))}
//                         </h1>
//                         <motion.p
//                           variants={variants}
//                           className="mt-6 text-center text-white text-md md:text-lg md:mt-5 md:text-left font-outfit-sans"
//                         >
//                           Heir to the visionary tradition of British
//                           Romanticism, John Boorman is one of the great masters
//                           of cinematic form. His sense of color, movement, and
//                           space perfectly matches his interest in poetry and
//                           myth.
//                         </motion.p>

//                         <motion.div
//                           variants={variants}
//                           className="flex justify-center mt-5 md:mt-8 md:justify-start"
//                              href={"/"}
//                             className="flex items-center justify-center px-2 py-2 mb-2 text-sm font-medium text-white border border-white bg-none hover:bg-black md:text-lg md:px-8 me-0 md:me-6 w-44 uppercase font-aviano-regular"
//                           >
//                             Discover
//                           </Link>
//                         </motion.div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex justify-between items-center absolute bottom-10 container left-0 right-0">
//                     <button className="flex items-center space-x-3 text-white ">
//                       <BsArrowLeft className="size-6" />
//                       <h2 className="font-aviano-regular text-lg">Previous</h2>
//                     </button>
//                     <h2 className="font-aviano-regular text-lg text-white  border-b-2 border-white pb-2">
//                       See the looks
//                     </h2>
//                     <button className="flex items-center space-x-3 text-white ">
//                       <h2 className="font-aviano-regular text-lg">Next</h2>
//                       <BsArrowRight className="size-6" />
//                     </button>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>      >
//                           <Link
