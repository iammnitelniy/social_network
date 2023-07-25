import React from 'react';

const UsersClassNotUsable = () => {
    return (
        <div>
            didnt use
        </div>
    );
};

export default UsersClassNotUsable;


// import React, {useEffect, useState} from 'react';
// import s from './UsersClassNotUsable.module.css'
// import axios from "axios";
// import {UsersClassProps} from "./UsersContainer";
//
//
// // interface User {
// //     id: number;
// //     name: string;
// //     status: string;
// //     photos: {
// //         small: string | null;
// //         large: string | null;
// //     };
// //     followed: boolean;
// // }
//
// // interface Props {
// //     users: User[];
// //     setUsers: (users: User[]) => void;
// //     follow: (userId: number) => void;
// //     unfollow: (userId: number) => void;
// //
// // }
//
// interface State {
// }
//
//
// class Users extends React.Component<UsersClassProps, State> {
//
//
//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
//             .then(response => {
//                 this.props.setUsers(response.data.items)
//                 this.props.setTotalUsersCount(response.data.totalCount)
//                 console.log(response.data.totalCount)
//
//             })
//     }
//
//
//     onPageChanged = (pageNumber: number) => {
//         this.props.setCurrentPage(pageNumber)
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
//             .then(response => {
//                 this.props.setUsers(response.data.items)
//
//             })
//     }
//
//     render() {
//
//         let pagesCount: number = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
//
//         let pages: number[] = []
//         for (let i = 1; i <= pagesCount; i++) {
//             pages.push(i)
//         }
//
//
//         return (
//             <div>
//                 <div>
//
//
//                     {pages.map((el, index) => {
//                         return <span key={index} onClick={(e) => {
//                             this.onPageChanged(el)
//                         }} className={Number(this.props.currentPage) === el ? s.selectedPage : ""}>{el}</span>
//                     })}
//
//                 </div>
//
//
//                 {this.props?.users.map(u => (
//                     <div key={u.id}>
//                         <div>
//                             <div>
//                                 <img
//                                     src={
//                                         u.photos?.small != null
//                                             ? u.photos.small
//                                             : 'https://img.freepik.com/free-icon/user_318-159711.jpg'
//                                     }
//                                     className={s.userPhoto}
//                                 />
//                             </div>
//                             {u.followed ? (
//                                 <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
//                             ) : (
//                                 <button onClick={() => this.props.follow(u.id)}>Follow</button>
//                             )}
//                             <div></div>
//                         </div>
//                         <span>
//                 <span>
//                   <div>{u.name}</div>
//                   <div>{u.status}</div>
//                 </span>
//                 <span>
//                   <div>{u.followed}</div>
//                   <div>{u.uniqueUrlName}</div>
//                 </span>
//               </span>
//                     </div>
//                 ))
//                 }
//             </div>
//         );
//     }
// }
//
// export default Users