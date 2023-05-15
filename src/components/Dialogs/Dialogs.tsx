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

} from "../../redux/state";
import {useRef} from "react";
import {sendMessageActionCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";




type DialogsPropsType = {



    store: StoreType
        //commit
        //commit2
    // state : Array<DialogItemType>
    // state : Array<MessageItemType>

};


export const Dialogs = (props: DialogsPropsType) => {


    let state = props.store.getState().dialogsPage

    const DialogElement =
        state.dialogsData.map((el) => <DialogItem key={el.id} id={el.id} name={el.name}/>)

    const MessageElement =
        state.messagesData.map((el) => <Message key={el.id} id={el.id}
                                                             message={el.message}  />)
    const newMessageBody = state.newMessageBody


    const newMessageClickHandler = (e:MouseEvent<HTMLButtonElement>) => {
        props.store.dispatch(sendMessageActionCreator())



    }

    const onChangeMessageHandler= (e: ChangeEvent<HTMLTextAreaElement>) => {

        let body =  e.currentTarget.value

        props.store.dispatch(updateNewMessageBodyCreator(body))


    }



    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>

                    {DialogElement}


                </div>
                <div className={classes.dialog}>

                </div>

            </div>
            <div className={classes.messages}>
                <div>{MessageElement}</div>

                <textarea value={newMessageBody}
                          onChange={onChangeMessageHandler}
                          placeholder="Enter your message"
                ></textarea>
                <div>
                    <button onClick={newMessageClickHandler}>Send</button>
                </div>
            </div>
        </div>
    )

}

