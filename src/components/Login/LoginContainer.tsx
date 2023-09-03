import React from 'react';
import {connect} from 'react-redux';
import {compose} from "redux";
import {Login} from "./Login";
import {login, logout} from "../../redux/auth-reducer";






interface State {
}




class LoginContainer extends React.Component<any, State> {


    componentDidMount() {





    }


    render() {


        return (
           <Login login={this.props.login} logout={this.props.logout}/>
        );
    }
}


const mapStateToProps = (state: any) => {

    return (
        {
            auth: state.auth.isAuth,

        }

    )
}
//update

const mapDispatchToProps = (dispatch: any) => ({
    login: (email: string, password: string, rememberMe: boolean) => {
        dispatch(login(email, password, rememberMe));
    },
    logout: () => {
        dispatch(logout());
    },

});


export default  compose<React.ComponentType>(connect(mapStateToProps,mapDispatchToProps))(LoginContainer)

