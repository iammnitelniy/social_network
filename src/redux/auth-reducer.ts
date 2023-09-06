import {Dispatch} from "redux";
import {profileAPI} from "../api/ProfileAPI";
import {SetUserProfileAC} from "./profileReducer";
import {authAPI} from "../api/authAPI";
import {AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";


const SET_USER_DATE = 'SET_USER_DATE'


export type ResponseUserType = {
    "data": {
    "id": null | number,
        "login": null | string,
        "email": null | string
},
    "messages": string[]
    "resultCode": number
}
//123

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

                return {...state, userId: action.data.data.id, email: action.data.data.email, login: action.data.data.login, isAuth: action.isAuth}






         default: return state
     }

}
//comment
export type TotalType =  setUserACType

export type setUserACType = ReturnType<typeof setAuthUserAC>

export const setAuthUserAC = (data: ResponseUserType, isAuth: boolean) => {
    return(
        {
            type: SET_USER_DATE,
            data, isAuth
        } as const
    )
}

export const setAuthUserTC = () => (dispatch: AuthThunkDispatch) => {


    authAPI.getProfile()
        .then((res: { data: ResponseUserType }) => {
            if (res.data.resultCode === 0) {
               dispatch(setAuthUserAC(res.data, true))
            }
        })
        .catch((error: any) => {
            console.log(error)
        })
}
//update
export const login = (email: any, password: any, rememberMe: any) => (dispatch: any) => {

console.log({ email, password })
    return authAPI.login(email, password, rememberMe)
        .then((res) => {
            console.log({ res })
            if (res.data.resultCode === 0) {
               dispatch(setAuthUserTC())
            }
            else {

                dispatch(stopSubmit('login', {email: res.data.messages}))

            }
        })
        .catch((error: any) => {
            console.log(error)
        })
}
export const logout = () => (dispatch: Dispatch) => {


    authAPI.logout()
        .then((res) => {
            if (res.data.resultCode === 0) {
               dispatch(setAuthUserAC({
                   data: {
                       id: null,
                       login: null,
                       email: null
                   },
                   messages: [],
                   resultCode: 1
               }, false))
            }
        })
        .catch((error: any) => {
            console.log(error)
        })
}


type AuthThunkDispatch = Dispatch<TotalType>


