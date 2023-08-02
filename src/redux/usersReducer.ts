import {Dispatch} from "redux";
import {usersAPI} from "../api/usersAPI";

const FOLLOW = 'FOLLOW USER'
const UNFOLLOW = 'UNFOLLOW USER'
const SET_USERS = 'SET USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

// export type UserType =
// {id: number, photoUrl: string, followed: boolean, fullName: string, status: string, location: {city: string, country: string}}


export type UserType =
    {
        "name": string,
        "id": number,
        "uniqueUrlName": null | string,
        "photos": {
            "small": null | "string",
            "large": null | 'string'
        },
        "status": null | boolean,
        "followed": boolean
    }


export type UsersType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]

}


const initialState: UsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []

}


export const usersReducer = (state = initialState, action: TotalType): UsersType => {


    switch (action.type) {
        case FOLLOW:

            return {
                ...state,
                users: state.users.map((el: any) => el.id === action.payload.userId ? {...el, followed: true} : el)
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((el: any) => el.id === action.payload.userId ? {...el, followed: false} : el)
            }

        case SET_USERS:
            return {...state, users: action.payload.users}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload.currentPage}
        case SET_TOTAL_USERS_COUNT:

            return {...state, totalUsersCount: action.payload.totalCount / 100}
        case TOGGLE_IS_FETCHING:

            return {...state, isFetching: action.payload.isFetching}


        case TOGGLE_IS_FOLLOWING_PROGRESS:

            return {...state,
                followingInProgress:
                    action.payload.isFollowing ?
                        [...state.followingInProgress,  action.payload.id]
                    : state.followingInProgress.filter(id => id != action.payload.id)}

        default:
            return state
    }

}
//comment
export type TotalType =
    FollowActionCreatorACType
    | UnFollowActionCreatorACType
    | setUsersACType
    | setCurrentPageACType
    | SetTotalUsersCountACType
    | SetIsFetchingACType
    | ToggleFollowingProgressACType

export type FollowActionCreatorACType = ReturnType<typeof followAC>

export const followAC = (userId: number) => {
    return (
        {
            type: FOLLOW,
            payload: {
                userId
            }
        } as const
    )
}
//change
export type UnFollowActionCreatorACType = ReturnType<typeof unFollowAC>

export const unFollowAC = (userId: number) => {
    return (
        {
            type: UNFOLLOW,
            payload: {
                userId
            }
        } as const
    )
}
export type setUsersACType = ReturnType<typeof SetUsersAC>

export const SetUsersAC = (users: any) => {
    return (
        {
            type: SET_USERS,
            payload: {
                users
            }
        } as const
    )
}
export type setCurrentPageACType = ReturnType<typeof SetCurrentPageAC>

export const SetCurrentPageAC = (currentPage: number) => {
    return (
        {
            type: SET_CURRENT_PAGE,
            payload: {
                currentPage
            }
        } as const
    )
}
export type SetTotalUsersCountACType = ReturnType<typeof SetTotalUsersCountAC>

export const SetTotalUsersCountAC = (totalCount: number) => {
    return (
        {
            type: SET_TOTAL_USERS_COUNT,
            payload: {
                totalCount
            }
        } as const
    )
}

export type SetIsFetchingACType = ReturnType<typeof SetIsFetchingAC>

export const SetIsFetchingAC = (isFetching: boolean) => {
    return (
        {
            type: TOGGLE_IS_FETCHING,
            payload: {
                isFetching
            }
        } as const
    )
}

export type ToggleFollowingProgressACType = ReturnType<typeof ToggleFollowingProgressAC>

export const ToggleFollowingProgressAC = (isFollowing: boolean, id: number) => {
    return (
        {
            type: TOGGLE_IS_FOLLOWING_PROGRESS,
            payload: {
                isFollowing, id
            }
        } as const
    )
}


export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: any) => {
     dispatch(SetIsFetchingAC(true))
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(SetIsFetchingAC(false))
            dispatch(SetUsersAC(data.items))
            dispatch(SetTotalUsersCountAC(data.totalCount))


            console.log(data.totalCount)

        })
}
export const unFollowTC = (userId: number) => (dispatch: Dispatch) => {
   dispatch(ToggleFollowingProgressAC(true, userId))
    usersAPI.unfollowUser(userId)
        .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(unFollowAC(userId))
                    dispatch(ToggleFollowingProgressAC(false, userId))


                }

            }
        )

}

export const followTC = (userId: number) => (dispatch: Dispatch) => {
   dispatch(ToggleFollowingProgressAC(true, userId))
    usersAPI.followUser(userId)
        .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(followAC(userId))
                    dispatch(ToggleFollowingProgressAC(false, userId))


                }

            }
        )

}



