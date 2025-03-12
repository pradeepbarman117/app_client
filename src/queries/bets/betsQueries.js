import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { oddServices } from "../../services/odds/oddServices";

const fetchBetsList = async ({page,betId}) => {
  try{
    const token = Cookies.get("token");
    const response = await oddServices.getBets(token,page,betId);
    return response.data
  }catch(err){
    console.log('errr',err)
    throw new Error(err);
  }
};

export const useBetListQuery = (page=1,betId) => {
  return useQuery({
    queryKey:['bets/list'],
    queryFn: ()=>fetchBetsList({page,betId}),
    staleTime:1000 * 60 * 10,
  });
};
