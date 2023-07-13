
const FOLLOW = 'FOLLOW USER'
const UNFOLLOW = 'UNFOLLOW USER'
const SET_USERS = 'SET USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

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
}


const initialState: UsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1

}





export const usersReducer = (state = initialState, action: TotalType): UsersType => {


     switch (action.type) {
         case FOLLOW:

             return {...state, users: state.users.map((el: any)=> el.id === action.payload.userId ? {...el, followed: true} : el)}

         case UNFOLLOW:
             return {...state, users: state.users.map((el: any)=> el.id === action.payload.userId ? {...el, followed: false} : el)}

         case SET_USERS:
            return {...state, users: action.payload.users}

         case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload.currentPage}
         case
         SET_TOTAL_USERS_COUNT:
             // console.log(action.payload.totalCount)
            return {...state, totalUsersCount: action.payload.totalCount / 100}

         default: return state
     }

}
//comment
export type TotalType = FollowActionCreatorACType | UnFollowActionCreatorACType | setUsersACType | setCurrentPageACType | SetTotalUsersCountACType

export type FollowActionCreatorACType = ReturnType<typeof followAC>

export const followAC = (userId: number) => {
    return(
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
    return(
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
    return(
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
    return(
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
    return(
        {
            type: SET_TOTAL_USERS_COUNT,
            payload: {
                totalCount
            }
        } as const
    )
}


