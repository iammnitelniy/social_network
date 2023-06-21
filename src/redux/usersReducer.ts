
const FOLLOW = 'FOLLOW USER'
const UNFOLLOW = 'UNFOLLOW USER'
const SET_USERS = 'SET USERS'

export type UserType =
{id: number, followed: boolean, fullName: string, status: string, location: {city: string, country: string}}

export type UsersType = {
    users: UserType[]
}


const initialState: UsersType = {
    users: [
        {id: 1, followed: false, fullName: 'Dmitriy', status: 'top', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, followed: true, fullName: 'Dmitriy', status: 'top2', location: {city: 'Moscow', country: 'Russia'}},
        {id: 3, followed: false, fullName: 'Dmitriy', status: 'top3', location: {city: 'Kiev', country: 'Ukraine'}}
    ]
}





export const usersReducer = (state = initialState, action: TotalType) => {


     switch (action.type) {
         case FOLLOW:

             return {...state, users: state.users.map(el=> el.id === action.payload.userId ? {...el, followed: true} : el)}

         case UNFOLLOW:
             return {...state, users: state.users.map(el=> el.id === action.payload.userId ? {...el, followed: false} : el)}

         case SET_USERS:
             // return {...state, users: [...state.users, ...action.payload.users]}

         default: return state
     }

}

export type TotalType = FollowActionCreatorACType | UnFollowActionCreatorACType

export type FollowActionCreatorACType = ReturnType<typeof followActionCreator>

export const followActionCreator = (userId: number) => {
    return(
        {
            type: FOLLOW,
            payload: {
                userId
            }
        }
    )
}

export type UnFollowActionCreatorACType = ReturnType<typeof unFollowActionCreator>

export const unFollowActionCreator = (userId: number) => {
    return(
        {
            type: UNFOLLOW,
            payload: {
                userId
            }
        }
    )
}
export type setUsersACType = ReturnType<typeof setUsersActionCreator>

export const setUsersActionCreator = (users: any) => {
    return(
        {
            type: SET_USERS,
            payload: {
                users
            }
        }
    )
}


