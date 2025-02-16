"use client";
import { getAllBoatListDataSearch } from "@/app/action/boatList";
import { DateRangePicker } from "@heroui/react";
import { useCallback, useEffect, useState } from "react";
import { BsPeople } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { setBoatListData, setLoading } from "../../redux/features/boatSlice";
import Loader from "../shared/ui/Loader";
import { AppDispatch, RootState } from "./store";

const SearchForm = () => {
  const [searchLoading, setSearchLoading] = useState(false);
  const [locationSearch, setLocationSearch] = useState("");
  const [durationSearch, setDurationSearch] = useState("");
  const [guestSearch, setGuestSearch] = useState("");

  const dispatch: AppDispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.boatList.loading);
  const boatListData = useSelector(
    (state: RootState) => state.boatList.boatListData
  );

  const fetchUsers = useCallback(async () => {
    dispatch(setLoading(true));
    try {
      const result = await getAllBoatListDataSearch(locationSearch);
      if (result.ok && result.data) {
        dispatch(setBoatListData(result?.data?.boatLister));
      } else {
        console.error(result.error || "Failed to fetch client data.");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleSearch = async () => {
    setSearchLoading(true);
    dispatch(setLoading(true));
    try {
      const result = await getAllBoatListDataSearch(locationSearch);
      if (result.ok && result.data) {
        dispatch(setBoatListData(result?.data?.boatLister));
      } else {
        console.error(result.error || "Failed to fetch client data.");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      dispatch(setLoading(false));
      setSearchLoading(false);
    }
  };

  return (
    <div className="md:absolute left-0 right-0 z-10 mt-6 md:mt-0 bg-secondary">
      {/* Search Form */}
      <div className=" bg-white rounded-xl  shadow w-full md:w-[50%] mx-auto -mt-[4%] px-8 md:px-20 py-10 md:py-14">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0  space-x-0  md:space-x-6">
          <div className="relative w-full">
            <label
              htmlFor="location-input"
              className="text-base font-normal text-gray-600 bg-white px-1 absolute -top-0 left-3 transform -translate-y-1/2"
            >
              Where to?
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg py-4 px-3 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
              <SlLocationPin className="text-gray-700 size-5" />
              <input
                id="location-input"
                type="text"
                placeholder="Washington DC"
                className="w-full focus:outline-none placeholder:font-semibold placeholder:text-gray-800 text-gray-900 bg-transparent pl-2"
                value={locationSearch}
                onChange={(e) => setLocationSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="relative w-full">
            <label
              htmlFor="location-input"
              className="text-base font-normal text-gray-600 bg-white px-1 absolute  left-3 transform -translate-y-1/2"
            >
              When?
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg py-2 px-2 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
              {/* <LuCalendar className="text-gray-700 size-5" /> */}
              {/* <input
                id="location-input"
                type="text"
                placeholder="Jan 23 ± 7"
                className="w-full focus:outline-none placeholder:font-semibold placeholder:text-gray-800 text-gray-900 bg-transparent pl-2"
                value={locationSearch}
                onChange={(e) => setLocationSearch(e.target.value)}
              /> */}
              <DateRangePicker
                className="bg-none hover:bg-none max-w-full"
                selectorButtonPlacement={"start"}
              />
            </div>
          </div>

          <div className="relative w-full">
            <label
              htmlFor="location-input"
              className="text-base font-normal text-gray-600 bg-white px-1 absolute  left-3 transform -translate-y-1/2"
            >
              Who’s in?
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg py-4 px-3 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
              <BsPeople className="text-gray-700 size-5" />
              <input
                id="location-input"
                type="text"
                placeholder="7 Guests"
                className="w-full focus:outline-none placeholder:font-semibold placeholder:text-gray-800 text-gray-900 bg-transparent pl-2"
                value={guestSearch}
                onChange={(e) => setGuestSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center md:absolute -bottom-6 right-0 left-0 mt-8 md:mt-0">
          <button
            className="bg-primary text-white px-16 py-3 rounded-lg hover:bg-hoverColor transition text-lg h-14 w-48"
            onClick={handleSearch}
          >
            <div className="flex items-center justify-center">
              {searchLoading ? (
                <div className="flex items-center space-x-2">
                  <Loader /> <span>Searching</span>
                </div>
              ) : (
                <span>Search</span>
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
