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

  return (
    <>
      <div className="sm:p-4">
        <div className="flex flex-col md:flex-row justify-between mt-3 pb-4 gap-3">
          <MasterCalendar setRecieveDate={setRecieveDate} />
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <MasterSearch
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              setLoader={setLoader}
            />
            <button
              type="button"
              className="text-gray-900 w-40 bg-white hover:bg-[#F0F2F5] border border-gray-200 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-white dark:border-gray-700 dark:text-gray-900"
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
        </div>

        <div className="">
          <MasterTable
            filteredMaster={filteredMaster}
            newMaster={newlyAddedId}
            loader={loader}
          />
          {/* <MasterPagination /> */}
        </div>
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
