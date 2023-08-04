import React from 'react';
import './App.css';
import {Nav} from "./components/Nav/Nav";

import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {
    ActionTypes,

} from "./redux/store";

import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";




type AppPropsType = {
    addPost?: any
    updateNewPostText?: (newPost:string)=> void
    dispatch: (action: ActionTypes)=> void
    store: any


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
    const navbarNames = ["Profile", "Messages", "News", "Music", "Settings", "Users"]
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer />
                <Nav
                    names={navbarNames}
                />

                <div className="app-wrapper-content">
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?'
                           render={() =>
                    <ProfileContainer/>}/>
                    {/*<Sidebar sidebar={props.store.sidebar}/>*/}
                    {/*<Route path='/news' component={News}/>*/}
                    {/*<Route path='/music' component={Music}/>*/}
                    {/*<Route path='/settings' component={Settings}/>*/}

                    <Route path={'/users'} render={()=><UsersContainer/>}/>
                    <Route path={'/login'} render={()=><Login/>}/>
                </div>


                {/*<Header headerNames={arrayHeader}/>*/}
                {/*<Technologies technologiesNames={technologiesNames}/>*/}
            </div>
        </BrowserRouter>
    );
}


export default App;
