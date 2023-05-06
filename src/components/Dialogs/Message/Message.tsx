import React, {LegacyRef} from 'react';
import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {MouseEvent} from "react";


type MessagePropsType = {
    message: string;
    id: number;
}



export const Message = (props: MessagePropsType) => {

    let newMessageElement:any = React.createRef()

    const newMessageHandler = (e:MouseEvent<HTMLButtonElement>) => {
        let text

        if (newMessageElement.current !== null) {
            text = newMessageElement.current.value
        }
        alert(text)

    }



    return (

        <div className={classes.message + props.id}>{props.message}

            <textarea ref={newMessageElement}></textarea> <button onClick={newMessageHandler}>+</button>
        </div>

    )
}

