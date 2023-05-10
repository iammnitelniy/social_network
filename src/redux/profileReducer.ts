import {AddPostActionType, ChangeNewTextActionType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST-TEXT';




 const profileReducer = (state: any, action: any) => {

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

export const addPostActionCreator = (text: string): AddPostActionType => {

    return (
        {
            type: ADD_POST,

            postText: text
        }
    )
}
export const updateNewPostTextActionCreator = (newText: string): ChangeNewTextActionType => {

    return (
        {
            type: UPDATE_NEW_POST,
            newText: newText
        }
    )
}

export default profileReducer