import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './router/routes';
import { AuthContext } from '../context'
function AppRouter() {

    const { isAuth } = useContext(AuthContext)
    console.log(isAuth);

    return (
        <Routes>
            {isAuth && privateRoutes.map((route) =>
                <Route path={route.path} Component={route.component} key={route.path}></Route>
            )}

            {!isAuth && publicRoutes.map((route) =>
                <Route path={route.path} Component={route.component} key={route.path}></Route>
            )}
        </Routes>
    );
}

export default AppRouter;
