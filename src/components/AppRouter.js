import React, { useContext } from 'react';
import {Route, Routes} from 'react-router-dom'
import {authRoutes, publicRoutes} from '../routes';
import { Context } from '../index';

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(route => 
            <Route
                path={route.path}
                element={<route.element />}
                key={route.path}
                exact
            />)}
            {publicRoutes.map(route => 
            <Route
                path={route.path}
                element={<route.element />}
                key={route.path}
                exact
            />)}
        </Routes>
    );
};

export default AppRouter;