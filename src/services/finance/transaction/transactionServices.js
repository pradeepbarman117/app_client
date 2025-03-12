import api from "../../../api/baseApi"

const transactionServices = {
    //////////////////////////// ADMIN SERVICES //////////////////////////////
    getMasterTransaction: async (token,page,transactionId,masterId)=>{
        return await api.get('/finance/transaction/master/get/list',{
            headers:{
                'Authorization': `Bearer ${token}`
            },
            params:{
                masterId,
                page,
                transactionId
            }
        });
    },

}

export default transactionServices