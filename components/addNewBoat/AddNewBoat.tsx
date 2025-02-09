"use client";

import axios from "axios";
import FormData from "form-data";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BsDash } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
import UploadMultipleImages from "../UploadMultipleImages";

interface BoatListingForm {
  title: string;
  description: string;
  address: {
    country: string;
    province: string;
    city: string;
  };
  boatLength: string;
  boatPassengers: string;
  boatCaptain: string;
  boatYear: string;
  boatMake: string;
  boatModel: string;
  boatCapacity: string;
  boatType: string;
  boatFuel: string;
  boatAmenitiesList: string[];
  bookingsOption: { duration: string; price: string }[];
  gallery: File[] | string[];
}

interface AddNewBoatProps {
  session: any;
}

const AddNewBoat = ({ session }: AddNewBoatProps) => {
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [boatAmenitiesList, setBoatAmenitiesList] = useState<string[]>([]);
  const [boatAmenitiesListInputValue, setBoatAmenitiesListInputValue] =
    useState<string>("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && boatAmenitiesListInputValue.trim()) {
      event.preventDefault();
      setBoatAmenitiesList([
        ...boatAmenitiesList,
        boatAmenitiesListInputValue.trim(),
      ]);
      setBoatAmenitiesListInputValue("");
    }
  };

  const handleDelete = (index: number) => {
    setBoatAmenitiesList(boatAmenitiesList.filter((_, i) => i !== index));
  };

  const [bookingsOption, setBookingsOption] = useState<
    { duration: string; price: string }[]
  >([]);
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");

  const handleKeyDowns = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && duration.trim() && price.trim()) {
      event.preventDefault();
      setBookingsOption([...bookingsOption, { duration, price }]);
      setDuration("");
      setPrice("");
    }
  };

  const handleDeletes = (index: number) => {
    setBookingsOption(bookingsOption.filter((_, i) => i !== index));
  };

  const [boatListingForm, setBoatListingForm] = useState<BoatListingForm>({
    title: "",
    description: "",
    address: { country: "", province: "", city: "" },
    boatLength: "",
    boatPassengers: "",
    boatCaptain: "",
    boatYear: "",
    boatMake: "",
    boatModel: "",
    boatCapacity: "",
    boatType: "",
    boatFuel: "",
    boatAmenitiesList: [],
    bookingsOption: [],
    gallery: [],
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setBoatListingForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBoatListingForm((prev) => ({
      ...prev,
      address: { ...prev.address, [name]: value },
    }));
  };

  useEffect(() => {
    setBoatListingForm((prev) => ({ ...prev, boatAmenitiesList }));
  }, [boatAmenitiesList]);

  useEffect(() => {
    setBoatListingForm((prev) => ({ ...prev, bookingsOption }));
  }, [bookingsOption]);

  useEffect(() => {
    setBoatListingForm((prev) => ({ ...prev, gallery: selectedFiles }));
  }, [selectedFiles]);

  const handleSubmitFormData = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const uploadImagesToImgBB = async (files: File[]): Promise<string[]> => {
        const uploadedUrls: string[] = [];
        const imgbbApiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;

        for (const file of files) {
          const formData = new FormData();
          formData.append("key", imgbbApiKey || "");
          formData.append("image", file);

          const response = await axios.post(
            "https://api.imgbb.com/1/upload",
            formData
          );
          if (response.data.success) {
            uploadedUrls.push(response.data.data.url);
          }
        }
        return uploadedUrls;
      };

      const uploadedUrls = await uploadImagesToImgBB(
        boatListingForm.gallery as File[]
      );
      const updatedForm = { ...boatListingForm, gallery: uploadedUrls };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/boatlister`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: session || "",
          },
          body: JSON.stringify(updatedForm),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(
          errorData?.error || `Error: ${response.status} ${response.statusText}`
        );
      }

      toast.success("Client created successfully!");
      setError(null);
      router.push("/dashboard");
    } catch (error) {
      console.error("Error creating client data:", error);
      toast.error(
        error instanceof Error ? error.message : "An unexpected error occurred."
      );
      setError(
        error instanceof Error ? error.message : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  console.log("check value 199", boatListingForm);

  return (
    <div className="container pt-36 pb-20">
      <h2 className="text-2xl font-bold text-primary my-2">
        Fill up all the input fields to list the boat
      </h2>
      <form className="">
        <div className="flex items-center space-x-6 py-3">
          <div className="w-full">
            <label
              htmlFor="name-icon"
              className="block mb-2 text-lg font-normal text-gray-900"
            >
              Title<span className="text-primary">*</span>
            </label>

            <input
              autoComplete="off"
              type="text"
              id="clientInfoForm.fullName"
              className="bg-[#eeeeee] border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400 active:border-primary outline-none"
              placeholder="Enter..."
              name="title"
              value={boatListingForm.title}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex items-center space-x-6 py-3">
          <div className="w-full">
            <label
              htmlFor="name-icon"
              className="block mb-2 text-lg font-normal text-gray-900"
            >
              Description<span className="text-primary">*</span>
            </label>

            <textarea
              autoComplete="off"
              rows={3}
              id="clientInfoForm.phone"
              className="bg-[#eeeeee] border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400  active:border-primary outline-none"
              placeholder="Enter..."
              name="description"
              value={boatListingForm.description}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex items-center space-x-6 py-3">
          <div className="w-full">
            <label
              htmlFor="name-icon"
              className="block mb-2 text-lg font-normal text-gray-900"
            >
              Country<span className="text-primary">*</span>
            </label>

            <input
              autoComplete="off"
              type="text"
              id="clientInfoForm.fullName"
              className="bg-[#eeeeee] border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400 active:border-primary outline-none"
              placeholder="Enter..."
              name="country"
              value={boatListingForm.address.country}
              onChange={handleAddressChange}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="name-icon"
              className="block mb-2 text-lg font-normal text-gray-900"
            >
              Provance<span className="text-primary">*</span>
            </label>

            <input
              autoComplete="off"
              type="text"
              id="clientInfoForm.phone"
              className="bg-[#eeeeee] border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400  active:border-primary outline-none"
              placeholder="Enter..."
              name="province"
              value={boatListingForm.address.province}
              onChange={handleAddressChange}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="name-icon"
              className="block mb-2 text-lg font-normal text-gray-900"
            >
              City<span className="text-primary">*</span>
            </label>

            <input
              autoComplete="off"
              type="text"
              id="clientInfoForm.phone"
              className="bg-[#eeeeee] border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400  active:border-primary outline-none"
              placeholder="Enter..."
              name="city"
              value={boatListingForm.address.city}
              onChange={handleAddressChange}
            />
          </div>
        </div>
        <div className="flex items-center space-x-6 py-3">
          <div className="w-full">
            <label
              htmlFor="name-icon"
              className="block mb-2 text-lg font-normal text-gray-900"
            >
              Boat Length<span className="text-primary">*</span>
            </label>

            <input
              autoComplete="off"
              type="text"
              id="clientInfoForm.fullName"
              className="bg-[#eeeeee] border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400 active:border-primary outline-none"
              placeholder="Enter..."
              name="boatLength"
              value={boatListingForm.boatLength}
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="name-icon"
              className="block mb-2 text-lg font-normal text-gray-900"
            >
              Boat Passengers<span className="text-primary">*</span>
            </label>

            <input
              autoComplete="off"
              type="text"
              id="clientInfoForm.phone"
              className="bg-[#eeeeee] border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400  active:border-primary outline-none"
              placeholder="Enter..."
              name="boatPassengers"
              value={boatListingForm.boatPassengers}
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="name-icon"
              className="block mb-2 text-lg font-normal text-gray-900"
            >
              Boat Captain<span className="text-primary">*</span>
            </label>

            <div className="">
              <div className="flex gap-4">
                <label className="flex items-center gap-2 text-lg">
                  <input
                    type="radio"
                    name="boatCaptain"
                    value="yes"
                    checked={boatListingForm.boatCaptain === "yes"}
                    onChange={handleChange}
                    className="accent-blue-500 size-4"
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2 text-lg">
                  <input
                    type="radio"
                    name="boatCaptain"
                    value="no"
                    checked={boatListingForm.boatCaptain === "no"}
                    onChange={handleChange}
                    className="accent-blue-500 size-4"
                  />
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-6 py-3">
          <div className="w-full">
            <label
              htmlFor="name-icon"
              className="block mb-2 text-lg font-normal text-gray-900"
            >
              Boat Year<span className="text-primary">*</span>
            </label>

            <input
              autoComplete="off"
              type="text"
              id="clientInfoForm.fullName"
              className="bg-[#eeeeee] border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400 active:border-primary outline-none"
              placeholder="Enter..."
              name="boatYear"
              value={boatListingForm.boatYear}
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="name-icon"
              className="block mb-2 text-lg font-normal text-gray-900"
            >
              Boat Make<span className="text-primary">*</span>
            </label>

            <input
              autoComplete="off"
              type="text"
              id="clientInfoForm.phone"
              className="bg-[#eeeeee] border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400  active:border-primary outline-none"
              placeholder="Enter..."
              name="boatMake"
              value={boatListingForm.boatMake}
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="name-icon"
              className="block mb-2 text-lg font-normal text-gray-900"
            >
              Boat Model<span className="text-primary">*</span>
            </label>

            <input
              autoComplete="off"
              type="text"
              id="clientInfoForm.phone"
              className="bg-[#eeeeee] border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400  active:border-primary outline-none"
              placeholder="Enter..."
              name="boatModel"
              value={boatListingForm.boatModel}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex items-center space-x-6 py-3">
          <div className="w-full">
            <label
              htmlFor="name-icon"
              className="block mb-2 text-lg font-normal text-gray-900"
            >
              Boat Capacity<span className="text-primary">*</span>
            </label>

            <input
              autoComplete="off"
              type="text"
              id="clientInfoForm.fullName"
              className="bg-[#eeeeee] border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400 active:border-primary outline-none"
              placeholder="Enter..."
              name="boatCapacity"
              value={boatListingForm.boatCapacity}
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="name-icon"
              className="block mb-2 text-lg font-normal text-gray-900"
            >
              Boat Type<span className="text-primary">*</span>
            </label>

            <input
              autoComplete="off"
              type="text"
              id="clientInfoForm.phone"
              className="bg-[#eeeeee] border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400  active:border-primary outline-none"
              placeholder="Enter..."
              name="boatType"
              value={boatListingForm.boatType}
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="name-icon"
              className="block mb-2 text-lg font-normal text-gray-900"
            >
              Boat Fuel<span className="text-primary">*</span>
            </label>

            <div className="">
              <div className="flex gap-4">
                <label className="flex items-center gap-2 text-lg">
                  <input
                    type="radio"
                    name="boatFuel"
                    value="yes"
                    checked={boatListingForm.boatFuel === "yes"}
                    onChange={handleChange}
                    className="accent-blue-500 size-4"
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2 text-lg">
                  <input
                    type="radio"
                    name="boatFuel"
                    value="no"
                    checked={boatListingForm.boatFuel === "no"}
                    onChange={handleChange}
                    className="accent-blue-500 size-4"
                  />
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start space-x-6 py-3">
          <div className="w-full">
            <label
              htmlFor="name-icon"
              className="block mb-2 text-lg font-normal text-gray-900"
            >
              Boat Amenities List<span className="text-primary">*</span>
            </label>

            <input
              autoComplete="off"
              type="text"
              id="clientInfoForm.phone"
              className="bg-[#eeeeee] border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400 outline-none"
              placeholder="Enter..."
              name="basicInformation.phone"
              value={boatAmenitiesListInputValue}
              onChange={(e) => setBoatAmenitiesListInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />

            {/* Phone Numbers List */}
            <ul className="mt-3 space-y-2">
              {boatAmenitiesList.map((number, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-lg"
                >
                  {number}
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-400"
                  >
                    <IoClose size={18} />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full">
            <label
              htmlFor="name-icon"
              className="block mb-2 text-lg font-normal text-gray-900"
            >
              Booking Option<span className="text-primary">*</span>
            </label>

            <div className="mx-auto  w-full">
              <div className="flex gap-2 items-center  bg-[#eeeeee] border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary  w-full">
                {/* Duration Input */}
                <input
                  type="text"
                  placeholder="Enter duration (e.g., 2 hours)"
                  className=" block w-full pl-4 py-2 placeholder-gray-400 outline-none bg-[#eeeeee]"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <BsDash className="text-gray-700 size-10 pl-4" />
                <input
                  type="text"
                  placeholder="Enter price (e.g., 500)"
                  className="text-lg block w-full pl-4 py-2  outline-none bg-[#eeeeee]"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  onKeyDown={handleKeyDowns}
                />
              </div>

              {/* Booking List */}
              <ul className="mt-3 space-y-2">
                {bookingsOption.map((booking, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-lg"
                  >
                    {booking.duration} - ${booking.price}
                    <button
                      onClick={() => handleDeletes(index)}
                      className="text-red-500"
                    >
                      <IoClose size={18} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-6 py-3">
          <div className="w-full">
            <label
              htmlFor="name-icon"
              className="block mb-2 text-lg font-normal text-gray-900"
            >
              Upload Image<span className="text-primary">*</span>
            </label>

            {/* <input
              autoComplete="off"
              type="text"
              id="clientInfoForm.fullName"
              className="bg-[#eeeeee] border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400 active:border-primary outline-none"
              placeholder="Enter..."
              name="basicInformation.fullName"
            /> */}
            <UploadMultipleImages
              selectedFiles={selectedFiles}
              setSelectedFiles={setSelectedFiles}
            />
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center">
          {/* <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-hoverColor">
         
          </button> */}
        </div>
        <div className="pt-6 text-center">
          {error && <p className="text-red-500 text-base">{error}</p>}
        </div>

        <div className="w-full flex items-center  justify-center mt-4 space-x-6">
          <button
            type="submit"
            onClick={handleSubmitFormData}
            className="px-4 py-2  text-white rounded-md font-medium text-lg bg-primary hover:bg-hoverColor hover:text-white w-[220px] text-center"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 text-gray-300 animate-spin fill-white"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>
                <p>Adding...</p>
              </div>
            ) : (
              <p> Add boat for listing</p>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewBoat;
