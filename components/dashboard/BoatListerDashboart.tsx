"use client";
import { useState } from "react";
import ListingBoat from "./ListingBoat";
import OderList from "./OderList";
import Overview from "./Overview";
import Sidebar from "./Sidebar";

const BoatListerDashboart = () => {
  const [selectTabItem, setSelectTabItem] = useState("overview");

  return (
    <div className="container pt-36 pb-20">
      <div className="flex items-start bg-slate-100">
        <div className="w-[25%]">
          <Sidebar
            selectTabItem={selectTabItem}
            setSelectTabItem={setSelectTabItem}
          />
        </div>
        <div className="w-[75%] p-6">
          {selectTabItem === "overview" ? (
            <Overview />
          ) : selectTabItem === "boatlist" ? (
            <ListingBoat />
          ) : (
            <OderList />
          )}
        </div>
      </div>
    </div>
  );
};

export default BoatListerDashboart;
