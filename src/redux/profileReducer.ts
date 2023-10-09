import {AddPostActionType} from "./store";
import {ProfileFromAPIType} from "../components/Profile/ProfileContainer";
import {Dispatch} from "redux";
import {profileAPI} from "../api/ProfileAPI";
import {PostItemType} from "../components/Profile/Profile";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';
const SET_AVATAR = 'SET_AVATAR';


export type ProfilePageStateTypeRedux =  {
    postData: Array<PostItemType>
    profile: any,
    status: string

}

let initialState = {
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
    profile: {
        photos: ''
    },
    status: ""

}


const profileReducer = (state = initialState, action: allProfileActionsType): ProfilePageStateTypeRedux=> {

     switch (action.type) {
         case ADD_POST:
             let newPost = {
                 id: 5,
                 content: action.postText,
                 countLikes: 0,
                 countDislikes: 0
             }

             return {...state, postData: [newPost, ...state.postData]}


         case SET_USER_PROFILE:
             return {...state, profile: action.profile}

         case SET_PROFILE_STATUS:
             return {...state, status: action.status}

         case SET_AVATAR:
             return {...state, profile: {...state.profile, photos: action.photos}}

         default:
             return state
     }


 }

export type allProfileActionsType = addPostACType  | SetUserProfileACType | SetProfileStatusACType | saveAvatarSuccessACType

export type addPostACType = ReturnType<typeof addPostActionCreator>

export const addPostActionCreator = (text: string): AddPostActionType => {

    return (
        {
            type: ADD_POST,

            postText: text
        }
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

export type SetProfileStatusACType = ReturnType<typeof SetProfileStatusAC>
export const SetProfileStatusAC = (status: string) => {

    return (
        {
            type: SET_PROFILE_STATUS,
            status
        } as const

    )
}

export type saveAvatarSuccessACType = ReturnType<typeof saveAvatarSuccess>
export const saveAvatarSuccess = (photos: any) => {

    return (
        {
            type: SET_AVATAR,
            photos
        } as const

    )
}






export const getUserProfileTC = (userId: string) => (dispatch: Dispatch) => {

    profileAPI.getProfile(userId)
        .then((response) => {
            dispatch(SetUserProfileAC(response.data))
        })
}

export const getProfileStatusTC = (userId: string) => (dispatch: Dispatch) => {

    profileAPI.getStatus(userId)
        .then((response) => {

            dispatch(SetProfileStatusAC(response.data))
        })
}
export const updateProfileStatusTC = (status: string) => (dispatch: Dispatch) => {

    profileAPI.updateStatus(status)
        .then((response) => {
            if(response.data.resultCode === 0) {
                dispatch(SetProfileStatusAC(status))
            }
        })
}
export const savePhotoTC = (file: any)  => async (dispatch: Dispatch) => {

  const res = await profileAPI.savePhoto(file)
        try {
            if(res.data.resultCode === 0 ) {
                dispatch(saveAvatarSuccess(res.data.data.photos))
            }
        }
        catch (e) {
            console.error(e)
        }
}




export default profileReducer