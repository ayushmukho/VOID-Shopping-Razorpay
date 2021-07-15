import React from 'react';
import { Redirect, Route } from 'react-router';
import { useAuth } from './context/user-context';

function PrivateRoute({ component: Component, ...rest }){
    const { currentUser } = useAuth();

    return(
        <Route
            {...rest}
            render={props => {
                return currentUser ? <Component {...props} /> : <Redirect to="/sign-in" />
            }}
        
        >

        </Route>
    );
}

export default PrivateRoute