import { useCallback, useEffect, useState } from "react";
import Modal from "../common/modal/Modal";
import CreateMaster from "./CreateMaster";
import dateFormator from "../../hooks/dateFormator";
import { allowOnly } from "../../utils/validation/allowOnly";
import { useQueryClient } from "@tanstack/react-query";
import MasterSkeleton from "./MasterSkeleton";
import socketManager from "../../services/socket/socket";
import { useMasterQuery } from "../../queries/masters/getMaster";
import { NavLink } from "react-router-dom";

const Master = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [newlyAddedId, setNewlyAddedId] = useState(null);

  // Connect to socket
  socketManager.connect();

  const toggleModal = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const { data, isLoading } = useMasterQuery();

  const queryClient = useQueryClient();

  useEffect(() => {
    const handleMasterAdded = (newMaster) => {
      // Update the existing master query data
      setNewlyAddedId(newMaster)
      queryClient.setQueryData(["master/get"], (oldData) => {
        if (!oldData) return { data: [newMaster] };
        return {
          ...oldData,
          data: [...oldData.data, newMaster],
        };
      });
    };

    socketManager.io.on("masterAdded", handleMasterAdded);

    return () => {
      socketManager.io.off("masterAdded", handleMasterAdded);
    };
  }, [queryClient]);

  if (isLoading) {
    return <MasterSkeleton />;
  }

  console.log('Master')

  return (
    <>
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-[#121417] tracking-light text-[32px] font-bold leading-tight min-w-72">
          Master
        </p>
      </div>

      <div className="flex justify-between gap-3 align-center px-4 pb-2 pt-4">
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

      <div className="px-4 flex justify-between mt-3">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="me-2">
            <a
              className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              href="#"
            >
              <svg
                aria-hidden="true"
                className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              Profile
            </a>
          </li>
          <li className="me-2">
            <a
              aria-current="page"
              className="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
              href="#!"
            >
              <svg
                aria-hidden="true"
                className="w-4 h-4 me-2 text-blue-600 dark:text-blue-500"
                fill="currentColor"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
              </svg>
              Dashboard
            </a>
          </li>
          <li className="me-2">
            <a
              className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              href="#"
            >
              <svg
                aria-hidden="true"
                className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z" />
              </svg>
              Settings
            </a>
          </li>
          <li className="me-2">
            <a
              className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              href="#"
            >
              <svg
                aria-hidden="true"
                className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                fill="currentColor"
                viewBox="0 0 18 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
              </svg>
              Contacts
            </a>
          </li>
          <li>
            <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
              Disabled
            </a>
          </li>
        </ul>
        <form className="max-w-md">
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
              required=""
              onKeyDown={allowOnly.char}
            />
          </div>
        </form>
      </div>

      <div className="px-4 py-3 @container">
        <div className="flex overflow-hidden rounded-xl border border-[#DBE0E5]">
          <table className="flex-1">
            <thead>
              <tr className="">
                <th className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-120 px-4 py-3 text-left text-[#121417] w-[400px] text-sm font-medium leading-normal">
                  Date
                </th>
                <th className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-240 px-4 py-3 text-left text-[#121417] w-[400px] text-sm font-medium leading-normal">
                  User Id
                </th>
                <th className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-360 px-4 py-3  text-[#121417] w-60 text-sm font-medium leading-normal text-left">
                  Name
                </th>
                <th className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-480 px-4 py-3  text-[#121417] w-[400px] text-sm font-medium leading-normal text-center">
                  Share (%)
                </th>
                <th className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-480 px-4 py-3  text-[#121417] w-[400px] text-sm font-medium leading-normal text-center">
                  Creator
                </th>
                <th className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-600 px-4 py-3  text-[#121417] w-60 text-sm font-medium leading-normal text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.data?.map((items) => {
                  return (
                    <tr
                      key={items.id}
                      className={`border-t hover:bg-[#12141705] cursor-pointer border-t-[#DBE0E5] ${
                        newlyAddedId === items ? "flash" : ""
                      }`}
                    >
                      <td className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-120 h-[72px] px-4 py-2 w-[400px] text-[#61788A] text-sm font-normal leading-normal">
                        {dateFormator(items.createdAt)}
                      </td>
                      <td className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-240 h-[72px] px-4 py-2 w-[400px] text-[#121417] text-sm font-normal leading-normal">
                        #{items.id}
                      </td>
                      <td className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal capitalize text-[#61788A]">
                        {items.name}
                      </td>
                      <td className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-480 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal text-center">
                        {items.percent} %
                      </td>
                      <td className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-480 h-[72px] px-4 py-2 w-[400px] text-[#61788A] text-sm font-normal leading-normal text-center capitalize">
                        {items && items.admin.name}
                      </td>
                      <td className="table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-600 h-[72px] px-4 w-60 text-sm font-normal leading-normal">
                        <NavLink to={`/masters/${items.id}`} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#F0F2F5] text-[#121417] text-sm font-medium leading-normal w-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                          View
                        </NavLink>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n                          @container(max-width:120px){.table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-120{display: none;}}\n                @container(max-width:240px){.table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-240{display: none;}}\n                @container(max-width:360px){.table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-360{display: none;}}\n                @container(max-width:480px){.table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-480{display: none;}}\n                @container(max-width:600px){.table-d1275b0f-2fc9-489a-a24d-bfd0a675ef81-column-600{display: none;}}\n              ",
          }}
        />
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
