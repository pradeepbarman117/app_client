import Calendar from "../../common/calendar/Calendar";
import SearchBar from "../../common/search/SearchBar";
import TransactionTables from "../../common/transaction/TransactionTables";
import { useMasterTransaction } from "./useMasterTransaction";

const MasterTransaction = () => {
  const {
    isLoading,
    filteredTransaction,
    paginations,
    setRecieveDate,
    deepSearch,
    setDeepSearch,
    setSearchInput,
  } = useMasterTransaction();
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between mt-3 pb-4 gap-3">
        <Calendar setRecieveDate={setRecieveDate} />
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <SearchBar
            setSearchInput={setSearchInput}
            deepSearch={{ setDeepSearch, deepSearch }}
          />
        </div>
      </div>
      <TransactionTables
        filteredTransaction={filteredTransaction}
        paginations={paginations}
        isLoading={isLoading}
      />
    </>
  );
};

export default MasterTransaction;
