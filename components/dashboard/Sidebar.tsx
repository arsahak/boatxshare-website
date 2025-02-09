"use client";

import { HiOutlineReceiptTax } from "react-icons/hi";
import { MdOutlineBorderColor } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

// Define the type for nav items
interface NavItem {
  slug: string;
  label: string;
  icon: any;
}

const navItems: NavItem[] = [
  { slug: "overview", label: "Overview", icon: <RxDashboard /> },
  { slug: "boatlist", label: "Boat List", icon: <HiOutlineReceiptTax /> },
  { slug: "orderlist", label: "Order", icon: <MdOutlineBorderColor /> },
];

// Define the prop types for Sidebar component
interface SidebarProps {
  selectTabItem: string;
  setSelectTabItem: (value: string) => void;
}

const Sidebar = ({ selectTabItem, setSelectTabItem }: SidebarProps) => {
  const onSelectHandle = (value: string) => {
    setSelectTabItem(value);
  };

  return (
    <aside aria-label="Sidebar" className="bg-gray-500" id="default-sidebar">
      <div className="flex flex-col h-[600px]">
        {/* Navigation */}
        <ul className="font-medium text-lg divide-y-1">
          {navItems.map((item) => (
            <li key={item.slug}>
              <button
                className={`flex items-center px-5 xl:py-3 py-2 text-white transition-colors w-full  
                   ${
                     selectTabItem === item.slug
                       ? "bg-primary"
                       : "hover:bg-primary hover:border-primary"
                   }`}
                onClick={() => onSelectHandle(item.slug)} // Fix: passing function reference
              >
                <div className="text-2xl">{item.icon}</div>
                <span className="ms-3">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
