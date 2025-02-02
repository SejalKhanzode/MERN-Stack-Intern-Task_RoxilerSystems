import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

function SearchBar({ setSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearch(inputValue);
    }
  };

  return (
    <div className="relative w-[300px] h-[40px]">
      <input
        type="text"
        className="w-full h-full px-4 pr-10 border border-gray-300 rounded-full text-[16px] outline-none shadow-md transition duration-300 focus:border-blue-500"
        placeholder="Search..."
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <IoSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[18px] text-gray-500" />
    </div>
  );
}

export default SearchBar;
