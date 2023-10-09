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

//update

type ProfilePropsType = {

    profile: ProfileFromAPIType,
    status: string
    updateProfileStatus: any
    isOwner: any
    setAvatar: (file: any) => void

}

//update1

export function Profile(props: ProfilePropsType) {
    return (
        <div>

            <ProfileInfo profile={props.profile} status={props.status} updateProfileStatus={props.updateProfileStatus} isOwner={props.isOwner} setAvatar={props.setAvatar}/>


            <MyPostsContainer />


        </div>

    )
}
