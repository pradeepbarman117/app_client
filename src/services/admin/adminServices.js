import api from "../../api/api"

const adminServices = {
    getAdmin: async (token) => {
        return api.get('/get/current/admin',{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
    }       
}

export default adminServices