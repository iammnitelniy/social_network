import React from "react";
import {PostItemType} from "../components/Profile/Profile";
import {DialogItemType, MessageItemType} from "../App";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";


export type StoreType = {
    _state: StateType,
    getState: () => StateType
    _callSubscriber: (state: StateType) => void,
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    subscribe: (observer: (state: StateType) => void) => void
    // addMessage: (newMessage: MessageItemType) => void
    // dispatch?: (action: ActionTypes) => void

}

export type AddPostActionType = {
    type: 'ADD-POST'
    postText: string

}

export type ChangeNewTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type AddNewMessageBodyType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}
export type SendMessageType = {
    type: 'SEND-MESSAGE'

}


export type ActionTypes = AddPostActionType | ChangeNewTextActionType | AddNewMessageBodyType | SendMessageType


export type ProfilePageStateType = {
    postData: Array<PostItemType>
    newPostText: string
}
export type DialogsPageStateType = {
    dialogsData: Array<DialogItemType>
    messagesData: Array<MessageItemType>, newMessageBody: string


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
    _state: {
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


            ],
            newMessageBody: ""

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
    getState() {
        return this._state
    },
    _callSubscriber(state: StateType) {
        console.log("State has changed")
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },

    // dispatch(action) {
    //
    //     this._state.profilePage = profileReducer(this._state.profilePage, action)
    //     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    //     this._state.sidebar = sidebarReducer(this._state.sidebar, action)
    //
    //     this._callSubscriber(this._state)
    //
    //
    //
    // }

}
    // addPost() {
    //
    //     let newPost = {
    //         id: 5,
    //         content: this._state.profilePage.newPostText,
    //         countLikes: 0,
    //         countDislikes: 0
    //     }
    //
    //
    //     this._state.profilePage.postData.push(newPost)
    //     this._state.profilePage.newPostText = ""
    //
    //     this._callSubscriber(this._state)
    // },
    // updateNewPostText(newText: string) {
    //
    //     this._state.profilePage.newPostText = newText
    //     this._callSubscriber(this._state)
    //
    // },

    // addMessage(newMessage: MessageItemType) {
    //
    //
    //     this._state.dialogsPage.messagesData.push(newMessage)
    //     this._state.profilePage.newPostText = ""
    //
    //     this._callSubscriber(this._state)
    // },


// if (action.type === ADD_POST) {
//     let newPost = {
//         id: 5,
//         content: this._state.profilePage.newPostText,
//         countLikes: 0,
//         countDislikes: 0
//     }
//
//
//     this._state.profilePage.postData.push(newPost)
//     this._state.profilePage.newPostText = ""
//
//     this._callSubscriber(this._state)
// } else if (action.type === UPDATE_NEW_POST) {
//
//
//     this._state.profilePage.newPostText = action.newText
//     this._callSubscriber(this._state)
//
// }
// else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
//     this._state.dialogsPage.newMessageBody = action.newTextBody
//     this._callSubscriber(this._state)
//
//     this._callSubscriber(this._state)
// }else if (action.type === SEND_MESSAGE) {
//     let body = this._state.dialogsPage.newMessageBody
//     this._state.dialogsPage.newMessageBody = ""
//     this._state.dialogsPage.messagesData.push( {
//         id: 3,
//         message: body,
//     })
//     this._callSubscriber(this._state)
// }

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

