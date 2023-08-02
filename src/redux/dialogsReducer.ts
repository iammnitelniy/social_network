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
    newMessageBody: ""

}


 const dialogsReducer = (state = initialState, action: AllDialogsActionsType) => {


     switch (action.type) {
         case UPDATE_NEW_MESSAGE_BODY:

             return {...state, newMessageBody: action.body}
         case SEND_MESSAGE:
             let body = state.newMessageBody
             state.newMessageBody = ""
             state.messagesData.push({
                 id: 3,
                 message: body,
             })


             return {...state, messagesData: [...state.messagesData, {id: 3, message: state.newMessageBody}], newMessageBody: ""}
         default: return state
     }

}


export type AllDialogsActionsType = SendMessageACType | UpdateNewMessageBodyACType
export type SendMessageACType = ReturnType<typeof sendMessageActionCreator>

export const sendMessageActionCreator = (): SendMessageType => {


    return (
        {
            type: SEND_MESSAGE,

        }
    )
}

export type UpdateNewMessageBodyACType = ReturnType<typeof updateNewMessageBodyCreator>

export const updateNewMessageBodyCreator = (body: string): AddNewMessageBodyType => {
    return (
        {
            type: UPDATE_NEW_MESSAGE_BODY,
            body: body
        }
    )
}

export default dialogsReducer