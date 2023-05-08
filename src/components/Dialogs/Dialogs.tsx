import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./Dialogitem/Dialogitem";
import {Message} from "./Message/Message";
import {DialogItemType, MessageItemType} from "../../App";
import {ActionTypes, DialogsPageStateType} from "../../redux/state";
import {useRef} from "react";


type DialogsPropsType = {

    stateDialogs: DialogsPageStateType
    dispatch: (action: ActionTypes)=> void

    // state : Array<DialogItemType>
    // state : Array<MessageItemType>

};


export const Dialogs = (props: DialogsPropsType) => {


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>

                    {props.stateDialogs.dialogsData.map((el) => <DialogItem key={el.id} id={el.id} name={el.name}/>)}


                </div>
                <div className={classes.dialog}>

                </div>

            </div>
            <div className={classes.messages}>
                <div>{props.stateDialogs.messagesData.map((el) => <Message key={el.id} id={el.id} dispatch={props.dispatch}
                                                                           message={el.message} stateDialogs={props.stateDialogs}/>)}</div>


            </div>
        </div>
    )

}

