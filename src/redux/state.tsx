import React from "react";
import {PostItemType} from "../components/Profile/Profile";
import {DialogItemType, MessageItemType} from "../App";

export type ProfilePageStateType = {
    postData: Array<PostItemType>
}
export type DialogsPageStateType = {
    dialogsData: Array<DialogItemType>
    messagesData: Array<MessageItemType>

}
export type SidebarStateType = {
    id: number
    name: string
}

export type StateType = {
    profilePage: ProfilePageStateType
    dialogsPage: DialogsPageStateType
    sidebar: Array<SidebarStateType>
}

export let state: StateType = {
    profilePage: {
        postData: [
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


        ],
    },
    dialogsPage: {
        dialogsData: [
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


        ],

        messagesData: [
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

    },
    sidebar: [
        {
        id: 1,
        name: "Leopold"
    },
        {
        id: 2,
        name: "Tolkien"
    },
        {
        id: 3,
        name: "Craig"
    }]
}