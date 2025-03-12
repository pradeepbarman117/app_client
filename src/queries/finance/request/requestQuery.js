import { useQuery } from "@tanstack/react-query";
import requestServices from "../../../services/finance/request/requestServices";
import Cookies from "js-cookie";

const fetchMasterRequest = async ({ page,requestId }) => {
  try {
    const token = Cookies.get("token");
    const response = await requestServices.getMasterREQ(token, page,requestId);
    return response.data; // Expecting { data: [], pagination: { currentPage, totalPages, totalItems } }
  } catch (err) {
    console.error(err, "error while fetching master request");
    throw new Error(err);
  }
};

export const useMasterRequestQuery = (page = 1,requestId = null) => {
  return useQuery({
    queryKey: ["request/master", page,requestId], // Include page in queryKey to trigger refetch
    queryFn: () => fetchMasterRequest({ page, requestId }),
  });
};