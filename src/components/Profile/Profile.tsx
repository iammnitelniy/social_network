import React from 'react';
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, AddPostActionType, ChangeNewTextActionType, ProfilePageStateType} from "../../redux/state";


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


}


export function Profile(props: ProfilePropsType) {
    return (
        <div>

            <ProfileInfo/>

            <MyPosts posts={props.stateProfile.postData} dispatch={props.dispatch}
                     newPostText={props.stateProfile.newPostText}/>

        </div>

    )
}
