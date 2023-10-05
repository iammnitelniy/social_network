
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {addPost, subscribe, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


import {Provider} from "react-redux";
import {store} from "./redux/redux-store";






// addPost("Samuraijs.com")
//derfg
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App  dispatch={store.dispatch.bind(store)} store={store}  />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );


// updateNewPostText={store.updateNewPostText.bind(store)
// rerenderEntireTree(store.getState())

// store.subscribe(()=> {
//     let state = store.getState()
//     rerenderEntireTree(state)
// })
