import React from 'react';
import './App.css';
import Technologies from "./Technologies"
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {PostItemType, Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {
    ActionTypes,
    AddPostActionType,
    ChangeNewTextActionType,
    DialogsPageStateType,
    ProfilePageStateType,
    StateType, StoreType
} from "./redux/store";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Users} from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";



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
                <Header
                    content={"data:image/jpeg;base64,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"}
                />
                <Nav
                    names={navbarNames}
                />

                <div className="app-wrapper-content">
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/profile'
                           render={() =>
                    <Profile />}/>
                    {/*<Sidebar sidebar={props.store.sidebar}/>*/}
                    {/*<Route path='/news' component={News}/>*/}
                    {/*<Route path='/music' component={Music}/>*/}
                    {/*<Route path='/settings' component={Settings}/>*/}

                    <Route path={'/users'} render={()=><UsersContainer/>}/>
                </div>


                {/*<Header headerNames={arrayHeader}/>*/}
                {/*<Technologies technologiesNames={technologiesNames}/>*/}
            </div>
        </BrowserRouter>
    );
}


export default App;
