import React from "react";
import {PostItemType} from "../components/Profile/Profile";
import {DialogItemType, MessageItemType} from "../App";



export type StoreType = {
    _state: StateType,
    getState: () => StateType
    _callSubscriber: (state:any) => void,
    addPost: () => void
    updateNewPostText: (newText:string) => void
    subscribe: (observer: any) => void
    addMessage: (newMessage: MessageItemType) => void

}


export type ProfilePageStateType = {
    postData: Array<PostItemType>
    newPostText: string
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
export let store: StoreType = {
    _state:  {
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
            newPostText: ""
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
                    message: "",
                },
                {
                    id: 2,
                    message: "",
                },
                {
                    id: 3,
                    message: "",
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
    },
    getState () {
        return this._state
    },
    _callSubscriber (state: any)  {
        console.log("State has changed")
    },
    addPost() {

        let newPost = {
            id: 5,
            content: this._state.profilePage.newPostText,
            countLikes: 0,
            countDislikes: 0
        }


        this._state.profilePage.postData.push(newPost)
        this._state.profilePage.newPostText = ""

        this._callSubscriber(this._state)
    },
    updateNewPostText (newText:string)  {

        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)

    },
    subscribe (observer: any)  {
        this._callSubscriber = observer
    },
    addMessage  (newMessage: MessageItemType) {




        this._state.dialogsPage.messagesData.push(newMessage)
        this._state.profilePage.newPostText = ""

        this._callSubscriber(this._state)
    },

    dispatch(action) {

    }

}



// let rerenderEntireTree = (state: any) => {
//     console.log("State has changed")
// }

// export let state: StateType = {
//     profilePage: {
//         postData: [
//             {
//                 id: 1,
//                 content: "bow",
//                 countLikes: 12,
//                 countDislikes: 9
//             },
//             {
//                 id: 2,
//                 content: "wow",
//                 countLikes: 5,
//                 countDislikes: 1
//             },
//             {
//                 id: 3,
//                 content: "get",
//                 countLikes: 7,
//                 countDislikes: 3
//             },
//             {
//                 id: 4,
//                 content: "down",
//                 countLikes: 9,
//                 countDislikes: 0
//             }
//
//
//
//         ],
//         newPostText: ""
//     },
//     dialogsPage: {
//         dialogsData: [
//             {
//                 id: 1,
//                 name: "Ilia",
//             },
//             {
//                 id: 2,
//                 name: "Regina",
//             },
//             {
//                 id: 3,
//                 name: "Kyle",
//             },
//             {
//                 id: 4,
//                 name: "Stan",
//             },
//             {
//                 id: 5,
//                 name: "Cartman",
//             },
//             {
//                 id: 6,
//                 name: "Kenny",
//             }
//
//
//         ],
//
//         messagesData: [
//             {
//                 id: 1,
//                 message: "",
//             },
//             {
//                 id: 2,
//                 message: "",
//             },
//             {
//                 id: 3,
//                 message: "",
//             }
//
//
//         ]
//
//     },
//     sidebar: [
//         {
//         id: 1,
//         name: "Leopold"
//     },
//         {
//         id: 2,
//         name: "Tolkien"
//     },
//         {
//         id: 3,
//         name: "Craig"
//     }]
// }

// export const addPost = () => {
//
//     let newPost = {
//         id: 5,
//         content: state.profilePage.newPostText,
//         countLikes: 0,
//         countDislikes: 0
//     }
//
//
//     state.profilePage.postData.push(newPost)
//     state.profilePage.newPostText = ""
//
//     rerenderEntireTree(state)
// }


// export const updateNewPostText = (newText:string) => {
//
//     state.profilePage.newPostText = newText
//     rerenderEntireTree(state)
//
// }

// export const subscribe = (observer: any) => {
//         rerenderEntireTree = observer
// }

// export const addMessage = (newMessage: string) => {
//
//
//
//
//     state.dialogsPage.messagesData.push(newMessage)
//     state.profilePage.newPostText = ""
//
//     rerenderEntireTree(state)
// }

