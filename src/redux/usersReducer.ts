
const FOLLOW = 'FOLLOW USER'
const UNFOLLOW = 'UNFOLLOW USER'
const SET_USERS = 'SET USERS'

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
    totalUsersCount: 50,
    currentPage: 5

}





export const usersReducer = (state = initialState, action: TotalType) => {


     switch (action.type) {
         case FOLLOW:

             return {...state, users: state.users.map((el: any)=> el.id === action.payload.userId ? {...el, followed: true} : el)}

         case UNFOLLOW:
             return {...state, users: state.users.map((el: any)=> el.id === action.payload.userId ? {...el, followed: false} : el)}

         case SET_USERS:
             console.log(action.payload.users)
            return {...state, users: [...state.users, ...action.payload.users]}

         default: return state
     }

}
//comment
export type TotalType = FollowActionCreatorACType | UnFollowActionCreatorACType | setUsersACType

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


