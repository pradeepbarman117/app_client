import api from "../../api/baseApi";

const masterServices = {
    create: async (credentials, token) => {
        return api.post('/master/create', credentials, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        }); // Replace with your backend endpoint
    },
    get: async (token) => {
        return api.get('/master/getall', {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        }); // Replace with your backend endpoint
    },
    getById: async (id, token) => {
        return api.get(`/master/get/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
    },
}
export { masterServices };