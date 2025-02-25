import { useState, useEffect, useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useMasterQuery } from "../../queries/masters/getMaster";
import socketManager from "../../services/socket/socket";

export const useMasterData = () => {
  const [searchInput, setSearchInput] = useState("");
  const [recieveDate, setRecieveDate] = useState({ start: "", end: "" });
  const [newlyAddedId, setNewlyAddedId] = useState(null);

  const queryClient = useQueryClient();
  const { data, isLoading } = useMasterQuery();

  const filteredMaster = useMemo(() => {

  if (!recieveDate.start || !recieveDate.end) {
    return data?.data.filter((items) => items.userId.toString().includes(searchInput.toLowerCase()));
  }

  const startDate = new Date(recieveDate.start);
  const endDate = new Date(recieveDate.end);

  return data?.data.filter((items) => {
    const itemDate = new Date(items.createdAt);
    return (itemDate >= startDate && itemDate < endDate) && items.userId.toString().includes(searchInput.toLowerCase());
  });
  
}, [data, recieveDate.start, recieveDate.end, searchInput]);
  
  
  useEffect(() => {
    const handleMasterAdded = (updatedMaster) => {
      setNewlyAddedId(updatedMaster);
      setTimeout(() => setNewlyAddedId(null), 1000);
      queryClient.setQueryData(["master/get"], (oldData) => {
        if (!oldData) return { data: [updatedMaster] };
        const existingMasterIndex = oldData.data.findIndex((master) => master.id === updatedMaster.id);
        if (existingMasterIndex !== -1) {
          return {
            ...oldData,
            data: oldData.data.map((master, index) =>
              index === existingMasterIndex ? { ...master, ...updatedMaster } : master
            ),
          };
        }
        return { ...oldData, data: [...oldData.data, updatedMaster] };
      });
    };

    socketManager.connect();
    socketManager.io.on("masterAdded", handleMasterAdded);

    return () => {
      socketManager.io.off("masterAdded", handleMasterAdded);
    };
  }, [queryClient]);

  return {
    data,
    isLoading,
    filteredMaster,
    searchInput,
    setSearchInput,
    setRecieveDate,
    recieveDate,
    newlyAddedId
  };
};
