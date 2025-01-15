
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