import { useQuery } from "@tanstack/react-query";
import { masterServices } from "../../services/master/masterServices";
import Cookies from "js-cookie";

const getMasterById = async (id) => {
  try{
    const token = Cookies.get("token");
    const response = await masterServices.getById(id,token);
    console.log('getMasterById api called');
    return response.data
  }catch(err){
    console.log('errr',err)
    throw new Error(err);
  }
};

// Hook to fetch master by ID
export const useMasterByIdQuery = (id) => {
  return useQuery({
    queryKey: ['master', 'byId', id],
    queryFn: ()=> getMasterById(id),
    staleTime: 1000 * 60 * 10,
    retryDelay:2500,
    retry:2,
  });
};
