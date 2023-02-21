import React, { useEffect } from 'react';
import { useAuthContext } from '../context/auth.context';
import { useUserlogin } from '../hooks/login.hooks';
import { userLogin } from '../services/auth.service';
import { authConsts } from '../utils/actions.constants';

const LoginPage = () => {
    const { state, dispatch } = useAuthContext();
    const { mutate } = useUserlogin();

    useEffect(() => {
        // userLogin('then').then(res => {
        // }).catch(err => {
        // })

        mutate(
            {},
            {
                onSuccess: async res => {
                    console.log(res);
                },
                onError: async err => {
                    console.log(err);
                }
            }
        )
        console.log(state, 'uda')
        dispatch({ type: authConsts.LOGIN_SUCCESS, data: 'helo' })
    }, [])
    return (
        <div>
            login pagefkjjk
            {JSON.stringify(state)}
        </div>
    );
};

export default LoginPage;
