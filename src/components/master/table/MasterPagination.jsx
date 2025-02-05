import { useState } from "react";

const MasterPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Modify based on your data

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <ul className="inline-flex -space-x-px text-sm mt-3">
      <li>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
          disabled={currentPage === 1}
        >
          Previous
        </button>
      </li>

      {/* Loop through the pages */}
      {[...Array(totalPages).keys()].map((i) => (
        <li key={i + 1}>
          <button
            onClick={() => handlePageChange(i + 1)}
            className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
              currentPage === i + 1
                ? "text-blue-600 bg-blue-50 border-gray-300"
                : ""
            }`}
          >
            {i + 1}
          </button>
        </li>
      ))}

      <li>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default MasterPagination;
