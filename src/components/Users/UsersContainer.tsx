import React from 'react';
import {connect} from "react-redux";
import {
    followAC, followTC, getUsersTC,
    SetCurrentPageAC,
    SetIsFetchingAC,
    SetTotalUsersCountAC,
    SetUsersAC, ToggleFollowingProgressAC,
    unFollowAC, unFollowTC
} from "../../redux/usersReducer";

import {Dispatch} from "redux";
import {AppDispatchType, AppStateType} from "../../redux/redux-store";

import axios from "axios";
import UsersFunctional from "./UsersFunctional";
import Preloader from "../Preloader/Preloader";
import {usersAPI} from "../../api/usersAPI";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";


interface State {
}

//update


class UsersContainer extends React.Component<UsersClassProps, State> {


    componentDidMount() {

        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)

    }


    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)

    }

    render() {


        return (

            <>
                {this.props.isFetching && <Preloader/>}
                <UsersFunctional users={this.props.users}
                                 currentPage={this.props.currentPage} pageSize={this.props.pageSize}
                                 totalUsersCount={this.props.totalUsersCount} onPageChanged={this.onPageChanged}
                                 setToggleIsFollowing={this.props.setToggleIsFollowing}
                                 followingInProgress={this.props.followingInProgress}
                                 unFollowTC={this.props.unFollowTC}
                                 followTC={this.props.followTC}

                />
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
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
    }

};

const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {

        setCurrentPage: (currentPage: any) => {
            dispatch(SetCurrentPageAC(currentPage))
        },
        setToggleIsFollowing: (isFollowing: boolean, id: number) => {
            dispatch(ToggleFollowingProgressAC(isFollowing, id))
        },
        getUsersTC: (currentPage: number, pageSize: number) => {
            dispatch(getUsersTC(currentPage, pageSize))
        },
        unFollowTC: (userId: number) => {
            dispatch(unFollowTC(userId))
        },
        followTC: (userId: number) => {
            dispatch(followTC(userId))
        }
    }

}


export type UsersClassProps = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>



const withRedirect =  WithAuthRedirect(UsersContainer)

export default connect(mapStateToProps, {
        unfollow: unFollowAC,
        setCurrentPage: SetCurrentPageAC,
        setToggleIsFollowing: ToggleFollowingProgressAC,
        getUsersTC: getUsersTC,
        unFollowTC: unFollowTC,
        followTC: followTC
    }
)(withRedirect)
