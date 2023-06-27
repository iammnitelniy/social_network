
const FOLLOW = 'FOLLOW USER'
const UNFOLLOW = 'UNFOLLOW USER'
const SET_USERS = 'SET USERS'

export type UserType =
{id: number, photoUrl: string, followed: boolean, fullName: string, status: string, location: {city: string, country: string}}

export type UsersType = {
    users: UserType[]
}


const initialState: UsersType = {
    users: []
}





export const usersReducer = (state = initialState, action: TotalType) => {


     switch (action.type) {
         case FOLLOW:

             return {...state, users: state.users.map(el=> el.id === action.payload.userId ? {...el, followed: true} : el)}

         case UNFOLLOW:
             return {...state, users: state.users.map(el=> el.id === action.payload.userId ? {...el, followed: false} : el)}

         case SET_USERS:
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
export type setUsersACType = ReturnType<typeof setUsersAC>

export const setUsersAC = (users: UserType[]) => {
    return(
        {
            type: SET_USERS,
            payload: {
                users
            }
        } as const
    )
}


