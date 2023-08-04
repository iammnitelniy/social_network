import React from 'react';
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, AddPostActionType, ChangeNewTextActionType, ProfilePageStateType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileFromAPIType} from "./ProfileContainer";


export type PostItemType = {
    id: number
    content: string
    countLikes: number
    countDislikes: number
}



type ProfilePropsType = {

profile: ProfileFromAPIType
isAuth: boolean

}


export function Profile(props: ProfilePropsType) {
    return (
        <div>

            <ProfileInfo profile={props.profile}/>


            <MyPostsContainer  />
            {/*<MyPosts posts={props.stateProfile.postData} dispatch={props.dispatch} addPost={props.addPost}*/}
            {/*         newPostText={props.stateProfile.newPostText} updateNewPostText={props.updateNewPostText}/>*/}

        </div>

    )
}
