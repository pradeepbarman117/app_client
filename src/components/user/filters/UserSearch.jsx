import PropTypes from "prop-types";
import { useCallback } from "react";

const UserSearch = ({ setSearchTerm, deepSearch }) => {

  const handleSearch = useCallback(
    (e) => {
      setSearchTerm(e.target.value);
    },
    [setSearchTerm]
  );

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <div className="flex">
      <button
        type="button"
        className={`
          py-2.5 px-5 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border focus:z-10 focus:ring-4 focus:ring-gray-100
          ${deepSearch?.deepSearch && "bg-indigo-400 text-white"}
        `}
        onClick={() => deepSearch?.setDeepSearch(!deepSearch?.deepSearch)}
      >
        Deep Search
      </button>
      <form className="max-w-md" onSubmit={handleSubmit}>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search By Name"
            onChange={handleSearch}
          />
        </div>
      </form>
    </div>
  );
};

UserSearch.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
  deepSearch: PropTypes.object,
};

export default UserSearch;
