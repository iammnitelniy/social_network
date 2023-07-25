import {AddPostActionType, ChangeNewTextActionType, ProfilePageStateType} from "./store";
import {ProfileFromAPIType} from "../components/Profile/ProfileContainer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState:ProfilePageStateType = {
    postData: [
        {
            id: 1,
            content: "bow",
            countLikes: 12,
            countDislikes: 9
        },
        {
            id: 2,
            content: "wow",
            countLikes: 5,
            countDislikes: 1
        },
        {
            id: 3,
            content: "get",
            countLikes: 7,
            countDislikes: 3
        },
        {
            id: 4,
            content: "down",
            countLikes: 9,
            countDislikes: 0
        }


    ],
    newPostText: "",
    profile: null

}


const profileReducer = (state = initialState, action: allProfileActionsType): ProfilePageStateType=> {

     switch (action.type) {
         case ADD_POST:
             let newPost = {
                 id: 5,
                 content: state.newPostText,
                 countLikes: 0,
                 countDislikes: 0
             }

             return {...state, postData: [newPost, ...state.postData], newPostText: ""}

         case UPDATE_NEW_POST:

             return {...state, newPostText: action.newText}

         case SET_USER_PROFILE:
             return {...state, profile: action.profile}

         default:
             return state
     }


 }

type allProfileActionsType = addPostACType | updateNewPostTextACType | SetUserProfileACType

export type addPostACType = ReturnType<typeof addPostActionCreator>

export const addPostActionCreator = (text: string): AddPostActionType => {

    return (
        {
            type: ADD_POST,

            postText: text
        }
    )
}

export type updateNewPostTextACType = ReturnType<typeof updateNewPostTextActionCreator>

export const updateNewPostTextActionCreator = (newText: string) => {

    return (
        {
            type: UPDATE_NEW_POST,
            newText
        }  as const
    )


}

export type SetUserProfileACType = ReturnType<typeof SetUserProfileAC>
export const SetUserProfileAC = (profile: ProfileFromAPIType) => {

    return (
        {
            type: SET_USER_PROFILE,
            profile
        } as const

    )
}

export default profileReducer