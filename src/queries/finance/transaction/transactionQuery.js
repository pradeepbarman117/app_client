import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import api from "../../../api/baseApi";
import transactionServices from "../../../services/finance/transaction/transactionServices";

//////////////////////////// ADMIN QURIES //////////////////////////////

const fetctTransactionList = async ({ page, transactionId }) => {
  try {
    const token = Cookies.get("token");
    const response = await api.get("/finance/transaction/get/list", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page,
        transactionId,
      },
    });
    return response.data; // Expecting { data: [], pagination: { currentPage, totalPages, totalItems } }
  } catch (err) {
    console.error(err, "error while fetching master request");
    throw new Error(err);
  }
};

export const useTransactionListQuery = (page = 1, transactionId = null) => {
  return useQuery({
    queryKey: ["transaction/list", page, transactionId], // Include page in queryKey to trigger refetch
    queryFn: () => fetctTransactionList({ page, transactionId }),
    staleTime: 5 * 60 * 1000,
  });
};

//////// MASTER TRANSACTION BY ADMIN ///////
const fetchMasterTransactionByAdmin = async ({ page, transactionId, id }) => {
  try {
    const token = Cookies.get("token");
    const response = await transactionServices.getMasterTransaction(
      token,
      page,
      transactionId,
      id
    );
    return response.data;
  } catch (err) {
    console.error(err, "error while fetching master request");
    throw new Error(err);
  }
};

export const useMasterTransactionQueryByAdmin = (
  page = 1,
  transactionId = null,
  id
) => {
  return useQuery({
    queryKey: ["transaction/master/list", page, transactionId], // Include page in queryKey to trigger refetch
    queryFn: () => fetchMasterTransactionByAdmin({ page, transactionId, id }),
    staleTime: 5 * 60 * 1000,
  });
};
