import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, SetUsersAC, unFollowAC} from "../../redux/usersReducer";

 const mapStateToProps = (state: any) => {
    return {
         users: state.users
     }

};

    const mapDispatchToProps = (dispatch: any) => {
        return{
            follow: (userId: any) => {
                dispatch(followAC(userId))
            },
            unfollow: (userId: any) => {
                dispatch(unFollowAC(userId))
            },
            setUsers: (users: any) => {
                dispatch(SetUsersAC(users))
                debugger
                console.log(users)
            }
        }

    }








export default connect(mapStateToProps, mapDispatchToProps)(Users)
