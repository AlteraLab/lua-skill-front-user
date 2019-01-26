import React from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom'

const PrivateRoute = ({ component, isAutenticated }) => (
    <Route render={() => (
        isAutenticated === true
            ? {component}
            : <Redirect to='/' />
    )}/>
)

export default PrivateRoute;