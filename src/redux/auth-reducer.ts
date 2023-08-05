import {Dispatch} from "redux";
import {profileAPI} from "../api/ProfileAPI";
import {SetUserProfileAC} from "./profileReducer";
import {authAPI} from "../api/authAPI";


const SET_USER_DATE = 'SET_USER_DATE'


export type ResponseUserType = {
    "data": {
    "id": number,
        "login": string,
        "email": string
},
    "messages": string[]
    "resultCode": number
}


export type AuthInitialStateType = {
    userId:  null | number

    email:   null | string

    login: null | string
    isAuth: boolean
}


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false

}





export const authReducer = (state = initialState, action: TotalType): AuthInitialStateType => {


     switch (action.type) {
         case SET_USER_DATE:

                return {...state, userId: action.data.data.id, email: action.data.data.email, login: action.data.data.login, isAuth: true}






         default: return state
     }

}
//comment
export type TotalType =  setUserACType

export type setUserACType = ReturnType<typeof setAuthUserAC>

export const setAuthUserAC = (data: ResponseUserType) => {
    return(
        {
            type: SET_USER_DATE,
            data
        } as const
    )
}

export const setAuthUserTC = () => (dispatch: Dispatch) => {


    authAPI.getProfile()
        .then((res: { data: ResponseUserType }) => {
            if (res.data.resultCode === 0) {
               dispatch(setAuthUserAC(res.data))
            }
        })
        .catch((error: any) => {
            console.log(error)
        })
}


