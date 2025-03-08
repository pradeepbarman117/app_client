import { memo } from "react";
import UserCardDetails from "./card/UserCardDetails";
import UserCalendar from "./filters/UserCalendar";
import UserSearch from "./filters/UserSearch";
import UserTable from "./UserTable";
import { useUserData } from "./useUserData";
import Pagination from "../common/pagination/Pagination";

const MemoizedUser = memo(UserCardDetails);

const User = () => {
  const {
    filteredUserData,
    isLoading,
    setSearchInput,
    setRecieveDate,
    newlyAddedId,
    setDeepSearch,
    deepSearch,
    paginations
  } = useUserData();

  return (
    <>
      <MemoizedUser />
      <div className="pe-4 flex justify-between my-4">
        <UserCalendar setRecieveDate={setRecieveDate} />
        <UserSearch
          setSearchTerm={setSearchInput}
          deepSearch={{ setDeepSearch, deepSearch }}
        />
      </div>
      <UserTable
        filteredData={filteredUserData}
        isLoading={isLoading}
        newUser={newlyAddedId}
      />
      <div className="my-5">
        <Pagination paginations={paginations} />
      </div>
    </>
  );
};

export default User;
