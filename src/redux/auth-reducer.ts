

const SET_USER_DATE = 'SET_USER_DATE'

type initialStateType = {
    userId: null | string
    email: null | string
    login: null | string

}


const initialState = {
    userId: null,
    email: null,
    login: null

}





export const authReducer = (state = initialState, action: TotalType): initialStateType => {


     switch (action.type) {
         case SET_USER_DATE:
                return action.data





         default: return state
     }

}
//comment
export type TotalType =

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


