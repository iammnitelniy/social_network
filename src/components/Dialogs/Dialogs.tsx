import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./Dialogitem/Dialogitem";
import {Message} from "./Message/Message";
import {DialogItemType, MessageItemType} from "../../App";


type DialogsPropsType = {
    dialogs : Array<DialogItemType>
    messages : Array<MessageItemType>

};




export const Dialogs = (props: DialogsPropsType) => {



    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>

                    {props.dialogs.map((el)=> <DialogItem key={el.id} id={el.id} name={el.name} />)}



                </div>
                <div className={classes.dialog}>

                </div>

            </div>
            <div className={classes.messages}>
                {props.messages.map((el)=> <Message key={el.id} id={el.id} message={el.message} />)}

            </div>
        </div>
    )

}

