import React from 'react';
import {addPostActionCreator} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";

import {connect} from "react-redux";


const mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {

        addPost: (text: string) => {
            dispatch(addPostActionCreator(text))
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)