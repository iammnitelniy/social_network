import React from 'react';
import s from "./UsersClass.module.css";
import {UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";


export type UsersFunctionalPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: any
    unfollow: any
    onPageChanged: (pageNumber: number) => void
}


const UsersFunctional = (props: UsersFunctionalPropsType) => {

    let pagesCount: number = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (

            <div>
                <div>


                    {pages.map((el, index) => {return <span key={index} onClick={(e) => {props.onPageChanged(el)}} className={Number(props.currentPage) === el ? s.selectedPage : ""}>{el}</span>})}

                </div>




                { props?.users.map(u => (
                    <div key={u.id}>
                        <div>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                <img
                                    src={
                                        u.photos?.small != null
                                            ? u.photos.small
                                            : 'https://img.freepik.com/free-icon/user_318-159711.jpg'
                                    }
                                    className={s.userPhoto}
                                />
                                </NavLink>
                            </div>
                            {u.followed ? (
                                <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                            ) : (
                                <button onClick={() => props.follow(u.id)}>Follow</button>
                            )}
                            <div></div>
                        </div>
                        <span>
                <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                </span>
                <span>
                  <div>{u.followed}</div>
                  <div>{u.uniqueUrlName}</div>
                </span>
              </span>
                    </div>
                ))
                }
            </div>

    );
};

export default UsersFunctional;