// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App, {DialogItemType, MessageItemType} from './App';
// import {addPost} from "./redux/state";
// import {PostItemType} from "./components/Profile/Profile";
// import {state, StateType} from "./redux/state";

//
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {DialogItemType, MessageItemType} from './App';
// import {addPost, subscribe, updateNewPostText} from "./redux/state";
import {PostItemType} from "./components/Profile/Profile";
import {store, StateType} from "./redux/state";




 let rerenderEntireTree = (state: StateType) => {


// addPost("Samuraijs.com")

    ReactDOM.render(
        <App state={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)
