import React from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom'


const PrivateRoute = ({ component, isAutenticated }) => (
    <Route 
        render = {
            () => (
                isAutenticated === true
                    ? {component}
                    : <Redirect to='/' /> // '/' 페이지로 리다이렉트 시킴
            )
        }
    />
)

export default PrivateRoute;