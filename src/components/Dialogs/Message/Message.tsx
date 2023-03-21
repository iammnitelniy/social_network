import React from 'react';
import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";



type MessagePropsType = {
    message: string;
    id: number;
}



export const Message = (props: MessagePropsType) => {
    return (

        <div className={classes.message + props.id}>{props.message}</div>

    )
}

