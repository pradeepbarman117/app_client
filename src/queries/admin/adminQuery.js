import { useQuery } from "@tanstack/react-query";
import adminServices from "../../services/admin/adminServices";
import Cookies from 'js-cookie';

const fetchAdmin = async () => {
    try {
        const token = Cookies.get('token');
        const response = await adminServices.getAdmin(token);
        return response.data
    } catch (err) {
        console.log(err);
        throw new Error(err.message)
    }
}

export const useAdminBalance = () => {
    return useQuery({
        queryKey: ['admin/balance'],
        queryFn: fetchAdmin,
        retry: 1,
        staleTime: 1000 * 60 * 10,
    })
}