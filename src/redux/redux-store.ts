import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {allProfileActionsType} from "./profileReducer";
import dialogsReducer, {AllDialogsActionsType} from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import {usersReducer, UsersTotalType} from "./usersReducer";
import {authReducer, TotalType} from "./auth-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    auth: authReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export type AppStateType = ReturnType<typeof reducers>

type AppActionsType = allProfileActionsType & AllDialogsActionsType & TotalType & UsersTotalType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>


export type AppDispatchType = ThunkDispatch<AppStateType, unknown, AnyAction>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;