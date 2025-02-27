import { useState, useEffect, useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useUserQuery } from "../../queries/user/getAllUser";
import socketManager from "../../services/socket/socket";

export const useUserData = () => {
  const [searchInput, setSearchInput] = useState("");
  const [recieveDate, setRecieveDate] = useState({ start: "", end: "" });
  const [newlyAddedId, setNewlyAddedId] = useState(null);
  const [filterTag, setFilterTag] = useState('pending');
  const [amountDetails, setAmountDetails] = useState({
    total:'',
    approved:'',
    pending:'',
    rejected:'',
  });

  const queryClient = useQueryClient();
  const { data, isLoading } = useUserQuery();

  // Memoized filtering logic
  const filteredUserData = useMemo(() => {
    if (!data?.data) return [];

    return data.data.filter((items) => {
      const requestId = items.userId.toString().toLowerCase();
      const userId = items?.masterList?.userId?.toString().toLowerCase() || "";
      const search = searchInput.toLowerCase();
      
    //   const matchesFilter = items.status === filterTag; 
      const matchesSearch = requestId.includes(search) || userId.includes(search);
      const combinedMatch = (search ? matchesSearch : true);

      if (!recieveDate.start || !recieveDate.end) {
        return combinedMatch;
      }

      const startDate = new Date(recieveDate.start);
      const endDate = new Date(recieveDate.end);
      endDate.setHours(23, 59, 59, 999); // Full end date

      const itemDate = new Date(items.createdAt);

      return (itemDate >= startDate && itemDate <= endDate) && combinedMatch;
    });
  }, [data, recieveDate.start, recieveDate.end, searchInput]);

  // Effect to calculate amount details based on status
  useEffect(() => {
    if (!data?.data) return;
    
    const totals = data.data.reduce(
      (acc, item) => {
        // Assuming each item has an 'amount' field; adjust if the field name differs
        const amount = Number(item.amount) || 0; // Convert to number, default to 0 if undefined

        acc.total += amount;
        if (item.status === 'approved') acc.approved += amount;
        if (item.status === 'pending') acc.pending += amount;
        if (item.status === 'rejected') acc.rejected += amount;

        return acc;
      },
      { total: 0, approved: 0, pending: 0, rejected: 0 }
    );

    setAmountDetails(totals);
  }, [data]); // Runs whenever data changes



  useEffect(() => {
    const masterId = JSON.parse(localStorage.getItem("user"));

    if (!masterId) {
      console.error("No masterId found in localStorage");
      return;
    }

    const handlePaymentAdded = (updatedPayment) => {
      console.log(updatedPayment,'updatedPayment')
      setNewlyAddedId(updatedPayment);
      setTimeout(() => setNewlyAddedId(null), 1000);
      queryClient.setQueryData(["getUser/all"], (oldData) => {
        if (!oldData) return { data: [updatedPayment] };
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
      });
    };

    socketManager.connect();

    socketManager.io.on("notify:admin:user:added", handlePaymentAdded);
    socketManager.io.on("notify:admin:user:updated", handlePaymentAdded);

    // Cleanup
    return () => {
      socketManager.disconnect(); 
    };
  }, [queryClient]);

  return {
    data,
    isLoading,
    filteredUserData,
    searchInput,
    setSearchInput,
    setRecieveDate,
    recieveDate,
    newlyAddedId,
    setFilterTag,
    amountDetails
  };
};