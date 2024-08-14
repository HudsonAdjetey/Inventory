"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/app/state";
import { Menu } from "lucide-react";
import React from "react";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSliderCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSliderCollapsed));
  };

  const sidebarClassNames = `fixed flex flex-col ${
    isSliderCollapsed ? "w-0 md:w-16" : "w-72 md:w-64 "
  } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-50`;

  return (
    <div className={sidebarClassNames}>
      <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
        <div>logo</div>
        <h1 className="font-extrabold text-2xl">SwiftTech</h1>
        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full bover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>
      <div className="flex-grow mt-8">
        {/* links */}
        {/* links */}
      </div>
      {/* footer display */}
      <div>
        <p className="text-center text-xs text-gray-500">&copy; 2024</p>
      </div>
      {/* footer display */}
    </div>
  );
};

export default Sidebar;
