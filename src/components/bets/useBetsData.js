import { useState, useEffect, useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import socketManager from "../../services/socket/socket"; // Adjust path as needed
import useDebounce from "../../hooks/useDebounce"; // Adjust path as needed
import { useBetListQuery } from "../../queries/bets/betsQueries";

export const useBetsData = () => {
  const [searchInput, setSearchInput] = useState("");
  const [receiveDate, setReceiveDate] = useState({ start: "", end: "" });
  const [newlyAddedId, setNewlyAddedId] = useState(null);
  const [filterSport, setFilterSport] = useState("all"); // Filter by sport type
  const [filterStatus, setFilterStatus] = useState("all"); // Filter by bet status
  const [currentPage, setCurrentPage] = useState(1);
  const [deepSearch, setDeepSearch] = useState(false);

  const queryClient = useQueryClient();
  const debouncedSearchInput = useDebounce(searchInput, 500);

  // Assuming you have a query hook for fetching bets
  const { data, isLoading } =  useBetListQuery(
    currentPage,
    deepSearch && debouncedSearchInput ? debouncedSearchInput : null
  );

  const paginations = {
    currentPage: data?.pagination?.currentPage || 1,
    totalPages: data?.pagination?.totalPages || 1,
    totalItems: data?.pagination?.totalItems || 0,
    setCurrentPage,
  };

  const filteredBets = useMemo(() => {
    if (!data?.data) return [];

    return data.data.filter((bet) => {
      const betId = bet.id.toString().toLowerCase();
      const matchTeams = `${bet.match.homeTeam} ${bet.match.awayTeam}`.toLowerCase();
      const search = searchInput.toLowerCase();

      // Filter by sport
      const matchesSport = filterSport === "all" 
        ? true 
        : bet.match.sport.toLowerCase() === filterSport.toLowerCase();

      // Filter by status
      const matchesStatus = filterStatus === "all" 
        ? true 
        : bet.status.toLowerCase() === filterStatus.toLowerCase();

      // Search handling
      const matchesSearch = deepSearch
        ? true // Backend handles search when deepSearch is true
        : betId.includes(search) || matchTeams.includes(search);

      const combinedMatch = matchesSport && matchesStatus && (search ? matchesSearch : true);

      // Date filtering
      if (!receiveDate.start || !receiveDate.end) {
        return combinedMatch;
      }

      const startDate = new Date(receiveDate.start);
      const endDate = new Date(receiveDate.end);
      endDate.setHours(23, 59, 59, 999);

      const betDate = new Date(bet.createdAt);

      return betDate >= startDate && betDate <= endDate && combinedMatch;
    });
  }, [
    data,
    receiveDate.start,
    receiveDate.end,
    searchInput,
    filterSport,
    filterStatus,
    deepSearch,
  ]);

//   useEffect(() => {
//     const handleBetUpdate = (updatedBet) => {
//       setNewlyAddedId(updatedBet.id);
//       setTimeout(() => setNewlyAddedId(null), 1000);

//       queryClient.setQueryData(
//         ["bets/list", currentPage, deepSearch && debouncedSearchInput ? debouncedSearchInput : null],
//         (oldData) => {
//           if (!oldData) return { data: [updatedBet], pagination: paginations };

//           const existingBetIndex = oldData.data.findIndex(
//             (bet) => bet.id === updatedBet.id
//           );

//           if (existingBetIndex !== -1) {
//             return {
//               ...oldData,
//               data: oldData.data.map((bet, index) =>
//                 index === existingBetIndex ? { ...bet, ...updatedBet } : bet
//               ),
//             };
//           }

//           return { ...oldData, data: [...oldData.data, updatedBet] };
//         }
//       );
//     };

//     socketManager.connect();
//     socketManager.io.on("betAdded", handleBetUpdate);
//     socketManager.io.on("betUpdated", handleBetUpdate);

//     return () => {
//       socketManager.io.off("betAdded", handleBetUpdate);
//       socketManager.io.off("betUpdated", handleBetUpdate);
//     };
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [queryClient, currentPage, deepSearch, debouncedSearchInput]);

  return {
    data,
    isLoading,
    filteredBets,
    searchInput,
    setSearchInput,
    setReceiveDate,
    receiveDate,
    newlyAddedId,
    setFilterSport,
    setFilterStatus,
    paginations,
    setDeepSearch,
    deepSearch,
  };
};