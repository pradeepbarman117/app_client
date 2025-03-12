import Calendar from "../common/calendar/Calendar";
import Pagination from "../common/pagination/Pagination";
import SearchBar from "../common/search/SearchBar";
import BetsTable from "./table/BetsTable";
import { useBetsData } from "./useBetsData";

const OddsList = () => {
  const {
    filteredBets,
    paginations,
    setRecieveDate,
    setSearchInput,
    deepSearch,
    setDeepSearch,
  } = useBetsData();

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 my-3">
        <h3 className="text-slate-800 text-xl font-bold leading-tight">
          All Bets
        </h3>
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-2 pb-4 gap-3">
        <Calendar setRecieveDate={setRecieveDate} />
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <SearchBar
            setSearchInput={setSearchInput}
            deepSearch={{ setDeepSearch, deepSearch }}
          />
        </div>
      </div>
      <BetsTable filteredBets={filteredBets} />
      <div className="my-3">
        <Pagination paginations={paginations} />
      </div>
    </>
  );
};

export default OddsList;
