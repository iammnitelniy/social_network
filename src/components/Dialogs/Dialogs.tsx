import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'
import {DialogItem} from "./Dialogitem/Dialogitem";
import {Message} from "./Message/Message";
import {DialogItemType, MessageItemType} from "../../App";
import {
    DialogsPageStateType,
} from "../../redux/store";
import {Redirect} from "react-router-dom";





type DialogsPropsType = {

    updateNewMessageBody: (body: string)=> void
    dialogsPage: DialogsPageStateType
    newMessageClicker: () => void
    isAuth: boolean

};


export const Dialogs = (props: DialogsPropsType) => {


    let state = props.dialogsPage

    const DialogElement =
        state.dialogsData.map((el: DialogItemType) => <DialogItem key={el.id} id={el.id} name={el.name}/>)

    const MessageElement =
        state.messagesData.map((el: MessageItemType) => <Message key={el.id} id={el.id}
                                                             message={el.message}  />)
    const newMessageBody = state.newMessageBody


    const newMessageClickHandler = () => {
        // store.dispatch(sendMessageActionCreator())
        props.newMessageClicker()


    }

    const onChangeMessageHandler= (e: ChangeEvent<HTMLTextAreaElement>) => {

        let body =  e.currentTarget.value
        props.updateNewMessageBody(body)
        // store.dispatch(updateNewMessageBodyCreator(body))


    }

    // if(!props.isAuth) return <Redirect to={'/login'}/>



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

