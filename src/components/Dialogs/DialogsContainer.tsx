
import {sendMessageActionCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";

import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import React from "react";
import {withRouter} from "react-router-dom";


// type DialogsContainerPropsType = {
//
//
//     // store: StoreType
//     //commit
//     //commit2
//     // state : Array<DialogItemType>
//     // state : Array<MessageItemType>
//
// };
//
//
// export const DialogsContainer = (props: DialogsContainerPropsType) => {
//
//
//
//
//
//     return ( <StoreContext.Consumer>
//         {
//             (store: any) => {
//                 let state = store.getState().dialogsPage
//
//                 const DialogElement =
//                     state.dialogsData.map((el: DialogItemType) => <DialogItem key={el.id} id={el.id} name={el.name}/>)
//
//                 const MessageElement =
//                     state.messagesData.map((el: MessageItemType) => <Message key={el.id} id={el.id}
//                                                             message={el.message}/>)
//                 const newMessageBody = state.newMessageBody
//
//
//                 const newMessageClicker = () => {
//                     store.dispatch(sendMessageActionCreator())
//
//
//                 }
//
//                 const onChangeMessageHandler = (body: string) => {
//
//
//                     store.dispatch(updateNewMessageBodyCreator(body))
//
//
//                 }
//                 return <Dialogs dialogsPage={state} updateNewMessageBody={onChangeMessageHandler}
//                          newMessageClicker={newMessageClicker}/>
//             }
//         }
//     </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        newMessageClicker: (body: string) => {

            dispatch(sendMessageActionCreator(body))
        }
    }
}


export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps),(WithAuthRedirect))(Dialogs)




