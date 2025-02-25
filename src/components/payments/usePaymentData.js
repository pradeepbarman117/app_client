import { useState, useEffect, useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useMasterRequestQuery } from "../../queries/finance/request/requestQuery";
import socketManager from "../../services/socket/socket";

export const usePaymentData = () => {
  const [searchInput, setSearchInput] = useState("");
  const [recieveDate, setRecieveDate] = useState({ start: "", end: "" });
  const [newlyAddedId, setNewlyAddedId] = useState(null);

  const queryClient = useQueryClient();
  const { data, isLoading } = useMasterRequestQuery();

  const filteredRequest = useMemo(() => {
    if (!data?.data) return [];
    console.log(data,'filteredRequestData')
    return data.data.filter((items) => {
      const requestId = items.requestId.toString().toLowerCase();
      const userId = items?.masterList?.userId?.toString().toLowerCase() || "";
      const search = searchInput.toLowerCase();
  
      const matchesSearch = requestId.includes(search) || userId.includes(search);
  
      if (!recieveDate.start || !recieveDate.end) {
        return matchesSearch;
      }
  
      const startDate = new Date(recieveDate.start);
      const endDate = new Date(recieveDate.end);
      endDate.setHours(23, 59, 59, 999); // Ensure the full end date is included
  
      const itemDate = new Date(items.createdAt);
  
      return (itemDate >= startDate && itemDate <= endDate) && matchesSearch;
    });
  }, [data, recieveDate.start, recieveDate.end, searchInput]);


  useEffect(() => {
    
    const handlePaymentAdded = (updatedPayment) => {
      console.log(updatedPayment,'updatedPayment');
      setNewlyAddedId(updatedPayment);
      setTimeout(() => setNewlyAddedId(null), 1000);
      queryClient.setQueryData(["request/master"], (oldData) => {
        if (!oldData) return { data: [updatedPayment] };
        const existingPaymentIndex = oldData.data.findIndex((master) => master.id === updatedPayment.id);
        if (existingPaymentIndex !== -1) {
          return {
            ...oldData,
            data: oldData.data.map((payment, index) =>
              index === existingPaymentIndex ? { ...payment, ...updatedPayment } : payment
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
    newlyAddedId
  };
};
