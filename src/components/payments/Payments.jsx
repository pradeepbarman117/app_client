import { useState } from "react";
import Calendar from "../common/calendar/Calendar";
import PaymentSearch from "./search/PaymentSearch";
import PaymentTable from "./table/PaymentTable";
import { usePaymentData } from "./usePaymentData";
import AmountCard from "../common/amount-card/AmountCard";

const Payments = () => {
  const {
    filteredRequest,
    setSearchInput,
    setRecieveDate,
    searchInput,
    setFilterTag,
    amountDetails,
  } = usePaymentData();

  const [activeTab, setActiveTab] = useState(1);
  const tabsData = [
    {
      id: 1,
      name: "pending",
    },
    {
      id: 2,
      name: "approved",
    },
    {
      id: 3,
      name: "rejected",
    },
  ];

  const handleFilterTag = (id, name) => {
    setActiveTab(id);
    setFilterTag(name);
  };

  return (
    <>
      <div className="mt-3">
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
          />
        </div>
      </div>
      <PaymentTable fileredData={filteredRequest} />
    </>
  );
};

export default Payments;
