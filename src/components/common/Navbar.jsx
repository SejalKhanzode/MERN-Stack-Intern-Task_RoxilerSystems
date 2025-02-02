import React from "react";

function Navbar({ tab, setTab }) {
  return (
    <div className="border-t border-gray-300 flex items-center justify-center py-5 cursor-pointer h-[10vh] w-full">
      <nav className="bg-gray-200  w-fit flex justify-center items-center border border-black rounded-[15px] shadow-md">
        <div
          className={`flex items-center h-[40px] px-5 transition-colors duration-300 cursor-pointer rounded-l-[15px] ${
            tab === 1 ? "bg-[#beaef2] text-white" : "bg-transparent text-gray-600 hover:bg-[#beaef2] hover:text-white"
          }`}
          onClick={() => setTab(1)}
        >
          Transactions
        </div>
        
        <span className="h-[40px] w-[1px] bg-black" />

        <div
          className={`flex items-center h-[40px] px-5 transition-colors duration-300 cursor-pointer ${
            tab === 2 ? "bg-[#beaef2] text-white" : "bg-transparent text-gray-600 hover:bg-[#beaef2] hover:text-white"
          }`}
          onClick={() => setTab(2)}
        >
          Statistics
        </div>

        <span className="h-[40px] w-[1px] bg-black" />

        <div
          className={`flex items-center h-[40px] px-5 transition-colors duration-300 cursor-pointer ${
            tab === 3 ? "bg-[#beaef2] text-white" : "bg-transparent text-gray-600 hover:bg-[#beaef2] hover:text-white"
          }`}
          onClick={() => setTab(3)}
        >
          Bar Chart
        </div>

        <span className="h-[40px] w-[0.5px] bg-black" />

        <div
          className={`flex items-center h-[40px] px-5 transition-colors duration-300 cursor-pointer rounded-r-[15px] ${
            tab === 4 ? "bg-[#beaef2] text-white" : "bg-transparent text-gray-600 hover:bg-[#beaef2] hover:text-white"
          }`}
          onClick={() => setTab(4)}
        >
          Pie Chart
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
