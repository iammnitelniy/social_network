import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {DialogItemType, MessageItemType} from './App';
import {PostItemType} from "./components/Profile/Profile";
let postData: Array<PostItemType> = [
    {
        id: 1,
        content: "bow",
        countLikes: 12,
        countDislikes: 9
    },
    {
        id: 2,
        content: "wow",
        countLikes: 5,
        countDislikes: 1
    },
    {
        id: 3,
        content: "get",
        countLikes: 7,
        countDislikes: 3
    },
    {
        id: 4,
        content: "down",
        countLikes: 9,
        countDislikes: 0
    }



]

let dialogsData: Array<DialogItemType> = [
    {
        id: 1,
        name: "Ilia",
    },
    {
        id: 2,
        name: "Regina",
    },
    {
        id: 3,
        name: "Kyle",
    },
    {
        id: 4,
        name: "Stan",
    },
    {
        id: 5,
        name: "Cartman",
    },
    {
        id: 6,
        name: "Kenny",
    }


]

let messagesData: Array<MessageItemType> = [
    {
        id: 1,
        message: "They",
    },
    {
        id: 2,
        message: "killed",
    },
    {
        id: 3,
        message: "Kenny",
    }


]
ReactDOM.render(

    <App posts={postData} dialogs={dialogsData} messages={messagesData}/>,
  document.getElementById('root')
);