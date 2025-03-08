
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import api from "../../../api/baseApi";

const fetctTransactionList = async ({ page,transactionId }) => {
  try {
    const token = Cookies.get("token");
    const response = await api.get('/finance/transaction/get/list',{
        headers:{
            'Authorization': `Bearer ${token}`,
        },
        params:{
            page,
            transactionId,
        }
    });
    return response.data; // Expecting { data: [], pagination: { currentPage, totalPages, totalItems } }
  } catch (err) {
    console.error(err, "error while fetching master request");
    throw new Error(err);
  }
};

export const useTransactionListQuery = (page = 1,transactionId = null) => {
  return useQuery({
    queryKey: ["transaction/list", page,transactionId], // Include page in queryKey to trigger refetch
    queryFn: () => fetctTransactionList({ page, transactionId }),
  });
};