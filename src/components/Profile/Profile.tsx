import React from 'react';
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


type ProfilePropsType = any

export function Profile(props: ProfilePropsType) {
    return (
        <div>

            <ProfileInfo/>

            <MyPosts/>

        </div>

    )
}
