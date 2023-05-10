import React, {ChangeEvent, LegacyRef} from 'react';
import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {MouseEvent} from "react";
import {
     sendMessageActionCreator,
    updateNewMessageBodyCreator,

} from "../../../redux/dialogsReducer";


type MessagePropsType = {

    message: string;
    id: number;


}



export const Message = (props: MessagePropsType) => {





    return (

        <div className={classes.message + props.id}>{props.message}

            {/*<div>{props.message}</div>*/}

        </div>

    )
}

