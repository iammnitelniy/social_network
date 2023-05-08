import React, {ChangeEvent, LegacyRef} from 'react';
import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {MouseEvent} from "react";
import {
    ActionTypes,
    DialogsPageStateType, sendMessageActionCreator,
    updateNewMessageBodyCreator,
    updateNewPostTextActionCreator
} from "../../../redux/state";


type MessagePropsType = {
    stateDialogs: DialogsPageStateType
    message: string;
    id: number;
    dispatch: (action: ActionTypes)=> void

}



export const Message = (props: MessagePropsType) => {




    const newMessageClickHandler = (e:MouseEvent<HTMLButtonElement>) => {
        props.dispatch(sendMessageActionCreator())

    }

    const onChangeMessageHandler= (e: ChangeEvent<HTMLTextAreaElement>) => {
       let body =  e.currentTarget.value
        props.dispatch(updateNewMessageBodyCreator(body))
    }

    return (

        <div className={classes.message + props.id}>{props.message}

            <div><textarea value={props.stateDialogs.newMessageBody}
                           onChange={onChangeMessageHandler}
                           placeholder="Enter your message"
                           ></textarea></div>
            <div>
                <button onClick={newMessageClickHandler}>Send</button>
            </div>
        </div>

    )
}

