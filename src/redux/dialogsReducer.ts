import {AddNewMessageBodyType, DialogsPageStateType, SendMessageType} from "./store";
import {addPostActionCreator} from "./profileReducer";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState:DialogsPageStateType = {
    dialogsData: [
        {
            id: 1,
            name: "Ilia",
        },
        {
            id: 2,
            name: "Regina",
        },
        {
            id: 3,
            name: "Kyle",
        },
        {
            id: 4,
            name: "Stan",
        },
        {
            id: 5,
            name: "Cartman",
        },
        {
            id: 6,
            name: "Kenny",
        }


    ],

    messagesData: [
        {
            id: 1,
            message: "",
        },
        {
            id: 2,
            message: "",
        },
        {
            id: 3,
            message: "",
        }


    ],


}


 const dialogsReducer = (state = initialState, action: AllDialogsActionsType) => {


     switch (action.type) {

         case SEND_MESSAGE:


        return  {...state, messagesData: [...state["messagesData"], {id: 4, message: action.body}]}




         default: return state
     }

}


export type AllDialogsActionsType = SendMessageACType
export type SendMessageACType = ReturnType<typeof sendMessageActionCreator>

export const sendMessageActionCreator = (body: string) => {


    return (
        {
            type: SEND_MESSAGE,
            body: body

        }
    )
}



export default dialogsReducer