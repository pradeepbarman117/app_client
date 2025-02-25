import api from "../../../api/baseApi"


const requestServices = {
    getMasterREQ: async (token)=>{
        return await api.get('/finance/master/request/money',{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        });
    }
}

export default requestServices