import React from "react";
import Navbar from "./(components)/Navbar";
import Sidebar from "./(components)/Sidebar";

type Props = {
  children: React.ReactNode;
};

const DashboardWrapper = ({ children }: Props) => {
  return (
    <div className={`flex bg-gray-50 text-gray-900 w-full min-h-screen light`}>
      <Sidebar />
      <main className="flex flex-col w-full h-full py-7 px-9 bg-gray-50 md:pl-24 ">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
