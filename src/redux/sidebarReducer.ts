import {SidebarStateType} from "./store";


const initialState: Array<SidebarStateType> = [
    {
        id: 1,
        name: "Leopold"
    },
    {
        id: 2,
        name: "Tolkien"
    },
    {
        id: 3,
        name: "Craig"
    }]

const sidebarReducer = (state =initialState, action: any) => {
    return state
}
 export default sidebarReducer

