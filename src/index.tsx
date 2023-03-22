import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {DialogItemType, MessageItemType} from './App';
import {PostItemType} from "./components/Profile/Profile";
import {state, StateType} from "./redux/state";



ReactDOM.render(

    <App state={state}/>,
  document.getElementById('root')
);