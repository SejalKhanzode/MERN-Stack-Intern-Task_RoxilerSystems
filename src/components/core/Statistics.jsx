import React, { useEffect } from "react";
import axios from "axios";

function Statistics({ month, data, setData }) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/statistics?month=${month}`
          `https://mern-stack-vhs0.onrender.com/api/statistics?month=${month}`
        );
        setData(response.data);
        console.log("data", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [month, setData]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  {/* Total Sale Amount */}
  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center min-w-[250px] transition-all duration-200 hover:scale-105 hover:shadow-xl">
    <div className="text-5xl font-extrabold text-blue-600">
      ₹{(data?.data?.totalSaleAmount || 0).toFixed(2)}
    </div>
    <div className="text-gray-700 text-lg mt-2">Total Sale Amount</div>
  </div>

  {/* Total Sold Items */}
  <div className="bg-gray-100 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center min-w-[250px] transition-all duration-200 hover:scale-105 hover:shadow-xl">
    <div className="text-5xl font-extrabold text-green-600">
      {data?.data?.totalSoldItems}
    </div>
    <div className="text-gray-700 text-lg mt-2">Total Sold Items</div>
  </div>

  {/* Total Unsold Items */}
  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center min-w-[250px] transition-all duration-200 hover:scale-105 hover:shadow-xl">
    <div className="text-5xl font-extrabold text-red-500">
      {data?.data?.totalNotSoldItems}
    </div>
    <div className="text-gray-700 text-lg mt-2">Total Unsold Items</div>
  </div>
</div>

  );
}

export default Statistics;
