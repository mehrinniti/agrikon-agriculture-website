import React from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {

    const { user, isLoading } = useAuth();

    if (isLoading) {
        return (
            <div className="spinner-border text-success" style={{ marginTop: "300px" }} role="status" >
                <span className="visually-hidden" > Loading...</span >
            </div >
        )
    }

    return (
        <Route

            {...rest}
            render={({ location }) =>
                user.displayName ?
                    children :
                    <Redirect
                        to={{
                            pathname: '/signin',
                            state: { from: location }
                        }}
                    >

                    </Redirect>}

        >

        </Route>
    );
};

export default PrivateRoute;