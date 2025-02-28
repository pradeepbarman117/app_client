import UserCardDetails from "./card/UserCardDetails";
import UserCalendar from "./filters/UserCalendar";
import UserSearch from "./filters/UserSearch";
import UserTable from "./UserTable";
import { useUserData } from "./useUserData";

const User = () => {

  const { filteredUserData, isLoading, setSearchInput,setRecieveDate, newlyAddedId } = useUserData();

  return (
    <>
      <UserCardDetails/>
      <div className="pe-4 flex justify-between my-4">
        <UserCalendar setRecieveDate={setRecieveDate} />
        <UserSearch setSearchTerm={setSearchInput} />
      </div>
      <UserTable filteredData={filteredUserData} isLoading={isLoading} newUser={newlyAddedId} />
    </>
  );
};

export default User;
