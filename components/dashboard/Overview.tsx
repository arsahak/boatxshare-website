import { FaBorderStyle } from "react-icons/fa";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import { PiBoat } from "react-icons/pi";
import DashboardOverView from "../shared/ui/DashboardOverView";

const userStats = [
  { name: "January", subscribed: 120, unsubscribed: 20 },
  { name: "February", subscribed: 150, unsubscribed: 30 },
  { name: "March", subscribed: 200, unsubscribed: 50 },
  { name: "April", subscribed: 170, unsubscribed: 40 },
  { name: "May", subscribed: 220, unsubscribed: 60 },
  { name: "June", subscribed: 300, unsubscribed: 70 },
  { name: "July", subscribed: 250, unsubscribed: 80 },
  { name: "August", subscribed: 280, unsubscribed: 90 },
  { name: "September", subscribed: 350, unsubscribed: 100 },
  { name: "October", subscribed: 320, unsubscribed: 110 },
  { name: "November", subscribed: 400, unsubscribed: 130 },
  { name: "December", subscribed: 450, unsubscribed: 140 },
];

const dashboardData = [
  {
    title: "Total Boat Listing",
    value: 150,
    description: "All Boat List",
    icon: <PiBoat className="size-10 text-primary" />,
    backgroundColor: "#FDD9D4",
  },
  {
    title: "Total Order",
    value: 550,
    description: "All Order Report",
    icon: <FaBorderStyle className="size-10 text-primary" />,
    backgroundColor: "#F8ECCF",
  },
  {
    title: "Balance",
    value: `$ ${120}`,
    description: "All Boat List",
    icon: <LiaHandHoldingUsdSolid className="size-10 text-primary" />,
    backgroundColor: "#C5D4FD",
  },
];

const Overview = () => {
  return (
    <div>
      <div className="grid grid-cols-3 items-center justify-between gap-5">
        {dashboardData?.map((el: any, index: number) => (
          <div
            style={{ backgroundColor: el?.backgroundColor }}
            className="p-7 space-y-14 rounded"
          >
            <h2 className="text-2xl font-medium text-[#11142D]">{el?.title}</h2>
            <div className="flex items-center justify-between">
              <div className="">{el?.icon}</div>
              <div className="">
                <h2 className="text-3xl font-bold text-[#11142D]">
                  {el?.value}
                </h2>
                <p className="text-lg font-normal text-[#11142D] mt-1">
                  {el?.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <DashboardOverView />
      </div>
    </div>
  );
};

export default Overview;
