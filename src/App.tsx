import React, {useEffect} from 'react';
import './App.css';
import {Nav} from "./components/Nav/Nav";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionTypes,} from "./redux/store";


import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {AppStateType} from "./redux/redux-store";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Preloader/Preloader";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";

type AppPropsType = {
    addPost?: any
    updateNewPostText?: (newPost:string)=> void
    dispatch: (action: ActionTypes)=> void
    store: any
    initializeApp: () => void
    isInitialized: boolean


}
export type DialogItemType = {
    id: number
    name: string
}
export type MessageItemType= {
    id: number
    message: string

}




const App = (props:AppPropsType) => {


    // const arrayHeader = ["Home ", "News Feed ", "Messages "]
    // const technologiesNames = ["bow ", "wow ", "wow "]
    const navbarNames = ["Profile", "Messages", "News", "Music", "Settings", "Users", 'Login']


    useEffect(() => {
        console.log(props.isInitialized)
        props.initializeApp()}, [])

if(!props.isInitialized) {
    return <Preloader />
}
    console.log(props.isInitialized)
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer />
                <Nav
                    names={navbarNames}
                />

                <div className="app-wrapper-content">
                    <Route exact path='/'
                           render={() =>
                               <ProfileContainer/>}/>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>

                    <Route path='/profile/:userId?'
                           render={() =>
                    <ProfileContainer/>}/>

                    <Route path='/news' render={()=><News/>}/>
                    <Route path='/music' component={()=><Music/>}/>
                    <Route path='/settings' component={()=><Settings/>}/>

                    <Route path={'/users'} render={()=><UsersContainer/>}/>
                    <Route path={'/login'} render={()=><LoginContainer />}/>
                    {/*<Route path={'*'} render={() => <h1 style={{textAlign: 'center'}}>404: PAGE NOT FOUND</h1>}/>*/}
                </div>


                {/*<Header headerNames={arrayHeader}/>*/}
                {/*<Technologies technologiesNames={technologiesNames}/>*/}
            </div>
        </BrowserRouter>
    );
}


const mapStateToProps = (state: AppStateType) => {

    return {
        isInitialized: state.app.isInitialized
    }

};

const mapDispatchToProps = (dispatch: any) => ({
    initializeApp: () => {
        dispatch(initializeApp());
    },

});

const connector = connect(mapStateToProps, mapDispatchToProps);


export default connector(App)
