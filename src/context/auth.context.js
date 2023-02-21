import { createContext, useContext, useReducer } from 'react';
import { authConsts } from "../utils/actions.constants"

const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

const authReducer = (state, action) => {
    switch (action.type) {
        case authConsts.LOGIN_SUCCESS:
            return {
                isAuthenticated: true
            }
        default:
            break;
    }
}

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    authData: {},
    user: null,
};


export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
