"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/app/state";
import { Bell, Menu, Moon, Settings, Sun } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSliderCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };
  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSliderCollapsed));
  };

  const sidebarClassNames = `fixed flex flex-col ${
    isSliderCollapsed ? "w-0 md:w-16" : "w-72 md:w-64 "
  } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-50`;
  return (
    <div className="flex justify-between items-center w-full mb-7">
      {/* left side */}
      <div className="flex justify-between items-center gap-5">
        <button
          className="p-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>
        <div className="relative">
          <input
            type="search"
            name=""
            id=""
            placeholder="Start type to search groups & products"
            className="pl-10 py-2 pr-4 w-50 md:w-86 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
          />

          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Bell className="text-gray-500 " size={20} />
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex justify-between items-center gap-5">
        {/* left side bar hidden on smaller screen size */}
        <div className="hidden md:flex justify-between items-center gap-5">
          {/* theme color change */}
          <div>
            <button onClick={toggleDarkMode}>
              {isDarkMode ? (
                <Sun className="cursor-pointer text-gray-500" size={24} />
              ) : (
                <Moon className="cursor-pointer text-gray-500" size={24} />
              )}
            </button>
          </div>
          {/* theme color change */}

          {/* notification */}
          <div className="relative">
            <Bell className="cursor-pinter text-gray-500" size={24} />
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center p-[0.4rem] text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
              3
            </span>
          </div>
          {/* notification */}
          <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-9 h-9">image</div>
            <span className="font-semibold">Hudson</span>
          </div>
        </div>
        {/* left side bar hidden on smaller screen size */}
        <Link href={"/settings"}>
          <Settings className="cursor-pointer text-gray-500" size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
