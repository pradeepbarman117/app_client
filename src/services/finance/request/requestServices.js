import api from "../../../api/baseApi"


const requestServices = {
    getMasterREQ: async (token,page,requestId)=>{
        return await api.get('/finance/master/request/money',{
            headers:{
                'Authorization': `Bearer ${token}`
            },
            params:{
                page,
                requestId
            }
        });
    }
}

export default requestServices