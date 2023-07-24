import React from 'react';
import {connect} from "react-redux";
import {
    followAC,
    SetCurrentPageAC,
    SetIsFetchingAC,
    SetTotalUsersCountAC,
    SetUsersAC,
    unFollowAC
} from "../../redux/usersReducer";

import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";

import axios from "axios";
import UsersFunctional from "./UsersFunctional";
import Preloader from "../Preloader/Preloader";

interface State {
}


class UsersAPIComponent extends React.Component<UsersClassProps, State> {


    componentDidMount() {
        this.props.setToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                console.log(response.data.totalCount)

            })
    }


    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setToggleIsFetching(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleIsFetching(false)
                this.props.setUsers(response.data.items)

            })
    }

    render() {


        return (

            <>
                {this.props.isFetching && <Preloader />}
                <UsersFunctional unfollow={this.props.unfollow} follow={this.props.follow} users={this.props.users}
                                 currentPage={this.props.currentPage} pageSize={this.props.pageSize}
                                 totalUsersCount={this.props.totalUsersCount} onPageChanged={this.onPageChanged}/>
            </>
        );
    }
}


const mapStateToProps = (state: AppStateType) => {

    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching
    }

};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: any) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: any) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: any) => {
            dispatch(SetUsersAC(users))
            console.log(users)
        },
        setCurrentPage: (currentPage: any) => {
            dispatch(SetCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(SetTotalUsersCountAC(totalCount))
        },
        setToggleIsFetching: (isFetching: boolean) => {
            dispatch(SetIsFetchingAC(isFetching))
        }
    }

}


export type UsersClassProps = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>


export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
