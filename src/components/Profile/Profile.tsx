import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileFromAPIType} from "./ProfileContainer";


export type PostItemType = {
    id: number
    content: string
    countLikes: number
    countDislikes: number
}



type ProfilePropsType = {

    profile: ProfileFromAPIType,
    status: string
    updateProfileStatus: any

}


export function Profile(props: ProfilePropsType) {
    return (
        <div>

            <ProfileInfo profile={props.profile} status={props.status} updateProfileStatus={props.updateProfileStatus}/>


            <MyPostsContainer  />
            {/*<MyPosts posts={props.stateProfile.postData} dispatch={props.dispatch} addPost={props.addPost}*/}
            {/*         newPostText={props.stateProfile.newPostText} updateNewPostText={props.updateNewPostText}/>*/}

        </div>

    )
}
