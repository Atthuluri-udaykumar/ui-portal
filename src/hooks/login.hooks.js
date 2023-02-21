import { useMutation } from 'react-query';
import { userLogin } from "../services/auth.service";

export const useUserlogin = () => {
    return useMutation(async pyload => {
        try {
            const res = await userLogin(pyload);
            // if (res.status === 200) {
            //     return res.data;
            // }
            return res;
        } catch (error) {
            return error;
        }
    })
}

