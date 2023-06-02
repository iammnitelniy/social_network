import {AddPostActionType, ChangeNewTextActionType, ProfilePageStateType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST-TEXT';

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
    newPostText: ""
}


 const profileReducer = (state = initialState, action: allProfileActionsType) => {

     switch (action.type) {
         case ADD_POST:
             let newPost = {
                 id: 5,
                 content: state.newPostText,
                 countLikes: 0,
                 countDislikes: 0
             }


             state.postData.push(newPost)
             state.newPostText = ""
             return state
         case UPDATE_NEW_POST:
             state.newPostText = action.newText
             return state
         default: return state
     }


}

type allProfileActionsType = addPostACType | updateNewPostTextACType

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
export const updateNewPostTextActionCreator = (newText: string): ChangeNewTextActionType => {

    return (
        {
            type: UPDATE_NEW_POST,
            newText: newText
        }
    )
}

export default profileReducer