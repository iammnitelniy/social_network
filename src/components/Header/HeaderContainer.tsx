import React from 'react';
import {NavLink, withRouter} from "react-router-dom";
import classes from "*.module.css";
import {Header} from "./Header";
import axios from "axios";
import {ResponseUserType, setAuthUserAC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {connect, ConnectedProps} from "react-redux";
import {Dispatch} from "redux";


type HeaderContainerPropsType = {

}

type HeaderContainerType = PropsFromRedux & HeaderContainerPropsType



interface State {

}



class HeaderContainer extends React.Component<PropsFromRedux, State>{


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})

            .then(res => {
                if (res.data.resultCode === 0) {
                    this.props.setAuthUser(res.data)
                }

            }

    )


    }


    render() {


        return (
            <Header auth={this.props.auth}/>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {

    return {
            auth: state.auth
    }

};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setAuthUser: (auth: ResponseUserType) => {
        dispatch(setAuthUserAC(auth));
    },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(HeaderContainer)

