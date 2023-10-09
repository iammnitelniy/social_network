import React from 'react';
import classes from './ProfileInfo.module.css'
import {ProfileFromAPIType} from "../ProfileContainer";
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


type ProfileInfoPropsType = {
    profile?: ProfileFromAPIType
    status: string,
    updateProfileStatus: any
    setAvatar: (file: any) => void
    isOwner: any
};

export const ProfileInfo = (props: ProfileInfoPropsType) => {



    const onMainPhotoSelected = (e: any) => {
        if(e.target.files.length) {
            props.setAvatar(e.target.files[0])
        }
    }


    return !props.profile ? (
        <Preloader />
    ) : (
        <div className={classes.profileInfo}>
            <div>
                <img src={props.profile?.photos?.large || 'https://img.freepik.com/free-icon/user_318-159711.jpg'} />
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

                <ProfileStatus status={props.status} updateProfileStatus={props.updateProfileStatus}/>
            </div>
            {/*<div className={classes.descriptionBlock}>{props.profile.fullName}</div>*/}
            {/*<span>{props.profile.lookingForAJob}</span>*/}
            {/*/!*<span>{props.profile.contacts.vk}</span>*!/*/}
            {/*<span>{props.profile.lookingForAJobDescription}</span>*/}
            {/*<span>{props.profile.userId}</span>*/}
            {/*<span>{props.profile.contacts.github}</span>*/}
            {/*<span>{props.profile.contacts.mainLink}</span>*/}
        </div>
    );
};