import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./UsersClass.module.css";


type PropsType = {
 id: number
 photos: any
 followingInProgress: any
    followed: boolean
    unFollowTC: any
    followTC: any
    name: any
    status: any
}


export const User = (props: PropsType) => {
    return (
        <div >
            <div>
                <div>
                    <NavLink to={'/profile/' + props.id}>
                        <img
                            src={
                                props.photos?.small != null
                                    ? props.photos.small
                                    : 'https://img.freepik.com/free-icon/user_318-159711.jpg'
                            }
                            className={s.userPhoto}
                        />
                    </NavLink>
                </div>
                {props.followed ? (
                    <button disabled={props.followingInProgress.some((id: number) => id === props.id)}  onClick={() => {

                        props.unFollowTC(props.id)

                    }
                    }>Unfollow</button>
                ) : (
                    <button disabled={props.followingInProgress.some((id: number) => id === props.id)} onClick={() => {
                        props.followTC(props.id)


                    }
                    }>Follow</button>
                )}
                <div></div>
            </div>
            <span>
                <span>
                  <div>{props.name}</div>
                  <div>{props.status}</div>
                </span>
                <span>
                  <div>{props.followed}</div>

                </span>
              </span>
        </div>

    )
}





