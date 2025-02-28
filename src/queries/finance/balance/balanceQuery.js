import { useQuery } from "@tanstack/react-query";
import Cookies from 'js-cookie'; 
import api from "../../../api/baseApi";

const fetchAmounts = async ()=>{
    try{
        const token = Cookies.get('token')
        const response = await api.get('/finance/get/amounts',{
            headers:{
                'Authorization': `Bearer ${token}`,
            }
        });
        return response.data
    }catch(err){
        console.error(err,'error while fetching master request');
        throw new Error(err);
    }
}

export const useAmountQuery = ()=>{
    return useQuery({
        queryKey:['total/amounts'],
        queryFn:fetchAmounts,
    })
}

