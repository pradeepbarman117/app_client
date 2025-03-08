import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import api from "../../api/baseApi";

const fetchTotalUser = async () => {
  try {
    const token = Cookies.get("token");
    const response = await api.get('/user/get/total',{
        headers:{
            'Authorization': `Bearer ${token}`,
        }
    });
    return response.data;
  } catch (err) {
    console.log(err, "Fetch User ERRR");
    throw new Error(err);
  }
};

export const useTotalUserQuery = () => {
  return useQuery({
    queryKey: ["user/total"],
    queryFn:fetchTotalUser,
    staleTime: 1000 * 60 * 10,
    retryDelay: 2500,
    retry: 2,
  });
};
