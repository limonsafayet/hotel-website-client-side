import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from "../hooks/useAuth"

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <Route
            {...rest}
            render={props => user.email ? <Component {...props} {...rest} /> : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: props.location }
                }}
            ></Redirect>

            }
        >

        </Route>
    );
};

export default PrivateRoute;