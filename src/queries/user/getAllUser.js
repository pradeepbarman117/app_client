// import { useQuery } from "@tanstack/react-query";
// import userServices from "../../services/user/userServices";
// import Cookies from "js-cookie";

// const fetchUser = async ({ page, userId }) => {
//   console.log(userId,'userId');
//   try {
//     const token = Cookies.get("token");
//     const response = await userServices.getAll(token, page, userId);
//     return response.data;
//   } catch (err) {
//     console.log(err, "Fetch User ERRR");
//     throw new Error(err);
//   }
// };

// export const useUserQuery = (page = 1, userId = null) => {
//   // console.log(userId,'user');
//   return useQuery({
//     queryKey: ["getUser/all"],
//     queryFn: () => fetchUser({ page, userId }),
//     staleTime: 1000 * 60 * 10,
//     retryDelay: 2500,
//     retry: 2,
//   });
// };


import { useQuery } from "@tanstack/react-query";
import userServices from "../../services/user/userServices";
import Cookies from "js-cookie";

const fetchUser = async ({ page, userId }) => {
  try {
    const token = Cookies.get("token");
    const response = await userServices.getAll(token, page, userId);
    return response.data; // Return full response (includes success, data, pagination)
  } catch (err) {
    console.log(err, "Fetch User ERRR");
    throw new Error(err);
  }
};

export const useUserQuery = (page = 1, userId = null) => {
  return useQuery({
    queryKey: ["users", page, userId], // Dynamic key to refetch on page/userId change
    queryFn: () => fetchUser({ page, userId }),
    staleTime: 1000 * 60 * 10, // 10 minutes
    retryDelay: 2500,
    retry: 2,
  });
};