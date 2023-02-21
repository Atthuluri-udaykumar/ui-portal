import React from 'react';
import { Switch } from 'react-router-dom';
import { RoutesConfig } from "./route.config"
import { PrivateRoute } from "./private/private.routes";
import PublicRoute from './public/public.routes';

const Routes = () => {
    return (
        <Switch>
            {(RoutesConfig || []).map(routeProps => {
                if (routeProps.restricted) {
                    return <PrivateRoute key={routeProps.path} {...routeProps} />;
                } else {
                    return <PublicRoute key={routeProps.path} {...routeProps} />;
                }
            })}
        </Switch>
    );;
};

export default Routes;
