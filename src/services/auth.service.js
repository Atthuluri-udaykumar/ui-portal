import Axios from "../utils/axios";


// 
export const userLogin = async payload => {
    return await Axios.post('user/login', payload);
};
