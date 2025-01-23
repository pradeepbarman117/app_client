<<<<<<< HEAD

// export const loginService = async (credentials) => {
//     return axios.post('/api/auth/login', credentials); // Replace with your backend endpoint
// };

import api from "../../api/api";

const loginService = {
    login: async (credentials) => {
        return api.post('/auth/login', credentials); // Replace with your backend endpoint
    }
}
export { loginService };
=======
import api from "../../api/baseApi";
import Cookies from 'js-cookie';


const authServices = {

    validateSession: () => {
        const token = Cookies.get('token');
        return api.get('/protected',{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        });
    },

    login: (credentials) => {
        return api.post('/auth/login', credentials);
    }

    
}
export { authServices };
>>>>>>> fe76fd557da426803569ab39d8a9e9e2d64d0c80
