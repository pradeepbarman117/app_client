import api from "../../api/baseApi";


const userServices = {
    get:(id,token)=>{
        return api.get(`/master/user/${id}`,{
            headers:{
                'Authorization': `Bearer ${token}`,
            }
        });
    },
    getAll:(token,page,userId)=>{
        return api.get(`/user/get`,{
            headers:{
                'Authorization': `Bearer ${token}`,
            },
            params:{
                page,
                userId,
            }
        })
    }
}

export default userServices