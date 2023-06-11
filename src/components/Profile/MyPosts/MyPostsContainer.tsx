import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostItemType} from "../Profile";
import {useRef} from "react";
import {MouseEvent} from "react";
import {addPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profileReducer";
import {ActionTypes} from "../../../redux/store";
import {MyPosts} from "./MyPosts";

import store from "../../../redux/redux-store";
import {sendMessageActionCreator, updateNewMessageBodyCreator} from "../../../redux/dialogsReducer";
import {connect} from "react-redux";
import {Dialogs} from "../../Dialogs/Dialogs";



// type MyPostsPropsType = {
//
//     // addPost?: any
//     // newPostText: string
//     // updateNewPostText?: (newPost:string)=> void
//     // dispatch: (action: ActionTypes)=> void
//
//
// };
//
//
//
// export function MyPostsContainer(props: MyPostsPropsType) {
//
//
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store: any) => {
//
//                     let state = store.getState()
//
//
//                     const addPostHandler = (text: string) => {
//
//
//                         let action = addPostActionCreator(text)
//                         store.dispatch(action)
//
//
//                     }
//
//                     let onPostChange = (text: string) => {
//                         // let newText
//                         // if (newPostElement.current !== null) {
//                         //  newText = newPostElement.current.value}
//
//                         // props.updateNewPostText(e.currentTarget.value)
//                         let action = updateNewPostTextActionCreator(text)
//                         store.dispatch(action)
//                     }
//
//                 return <MyPosts updateNewPostText={onPostChange}
//                                 addPost={addPostHandler}
//                                 posts={state.profilePage.postData}
//                                 newPostText={state.profilePage.newPostText}/>
//         }
//             }
//                 </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: (text: string) => {
            dispatch(addPostActionCreator(text))
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)