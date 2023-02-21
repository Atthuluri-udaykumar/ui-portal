import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PublicLayout from '../../layouts/public.layouts';
// import Redirect from 'react-router';


const PublicRoute = (props) => {
    let token = localStorage.getItem('token');
    if (!!token && token !== 'undefined') {
        return <Redirect to="/" />;
    }
    return (
        <>
            <PublicLayout>
                <Route {...props} />
            </PublicLayout>
        </>
    )
};

export default PublicRoute;
