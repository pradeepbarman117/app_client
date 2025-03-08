import { useState, useEffect, useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useUserQuery } from "../../queries/user/getAllUser";
import socketManager from "../../services/socket/socket";
import useDebounce from "../../hooks/useDebounce";

export const useUserData = () => {
  const [searchInput, setSearchInput] = useState("");
  const [recieveDate, setRecieveDate] = useState({ start: "", end: "" });
  const [newlyAddedId, setNewlyAddedId] = useState(null);
  const [deepSearch, setDeepSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const queryClient = useQueryClient();
  const debouncedSearchInput = useDebounce(searchInput, 500);

  const { data, isLoading } = useUserQuery(
    currentPage,
    deepSearch && debouncedSearchInput ? debouncedSearchInput : null
  );

  // Pagination data from backend
  const paginations = {
    currentPage: data?.pagination?.currentPage || 1,
    totalPages: data?.pagination?.totalPages || 1,
    totalItems: data?.pagination?.totalItems || 0,
    setCurrentPage,
  };

  // Memoized filtering logic
  const filteredUserData = useMemo(() => {
    if (!data?.data) return [];

    return data.data.filter((items) => {
      const userId = items.userId.toString().toLowerCase();
      const search = searchInput.toLowerCase();

      const matchesSearch = deepSearch
        ? true // Backend handles userId search
        : userId.includes(search); // Client-side search when deepSearch is false
      const combinedMatch = search ? matchesSearch : true;

      if (!recieveDate.start || !recieveDate.end) {
        return combinedMatch;
      }

      const startDate = new Date(recieveDate.start);
      const endDate = new Date(recieveDate.end);
      endDate.setHours(23, 59, 59, 999);

      const itemDate = new Date(items.createdAt);

      return itemDate >= startDate && itemDate <= endDate && combinedMatch;
    });
  }, [data, recieveDate.start, recieveDate.end, searchInput, deepSearch]);

  useEffect(() => {
    const masterId = JSON.parse(localStorage.getItem("user"));

    if (!masterId) {
      console.error("No masterId found in localStorage");
      return;
    }

    const handlePaymentAdded = (updatedUser) => {
      setNewlyAddedId(updatedUser);
      setTimeout(() => setNewlyAddedId(null), 1000);
      queryClient.setQueryData(
        ["users", currentPage, deepSearch && debouncedSearchInput ? debouncedSearchInput : null],
        (oldData) => {
          if (!oldData) return { data: [updatedUser], pagination: paginations };
          const existingUserIndex = oldData.data.findIndex(
            (user) => user.id === updatedUser.id
          );
          if (existingUserIndex !== -1) {
            return {
              ...oldData,
              data: oldData.data.map((user, index) =>
                index === existingUserIndex ? { ...user, ...updatedUser } : user
              ),
            };
          }
          return { ...oldData, data: [...oldData.data, updatedUser] };
        }
      );
    };

    socketManager.connect();
    socketManager.io.on("notify:admin:user:added", handlePaymentAdded);
    socketManager.io.on("notify:admin:user:updated", handlePaymentAdded);

    return () => {
      socketManager.io.off("notify:admin:user:added", handlePaymentAdded);
      socketManager.io.off("notify:admin:user:updated", handlePaymentAdded);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryClient, currentPage, deepSearch, debouncedSearchInput]);

  return {
    data,
    isLoading,
    filteredUserData,
    searchInput,
    setSearchInput,
    setRecieveDate,
    recieveDate,
    newlyAddedId,
    setDeepSearch,
    deepSearch,
    paginations,
  };
};