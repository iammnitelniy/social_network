import React from 'react';
import {addPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";

import {connect} from "react-redux";




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