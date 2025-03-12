
import { useState, useMemo } from "react";
import useDebounce from "../../../hooks/useDebounce";
import { useMasterTransactionQueryByAdmin } from "../../../queries/finance/transaction/transactionQuery";
import { useParams } from "react-router-dom";


export const useMasterTransaction = () => {
  const [searchInput, setSearchInput] = useState("");
  const [recieveDate, setRecieveDate] = useState({ start: "", end: "" });
  const [filterTag, setFilterTag] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [deepSearch, setDeepSearch] = useState(false);
  const { id } = useParams();
  const debouncedSearchInput = useDebounce(searchInput,500);

  const { data, isLoading } = useMasterTransactionQueryByAdmin(
    currentPage,
    deepSearch && debouncedSearchInput ? debouncedSearchInput : null, // Pass requestId only when deepSearch is true
    id
  );

  const paginations = {
    currentPage: data?.pagination?.currentPage || 1,
    totalPages: data?.pagination?.totalPages || 1,
    totalItems: data?.pagination?.totalItems || 0,
    setCurrentPage,
  };

  const filteredTransaction = useMemo(() => {
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

  return {
    data,
    isLoading,
    filteredTransaction,
    searchInput,
    setSearchInput,
    setRecieveDate,
    recieveDate,
    setFilterTag,
    paginations,
    setDeepSearch,
    deepSearch,
  };
};