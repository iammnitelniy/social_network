import React from 'react';
import classes from './ProfileInfo.module.css'
import {ProfileFromAPIType} from "../ProfileContainer";
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


type ProfileInfoPropsType = {
    profile: ProfileFromAPIType
};

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    return !props.profile ? (
        <Preloader />
    ) : (
        <div>
            <div>
                <img src={props.profile.photos.large} />
                <ProfileStatus status={'Hello my friends'}/>
            </div>
            <div className={classes.descriptionBlock}>{props.profile.fullName}</div>
            <span>{props.profile.lookingForAJob}</span>
            <span>{props.profile.contacts.vk}</span>
            <span>{props.profile.lookingForAJobDescription}</span>
            <span>{props.profile.userId}</span>
            <span>{props.profile.contacts.github}</span>
            <span>{props.profile.contacts.mainLink}</span>
        </div>
    );
};