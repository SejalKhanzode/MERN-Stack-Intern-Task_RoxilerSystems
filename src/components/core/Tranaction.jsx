import React, { useEffect, useState } from "react";
import axios from "axios";

function Transactions({ month, search }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // `http://localhost:5000/api/transaction?search=${search}&month=${month}&page=${page}`
          `https://mern-stack-vhs0.onrender.com/api/transaction?search=${search}&month=${month}&page=${page}`
        );
        setData(response.data.data);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [month, page, search]);

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className="w-screen h-[82vh] box-border pb-5 overflow-auto">
      {/* Pagination Controls */}
      <div className="flex justify-end items-center mb-4">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="px-4 py-2 m-1 bg-blue-500 text-white rounded-l-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Prev
        </button>
        <div className="text-lg px-4 py-2 m-1 border border-black">{page}</div>
        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className="px-4 py-2 m-1 bg-blue-500 text-white rounded-r-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>

      {/* Transactions Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2 text-left">ID</th>
            <th className="border border-gray-300 p-2 text-left">Title</th>
            <th className="border border-gray-300 p-2 text-left">Price</th>
            <th className="border border-gray-300 p-2 text-left">Description</th>
            <th className="border border-gray-300 p-2 text-left">Category</th>
            <th className="border border-gray-300 p-2 text-left">Sold</th>
            <th className="border border-gray-300 p-2 text-left">Date of Sale</th>
            <th className="border border-gray-300 p-2 text-left">Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id} className="odd:bg-white even:bg-gray-100">
              <td className="border border-gray-300 p-2">{item.id}</td>
              <td className="border border-gray-300 p-2">{item.title}</td>
              <td className="border border-gray-300 p-2">{item.price.toFixed(2)}</td>
              <td className="border border-gray-300 p-2">{item.description}</td>
              <td className="border border-gray-300 p-2">{item.category}</td>
              <td className="border border-gray-300 p-2">{item.sold ? "Yes" : "No"}</td>
              <td className="border border-gray-300 p-2">
                {new Date(item.dateOfSale).toLocaleDateString()}
              </td>
              <td className="border border-gray-300 p-2">
                <img src={item.image} alt={item.title} className="w-12 h-auto" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
