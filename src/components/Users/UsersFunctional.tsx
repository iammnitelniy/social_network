import React from 'react';
import {UserType} from "../../redux/usersReducer";
import {Paginator} from "./Paginator";
import {User} from "./User";


export type UsersFunctionalPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    setToggleIsFollowing: any
    followingInProgress: any
    unFollowTC: any
    followTC: any
}


const UsersFunctional = (props: UsersFunctionalPropsType) => {

    let pagesCount: number = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (

            <div>
               <Paginator onPageChanged={props.onPageChanged} currentPage={props.currentPage} pageSize={props.pageSize} totalItemsCount={props.totalUsersCount} portionSize={10}/>




                {props?.users.map(u => <User unFollowTC={props.unFollowTC} followTC={props.followTC} name={u.name} status={u.status} id={u.id} photos={u.photos} followingInProgress={props.followingInProgress} followed={u.followed}/>)}

            </div>

)
}
export default UsersFunctional;