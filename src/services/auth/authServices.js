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