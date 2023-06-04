import React, {ChangeEvent, MouseEvent} from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./Dialogitem/Dialogitem";
import {Message} from "./Message/Message";
import {DialogItemType, MessageItemType} from "../../App";
import {
    ActionTypes,
    DialogsPageStateType,
    StoreType,

} from "../../redux/store";
import {useRef} from "react";
import {sendMessageActionCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import store from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";


type DialogsContainerPropsType = {


    // store: StoreType
    //commit
    //commit2
    // state : Array<DialogItemType>
    // state : Array<MessageItemType>

};


export const DialogsContainer = (props: DialogsContainerPropsType) => {





    return ( <StoreContext.Consumer>
        {
            (store: any) => {
                let state = store.getState().dialogsPage

                const DialogElement =
                    state.dialogsData.map((el: DialogItemType) => <DialogItem key={el.id} id={el.id} name={el.name}/>)

                const MessageElement =
                    state.messagesData.map((el: MessageItemType) => <Message key={el.id} id={el.id}
                                                            message={el.message}/>)
                const newMessageBody = state.newMessageBody


                const newMessageClicker = () => {
                    store.dispatch(sendMessageActionCreator())


                }

                const onChangeMessageHandler = (body: string) => {


                    store.dispatch(updateNewMessageBodyCreator(body))


                }
                return <Dialogs dialogsPage={state} updateNewMessageBody={onChangeMessageHandler}
                         newMessageClicker={newMessageClicker}/>
            }
        }
    </StoreContext.Consumer>
    )
}

