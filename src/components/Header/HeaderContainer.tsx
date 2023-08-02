import React from 'react';
import {NavLink, withRouter} from "react-router-dom";
import classes from "*.module.css";
import {Header} from "./Header";
import axios from "axios";
import {ResponseUserType, setAuthUserAC, setAuthUserTC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {connect, ConnectedProps} from "react-redux";
import {Dispatch} from "redux";
import {authAPI} from "../../api/authAPI";


type HeaderContainerPropsType = {

}

type HeaderContainerType = PropsFromRedux & HeaderContainerPropsType



interface State {

}



class HeaderContainer extends React.Component<PropsFromRedux, State>{


    componentDidMount() {

        this.props.setAuthUserTC()

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

const mapDispatchToProps = (dispatch: any) => ({
    setAuthUserTC: () => {
        dispatch(setAuthUserTC());
    },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(HeaderContainer)

