import { useState } from "react";
import MasterCalendar from "./filters/MasterCalendar";
import MasterSearch from "./filters/MasterSearch";
import { useMasterData } from "./useMasterData";
import Modal from "../common/modal/Modal";
import CreateMaster from "./CreateMaster";
import MasterTable from "./table/MasterTable";
import MasterPagination from "./table/MasterPagination";
import MasterSkeleton from "./MasterSkeleton";

const Master = () => {
  const {
    isLoading,
    filteredMaster,
    searchInput,
    setSearchInput,
    setRecieveDate,
    newlyAddedId,
  } = useMasterData();

  const [isOpen, setIsOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const toggleModal = () => setIsOpen((prev) => !prev);

  if (isLoading) return <MasterSkeleton />;
  console.log("Master");

  return (
    <>
      <div className="flex flex-wrap justify-between gap-3 py-4">
        <p className="text-[#121417] tracking-light text-[32px] font-bold leading-tight min-w-72">
          Master
        </p>
      </div>

      <div className="flex justify-between gap-3 align-center pb-2 pt-4">
        <h3 className="text-[#121417] text-lg font-bold leading-tight tracking-[-0.015em]">
          Masters List
        </h3>
        <button
          type="button"
          className="text-gray-900 bg-white hover:bg-[#F0F2F5] border border-gray-200 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-white dark:border-gray-700 dark:text-gray-900"
          onClick={toggleModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2 inline-block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 5v14m7-7H5"
            />
          </svg>
          Add Master
        </button>
      </div>

      <div className="flex justify-between mt-3 pb-4">
        <MasterCalendar setRecieveDate={setRecieveDate} />
        <MasterSearch
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setLoader={setLoader}
        />
      </div>

      <div className="@container">
        <MasterTable
          filteredMaster={filteredMaster}
          newMaster={newlyAddedId}
          loader={loader}
        />
        <MasterPagination />
      </div>

      {isOpen && (
        <Modal isOpen={isOpen} onClose={toggleModal} title="Are you sure ?">
          <CreateMaster />
        </Modal>
      )}
    </>
  );
};

export default Master;
