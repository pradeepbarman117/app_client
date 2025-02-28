import { useState, useEffect, useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useMasterRequestQuery } from "../../queries/finance/request/requestQuery";
import socketManager from "../../services/socket/socket";

export const usePaymentData = () => {
  const [searchInput, setSearchInput] = useState("");
  const [recieveDate, setRecieveDate] = useState({ start: "", end: "" });
  const [newlyAddedId, setNewlyAddedId] = useState(null);
  const [filterTag, setFilterTag] = useState("pending");
  

  const queryClient = useQueryClient();
  const { data, isLoading } = useMasterRequestQuery();

  // Memoized filtering logic
  const filteredRequest = useMemo(() => {
    if (!data?.data) return [];

    return data.data.filter((items) => {
      const requestId = items.requestId.toString().toLowerCase();
      const userId = items?.masterList?.userId?.toString().toLowerCase() || "";
      const search = searchInput.toLowerCase();

      const matchesFilter = items.status === filterTag;
      const matchesSearch =
        requestId.includes(search) || userId.includes(search);
      const combinedMatch = matchesFilter && (search ? matchesSearch : true);

      if (!recieveDate.start || !recieveDate.end) {
        return combinedMatch;
      }

      const startDate = new Date(recieveDate.start);
      const endDate = new Date(recieveDate.end);
      endDate.setHours(23, 59, 59, 999); // Full end date

      const itemDate = new Date(items.createdAt);

      return itemDate >= startDate && itemDate <= endDate && combinedMatch;
    });
  }, [data, recieveDate.start, recieveDate.end, searchInput, filterTag]);

  useEffect(() => {
    const handlePaymentAdded = (updatedPayment) => {
      setNewlyAddedId(updatedPayment);
      setTimeout(() => setNewlyAddedId(null), 1000);
      queryClient.setQueryData(["request/master"], (oldData) => {
        if (!oldData) return { data: [updatedPayment] };
        const existingPaymentIndex = oldData.data.findIndex(
          (master) => master.id === updatedPayment.id
        );
        if (existingPaymentIndex !== -1) {
          return {
            ...oldData,
            data: oldData.data.map((payment, index) =>
              index === existingPaymentIndex
                ? { ...payment, ...updatedPayment }
                : payment
            ),
          };
        }
        return { ...oldData, data: [...oldData.data, updatedPayment] };
      });
    };

    socketManager.connect();
    socketManager.io.on("adminMasterRequestAdded", handlePaymentAdded);
    socketManager.io.on("adminMasterRequestUpdated", handlePaymentAdded);

    return () => {
      socketManager.io.off("adminMasterRequestAdded", handlePaymentAdded);
      socketManager.io.off("adminMasterRequestUpdated", handlePaymentAdded);
    };
  }, [queryClient]);

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
  };
};
