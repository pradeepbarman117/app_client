import { useQuery } from "@tanstack/react-query";
import { masterServices } from "../../services/master/masterServices";
import Cookies from "js-cookie";

const fetchMasters = async () => {
  try{
    const token = Cookies.get("token");
    const response = await masterServices.get(token);
    console.log('api called');
    return response.data
  }catch(err){
    console.log('errr',err)
    throw new Error(err);
  }
  // if (!response.ok) {
  //   throw new Error("Network response was not ok");
  // }
  // return response.json();
};

export const useMasterQuery = () => {
  return useQuery({
    queryKey:['master/get'],
    queryFn: fetchMasters,
    staleTime:1000 * 60 * 10,
  });
};
