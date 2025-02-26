import api from "../../api/baseApi";


const userServices = {
    get:(id,token)=>{
        return api.get(`/master/user/${id}`,{
            headers:{
                'Authorization': `Bearer ${token}`,
            }
        });
    },
    getAll:(token)=>{
        return api.get(`/user/get`,{
            headers:{
                'Authorization': `Bearer ${token}`,
            }
        })
    }
}

export default userServices