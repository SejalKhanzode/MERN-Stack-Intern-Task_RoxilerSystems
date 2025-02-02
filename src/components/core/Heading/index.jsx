import React from "react";
import SearchBar from "./SearchBar";
import MonthSelector from "./MonthSelector";

function Heading({tab,month,setMonth,setSearch}) {
  return (
   
    <div className="flex justify-between items-center text-[30px] px-5 h-[8vh]">
      {tab===1?<h2>Transactions</h2>:''}
      {tab===2?<h2>Statistics</h2>:''}
      {tab===3?<h2>Bar Chart Stats</h2>:''}
      {tab===4?<h2>Pie Chart Stats</h2>:''}
       {tab===1?<SearchBar setSearch={setSearch} />:''}
      <MonthSelector month={month} setMonth={setMonth}/>
    </div>
  );
}

export default Heading;