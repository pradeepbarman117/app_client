import api from "../../../api/baseApi"

const approvalServices = {
    master: async (values,token)=>{
        return await api.post('/finance/master/approval/request',values,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
    }
}

export default approvalServices