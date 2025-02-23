import { useQuery } from "@tanstack/react-query";
import requestServices from "../../../services/finance/request/requestServices";
import Cookies from 'js-cookie'; 

const fetchMasterRequest = async ()=>{
    try{
        const token = Cookies.get('token')
        const response = await requestServices.getMasterREQ(token);
        return response.data
    }catch(err){
        console.error(err,'error while fetching master request');
        throw new Error(err);
    }
}

export const useMasterRequestQuery = ()=>{
    return useQuery({
        queryKey:['request/master'],
        queryFn:fetchMasterRequest,
    })
}

