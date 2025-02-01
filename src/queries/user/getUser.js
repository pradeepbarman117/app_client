import { useQuery } from "@tanstack/react-query";
import userServices from "../../services/user/userServices";
import Cookies from "js-cookie";

const fetchUser = async (id) => {
  try {
    const token = Cookies.get("token");
    const response = await userServices.get(id,token);
    return response.data;
  } catch (err) {
    console.log(err, "Fetch User ERRR");
    throw new Error(err);
  }
};

export const useUserByMasterId = (id) => {
  return useQuery({
    queryKey: ["userByMaster", id],
    queryFn: () => fetchUser(id),
    staleTime: 1000 * 60 * 10,
    retryDelay: 2500,
    retry: 2,
  });
};
