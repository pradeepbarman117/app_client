import { useState, useEffect, useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useMasterRequestQuery } from "../../queries/finance/request/requestQuery";
import socketManager from "../../services/socket/socket";
import useDebounce from "../../hooks/useDebounce";

export const usePaymentData = () => {
  const [searchInput, setSearchInput] = useState("");
  const [recieveDate, setRecieveDate] = useState({ start: "", end: "" });
  const [newlyAddedId, setNewlyAddedId] = useState(null);
  const [filterTag, setFilterTag] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [deepSearch, setDeepSearch] = useState(false);

  const queryClient = useQueryClient();

  const debouncedSearchInput = useDebounce(searchInput,500);

  const { data, isLoading } = useMasterRequestQuery(
    currentPage,
    deepSearch && debouncedSearchInput ? debouncedSearchInput : null // Pass requestId only when deepSearch is true
  );

  const paginations = {
    currentPage: data?.pagination?.currentPage || 1,
    totalPages: data?.pagination?.totalPages || 1,
    totalItems: data?.pagination?.totalItems || 0,
    setCurrentPage,
  };

  const filteredRequest = useMemo(() => {
    if (!data?.data) return [];

    return data.data.filter((items) => {
      const requestId = items.requestId.toString().toLowerCase();
      const userId = items?.masterList?.userId?.toString().toLowerCase() || "";
      const search = searchInput.toLowerCase();

      const matchesFilter = filterTag === "all" ? true : items.status === filterTag;
      const matchesSearch = deepSearch
        ? true // Backend handles requestId search
        : requestId.includes(search) || userId.includes(search); // Client-side search when deepSearch is false
      const combinedMatch = matchesFilter && (search ? matchesSearch : true);

      if (!recieveDate.start || !recieveDate.end) {
        return combinedMatch;
      }

      const startDate = new Date(recieveDate.start);
      const endDate = new Date(recieveDate.end);
      endDate.setHours(23, 59, 59, 999);

      const itemDate = new Date(items.createdAt);

      return itemDate >= startDate && itemDate <= endDate && combinedMatch;
    });
  }, [data, recieveDate.start, recieveDate.end, searchInput, filterTag, deepSearch]);

  useEffect(() => {
    const handlePaymentAdded = (updatedPayment) => {
      setNewlyAddedId(updatedPayment);
      setTimeout(() => setNewlyAddedId(null), 1000);
      queryClient.setQueryData(
        ["request/master", currentPage, deepSearch && searchInput ? searchInput : null],
        (oldData) => {
          if (!oldData) return { data: [updatedPayment], pagination: paginations };
          const existingPaymentIndex = oldData.data.findIndex(
            (master) => master.id === updatedPayment.id
          );
          if (existingPaymentIndex !== -1) {
            return {
              ...oldData,
              data: oldData.data.map((payment, index) =>
                index === existingPaymentIndex ? { ...payment, ...updatedPayment } : payment
              ),
            };
          }
          return { ...oldData, data: [...oldData.data, updatedPayment] };
        }
      );
    };

    socketManager.connect();
    socketManager.io.on("adminMasterRequestAdded", handlePaymentAdded);
    socketManager.io.on("adminMasterRequestUpdated", handlePaymentAdded);

    return () => {
      socketManager.io.off("adminMasterRequestAdded", handlePaymentAdded);
      socketManager.io.off("adminMasterRequestUpdated", handlePaymentAdded);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryClient, currentPage, deepSearch, searchInput]);

  return {
    data,
    isLoading,
    filteredRequest,
    searchInput,
    setSearchInput,
    setRecieveDate,
    recieveDate,
    newlyAddedId,
    setFilterTag,
    paginations,
    setDeepSearch,
    deepSearch,
  };
};