import {Dispatch} from "redux";
import {setAuthUserTC} from "./auth-reducer";


const SET_INITIALIZED = 'SET_INITIALIZED'



export type InitialStateType = {
    // происходит ли сейчас взаимодействие с сервером
    status?: any
    // если ошибка какая-то глобальная произойдёт - мы запишем текст ошибки сюда
    error?: string | null
    isInitialized: boolean
}

const initialState: InitialStateType = {
    isInitialized: false
}


export const appReducer = (state = initialState, action: TotalType) => {


    switch (action.type) {
        case SET_INITIALIZED:

            return {...state, isInitialized: action.isInitialized}






        default: return state
    }

}
//comment
export type TotalType =  setInitializedACType

export type setInitializedACType = ReturnType<typeof setInitializedAC>

export const setInitializedAC = (isInitialized: boolean) => ({type: 'SET_INITIALIZED', isInitialized} as const)

export const initializeApp = () => (dispatch: any) => {
    dispatch(setAuthUserTC())

        .then (() => {dispatch(setInitializedAC(true))})

}