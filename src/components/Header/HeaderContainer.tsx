import React from 'react';
import {Header} from "./Header";
import {logout, setAuthUserTC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {connect, ConnectedProps} from "react-redux";


type HeaderContainerPropsType = {

}

type HeaderContainerType = PropsFromRedux & HeaderContainerPropsType



interface State {

}



class HeaderContainer extends React.Component<PropsFromRedux, State>{


    componentDidMount() {



    }


    render() {


        return (
            <Header logout={this.props.logout} auth={this.props.auth}/>
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
    logout: () => {
        dispatch(logout());

    }
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(HeaderContainer)

