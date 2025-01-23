<<<<<<< HEAD
import api from "../../api/api";

=======
import api from "../../api/baseApi";
>>>>>>> fe76fd557da426803569ab39d8a9e9e2d64d0c80

const masterServices = {
    create: async (credentials, token) => {
        return api.post('/master/create', credentials, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        }); // Replace with your backend endpoint
    },
    get: async (token) => {
        return api.get('/master/get', {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        }); // Replace with your backend endpoint
    },
}
export { masterServices };