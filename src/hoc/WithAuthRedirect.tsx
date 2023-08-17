import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {AuthInitialStateType} from "../redux/auth-reducer";


type mapStateToPropsType = {
    auth: AuthInitialStateType
}

const mapStateToProps = (state: AppStateType) => {

    console.log(state)
    return {
        auth: state.auth

    }
}


export function WithAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: mapStateToPropsType) => {
        let {auth, ...restProps} = props
        console.log(auth.isAuth)
        if (!auth.isAuth) {
            return <Redirect to={"/login"}/>;
        }
        return <Component {...restProps as T} />;
    };


    return connect(mapStateToProps)(RedirectComponent)




}



