"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/app/state";
import {
  Archive,
  Clipboard,
  Layout,
  LucideIcon,
  Menu,
  CircleDollarSign,
  SlidersHorizontal,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer flex items-center ${
          isCollapsed ? "justify-between py-4" : "justify-start px-8 py-4"
        } hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
          isActive ? "bg-blue-200 text-white " : ""
        }`}
      >
        <Icon className="w-6 h-6 !text-gray-700" />
        <span
          className={`${
            isCollapsed ? "hidden" : "block"
          } font-medium text-gray-700`}
        >
          {label}
        </span>
        {isCollapsed && <Icon className="w-4 h-4 rotate-90" />}
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSliderCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSliderCollapsed));
  };

  const sidebarClassNames: string = `fixed flex flex-col ${
    isSliderCollapsed ? "w-0 md:w-16" : "w-72 md:w-64 "
  } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-50`;

  return (
    <div className={sidebarClassNames}>
      <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
        <div>logo</div>
        <h1
          className={`${
            isSliderCollapsed ? "hidden" : "block"
          }  font-extrabold text-2xl`}
        >
          SwiftTech
        </h1>
        <button
          className={`md:hidden px-3 py-3 bg-gray-100 rounded-full bover:bg-blue-100 ${
            isSliderCollapsed ? "px-5" : "px-8"
          }`}
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>
      <div className="flex-grow mt-8">
        {/* links */}
        <SidebarLink
          href="/dashboard"
          icon={Layout}
          label="Dashboard"
          isCollapsed={isSliderCollapsed}
        />
        <SidebarLink
          href="/inventory"
          icon={Archive}
          label="Inventory"
          isCollapsed={isSliderCollapsed}
        />
        <SidebarLink
          href="/products"
          icon={Clipboard}
          label="Products"
          isCollapsed={isSliderCollapsed}
        />
        <SidebarLink
          href="/users"
          icon={Users}
          label="Users"
          isCollapsed={isSliderCollapsed}
        />
        <SidebarLink
          href="/settings"
          icon={SlidersHorizontal}
          label="Settings"
          isCollapsed={isSliderCollapsed}
        />
        <SidebarLink
          href="/expenses"
          icon={CircleDollarSign}
          label="Expenses"
          isCollapsed={isSliderCollapsed}
        />
        {/* links */}
      </div>
      {/* footer display */}
      <div className={`${isSliderCollapsed ? "hidden" : "block"}}`}>
        <p className="text-center text-xs text-gray-500">&copy; 2024</p>
      </div>
      {/* footer display */}
    </div>
  );
};

export default Sidebar;
