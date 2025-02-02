import React from "react";
import Heading from "./Heading";
import Transactions from "./Tranaction";
import Statistics from "./Statistics";
import BarChat from "./BarChart";
import PieChart from "./PieChart";

function Section({tab,month,setMonth,search,setSearch,data,setData}) {
  return (
    <div className="w-screen h-[90vh] overflow-scroll p-0">
      <Heading tab={tab} month={month} setMonth={setMonth} search={search} setSearch={setSearch}/>
      {tab==1?<Transactions month={month} search={search} data={data} setData={setData}/>:''}
       {tab==2?<Statistics month={month} data={data} setData={setData}/>:''}
    {tab==3?<BarChat month={month} data={data} setData={setData}/>:''}
       {tab==4?<PieChart month={month} data={data} setData={setData}/>:''}
    </div>
  );
}

export default Section;