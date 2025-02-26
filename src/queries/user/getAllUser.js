import { useQuery } from "@tanstack/react-query";
import userServices from "../../services/user/userServices";
import Cookies from "js-cookie";

const fetchUser = async () => {
  try {
    const token = Cookies.get("token");
    const response = await userServices.getAll(token);
    return response.data;
  } catch (err) {
    console.log(err, "Fetch User ERRR");
    throw new Error(err);
  }
};

export const useUserQuery = () => {
  return useQuery({
    queryKey: ["getUser/all"],
    queryFn: () => fetchUser(),
    staleTime: 1000 * 60 * 10,
    retryDelay: 2500,
    retry: 2,
  });
};
