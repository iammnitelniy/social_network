import React from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";


type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {

alert(state.auth.login)
    return {

                isAuth: state.auth.login
            }
}



function  WithAuthRedirect  <T>(Component: React.ComponentType<T >) {
    const RedirectComponent = (props: any) => {

        const {isAuth, ...restProps} = props
        alert(isAuth)


        if (isAuth) {
            return <Redirect to={"/login"} />;
        }
        return <Component {...restProps as T} />;
    };



    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)



    return RedirectComponent;




};

export default WithAuthRedirect;

