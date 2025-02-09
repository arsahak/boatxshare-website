"use client";

import { userMultipleImageUpload } from "@/app/action/testImage";
import { Dispatch, SetStateAction, useState } from "react";
import { IoClose } from "react-icons/io5";
interface UploadMultipleImagesProps {
  setSelectedFiles: Dispatch<SetStateAction<File[]>>;
  selectedFiles: File[];
}

const UploadMultipleImages: React.FC<UploadMultipleImagesProps> = ({
  setSelectedFiles,
  selectedFiles,
}) => {
  const [previews, setPreviews] = useState<string[]>([]);
  const [uploadStatus, setUploadStatus] = useState<string>("");

  // Handle file selection and generate previews
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setSelectedFiles(fileArray);

      // Generate image previews
      const previewUrls = fileArray.map((file) => URL.createObjectURL(file));
      setPreviews(previewUrls);
    }
  };

  // Remove a selected image
  const removeImage = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    const newPreviews = previews.filter((_, i) => i !== index);

    setSelectedFiles(newFiles);
    setPreviews(newPreviews);
  };

  // Handle form submission and upload images
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

      setUploadStatus("Success! Images uploaded.");
      setSelectedFiles([]);
      setPreviews([]);
    } catch (error) {
      console.error("Upload error:", error);
      setUploadStatus("An error occurred during upload");
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* Image Previews with Remove Option */}
        {previews.length > 0 ? (
          <div className="flex flex-wrap gap-2 mt-2 w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 p-3">
            {previews.map((src, index) => (
              <div key={index} className="relative">
                <img
                  src={src}
                  alt={`Preview ${index}`}
                  className="w-32 h-32 object-cover rounded shadow"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1  bg-red-500 text-white rounded-full p-1"
                >
                  <IoClose className=" size-4 text-white" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 ">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                className="hidden"
                type="file"
                multiple
                onChange={handleFileChange}
                accept="image/*"
              />
            </label>
          </div>
        )}
      </form>

      {/* {uploadStatus && (
        <p className="mt-3 text-sm text-gray-700">{uploadStatus}</p>
      )} */}
    </div>
  );
};

export default UploadMultipleImages;
