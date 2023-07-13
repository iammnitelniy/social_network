import React, {useEffect, useState} from 'react';
import s from './UsersClass.module.css'
import axios from "axios";
import {UsersClassProps} from "./UsersContainer";
import UsersClass from "./UsersClass";
import UsersFunctional from "./UsersFunctional";


// interface User {
//     id: number;
//     name: string;
//     status: string;
//     photos: {
//         small: string | null;
//         large: string | null;
//     };
//     followed: boolean;
// }

// interface Props {
//     users: User[];
//     setUsers: (users: User[]) => void;
//     follow: (userId: number) => void;
//     unfollow: (userId: number) => void;
//
// }

interface State {
}


class UsersAPIComponent extends React.Component<UsersClassProps, State> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                console.log(response.data.totalCount)

            })
    }


    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)

            })
    }

    render() {





        return (
            <UsersFunctional unfollow={this.props.unfollow} follow={this.props.follow} users={this.props.users} currentPage={this.props.currentPage} pageSize={this.props.pageSize} totalUsersCount={this.props.totalUsersCount} onPageChanged={this.onPageChanged}/>

        );
    }
}

export default UsersAPIComponent