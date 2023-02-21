import Dashboard from '../pages/Dashboard';
import LoginPage from '../pages/LoginPage';

export const RoutesConfig = [
    {
        path: '/login',
        exact: true,
        restricted: false,
        component: LoginPage,
    },
    {
        path: '/',
        exact: true,
        restricted: false,
        component: Dashboard,
    }
]


