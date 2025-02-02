import React from "react";

function MonthSelector({month,setMonth}) {
  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };
  return (
    <div className="flex justify-center items-center p-2">
      <select value={month} onChange={handleMonthChange} className="w-[200px] h-[40px] p-1 bg-white shadow-lg border-none text-[20px]">
      <option value="1">January</option>
      <option value="2">February</option>
      <option value="3">March</option>
      <option value="4">April</option>
      <option value="5">May</option>
      <option value="6">June</option>
      <option value="7">July</option>
      <option value="8">August</option>
      <option value="9">September</option>
      <option value="10">October</option>
      <option value="11">November</option>
      <option value="12">December</option>
    </select>
    </div>
  );
}

export default MonthSelector;