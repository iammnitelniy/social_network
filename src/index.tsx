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
import {BrowserRouter} from "react-router-dom";
import {StateType} from "./redux/store";
import store from "./redux/redux-store";




 let rerenderEntireTree = (state: any) => {


// addPost("Samuraijs.com")

    ReactDOM.render(
        <BrowserRouter>

            <App state={state} dispatch={store.dispatch.bind(store)} store={store}  />

        </BrowserRouter>,
        document.getElementById('root')
    );
}

// updateNewPostText={store.updateNewPostText.bind(store)
rerenderEntireTree(store.getState())

store.subscribe(()=> {
    let state = store.getState()
    rerenderEntireTree(state)
})
