import React, {useEffect, useState} from 'react';
import styles from './Users.module.css'
import axios from "axios";
import {UsersClassProps} from "./UsersContainer";


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


class Users extends React.Component<UsersClassProps, State> {


    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
                console.log(response.data.items)
            })
    }


    render() {
        return (
            <div>
                {Array.isArray(this.props.users) ? (
                    this.props.users.map(u => (
                        <div key={u.id}>
                            <div>
                                <div>
                                    <img
                                        src={
                                            u.photos.small != null
                                                ? u.photos.small
                                                : 'https://img.freepik.com/free-icon/user_318-159711.jpg'
                                        }
                                        className={styles.userPhoto}
                                    />
                                </div>
                                {u.followed ? (
                                    <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                ) : (
                                    <button onClick={() => this.props.follow(u.id)}>Follow</button>
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
                ) : (
                    <div>No users found.</div>
                )}
            </div>
        );
    }
}

export default Users