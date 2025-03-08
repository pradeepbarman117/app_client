import { useState } from "react";
import Calendar from "../common/calendar/Calendar";
import PaymentSearch from "./search/PaymentSearch";
import PaymentTable from "./table/PaymentTable";
import { usePaymentData } from "./usePaymentData";
import AmountCard from "../common/amount-card/AmountCard";
import { useBalanceData } from "./useBalanceData";
import Pagination from "../common/pagination/Pagination";

const Payments = () => {
  const {
    filteredRequest,
    setSearchInput,
    setRecieveDate,
    searchInput,
    setFilterTag,
    paginations,
    setDeepSearch,
    deepSearch,
  } = usePaymentData();
  
  const { amountDetails } = useBalanceData();

  const [activeTab, setActiveTab] = useState(1);

  const tabsData = [
    {
      id: 1,
      name: "all",
    },
    {
      id: 2,
      name: "pending",
    },
    {
      id: 3,
      name: "approved",
    },
    {
      id: 4,
      name: "rejected",
    },
  ];

  const handleFilterTag = (id, name) => {
    setActiveTab(id);
    setFilterTag(name);
  };

  return (
    <>
      <div className="my-5">
        <AmountCard amountDetails={amountDetails} />
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-3 pb-4 gap-3">
        <Calendar setRecieveDate={setRecieveDate} />

        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div className="text-sm font-medium text-center border-b border-gray-200">
            <ul className="flex flex-wrap -mb-px">
              {tabsData.map((tab) => (
                <li
                  key={tab.id}
                  className={`me-2 ${
                    activeTab === tab.id
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500"
                  }`}
                  onClick={() => handleFilterTag(tab.id, tab.name)}
                >
                  <a
                    href="#"
                    className="inline-block p-4 capitalize border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
                  >
                    {tab.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <PaymentSearch
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            deepSearch={{setDeepSearch,deepSearch}}
          />
        </div>
      </div>
      <PaymentTable fileredData={filteredRequest} />
      <div className="my-5">
        <Pagination paginations={paginations} />
      </div>
    </>
  );
};


export default Payments;
