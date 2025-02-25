import { Wallet } from "lucide-react";
import PropTypes from "prop-types";
import { useAdminBalance } from "../../../queries/admin/adminQuery";
import currencyFormator from "../../../utility/currencyFormator";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import socketManager from "../../../services/socket/socket";

const Headers = ({ setIsOpen, isOpen }) => {
  
  const { data } = useAdminBalance();
  const queryClient = useQueryClient();
  // adminBalanceUpdate

  // useEffect(() => {
  //   const adminId = JSON.parse(localStorage.getItem('user'));
  //   socketManager.connect();
  //   socketManager.io.emit("register", adminId);
  //   socketManager.io.on('adminBalanceUpdate', (adminBalance) => {
      
  //   });
  // }, [queryClient]);


  useEffect(() => {
    const adminId = JSON.parse(localStorage.getItem('user'));
    socketManager.connect();
    socketManager.io.emit("register", adminId);
    
    socketManager.io.on('adminBalanceUpdate', (adminBalance) => {
      queryClient.setQueryData(['admin/balance'], (oldData) => {
        if (!oldData?.data) {
          // If there's no existing data, create a minimal structure
          return { data: { balance: adminBalance } };
        }
        // Merge the new balance into the existing data.data object
        return {
          ...oldData,
          data: {
            ...oldData.data,
            balance: adminBalance // e.g., 3000.50
          }
        };
      });
    });
  
    // Cleanup socket listeners on unmount
    return () => {
      socketManager.io.off('adminBalanceUpdate');
    };
  }, [queryClient]);


  return (
    <header className="fixed top-0 w-full bg-white z-30 shadow">
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center max-w-screen-2xl mx-auto px-4">
          <a href="#" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
          </a>
          <div className="flex justify-end lg:order-2">
            <div className="flex items-center bg-[#F0F2F5] rounded px-3 py-2 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user w-5 h-5 text-[#121417] mr-1"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx={12} cy={7} r={4} />
              </svg>
              <span className="font-medium glow-text text-[#121417]">
                {data?.data.name}
              </span>
            </div>

            <div className="flex items-center bg-gray-800 rounded px-3 py-2">
              <Wallet className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="font-medium glow-text text-yellow-500">
                {data && currencyFormator(parseInt(data?.data.balance))} INR
              </span>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
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
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

Headers.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Headers;
