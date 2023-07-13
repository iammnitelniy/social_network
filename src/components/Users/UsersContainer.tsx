import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, SetUsersAC, unFollowAC} from "../../redux/usersReducer";
import UsersClass from "./UsersClass";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";

 const mapStateToProps = (state: AppStateType) => {

    return {
         users: state.users.users
     }

};

    const mapDispatchToProps = (dispatch: Dispatch) => {
        return{
            follow: (userId: any) => {
                dispatch(followAC(userId))
            },
            unfollow: (userId: any) => {
                dispatch(unFollowAC(userId))
            },
            setUsers: (users: any) => {
                dispatch(SetUsersAC(users))
                console.log(users)
            }
        }

    }



export type UsersClassProps = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>


export default connect(mapStateToProps, mapDispatchToProps)(UsersClass)
