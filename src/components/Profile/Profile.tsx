import React from 'react';
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export type PostItemType= {
    id: number
    content: string
    countLikes: number
    countDislikes: number
}

type ProfilePropsType = {
        posts: Array<PostItemType>
}





export function Profile(props: ProfilePropsType) {
    return (
        <div>

            <ProfileInfo/>

            <MyPosts posts={props.posts}/>

        </div>

    )
}
