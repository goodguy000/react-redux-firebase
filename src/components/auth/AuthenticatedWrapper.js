import React from "react";
import { Redirect } from "react-router-dom";

const AuthenticatedWrapper = (WrappedComponent, auth) => {
    return (props) => {
        if (auth && auth.uid) {
            return <WrappedComponent {...props} />;
        }

        return <Redirect to="/signin" />;
    }
}


export default AuthenticatedWrapper;