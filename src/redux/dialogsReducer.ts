import {AddNewMessageBodyType, SendMessageType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

 const dialogsReducer = (state: any, action: any) => {


     switch (action.type) {
         case UPDATE_NEW_MESSAGE_BODY:
             state.newMessageBody = action.body
             return state;
         case SEND_MESSAGE:
             let body = state.newMessageBody
             state.newMessageBody = ""
             state.messagesData.push({
                 id: 3,
                 message: body,
             })
             return state;
         default: return state
     }

}


export const sendMessageActionCreator = (): SendMessageType => {


    return (
        {
            type: SEND_MESSAGE,

        }
    )
}
export const updateNewMessageBodyCreator = (body: string): AddNewMessageBodyType => {
    return (
        {
            type: UPDATE_NEW_MESSAGE_BODY,
            body: body
        }
    )
}

export default dialogsReducer