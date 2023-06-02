import React from 'react';
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, AddPostActionType, ChangeNewTextActionType, ProfilePageStateType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export type PostItemType = {
    id: number
    content: string
    countLikes: number
    countDislikes: number
}

type ProfilePropsType = {
    stateProfile: ProfilePageStateType
    addPost?: any
    updateNewPostText?: (newPost: string) => void
    dispatch: (action: ActionTypes) => void
    store: any


}


export function Profile(props: ProfilePropsType) {
    return (
        <div>

            <ProfileInfo/>


            <MyPostsContainer  store={props.store} />
            {/*<MyPosts posts={props.stateProfile.postData} dispatch={props.dispatch} addPost={props.addPost}*/}
            {/*         newPostText={props.stateProfile.newPostText} updateNewPostText={props.updateNewPostText}/>*/}

        </div>

    )
}
