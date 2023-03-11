import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogsPropsType = any;
type DialogItemPropsType = {
    name: string;
    id: number;

}
type MessagePropsType = {
    content: string;
}


const DialogItem = (props: DialogItemPropsType) => {
    return (

        <div className={classes.dialog + " " + classes.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>

        </div>

    )
}
const Message = (props: MessagePropsType) => {
    return (

        <div className={classes.message}>{props.content}</div>

    )
}


export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>

                    <DialogItem name={"Ilia"} id={1}/>
                    <DialogItem name={"Regina"} id={2}/>
                    <DialogItem name={"Kyle"} id={3}/>
                    <DialogItem name={"Stan"} id={4}/>
                    <DialogItem name={"Cartman"} id={5}/>
                    <DialogItem name={"Kenny"} id={6}/>

                </div>
                <div className={classes.dialog}>

                </div>

            </div>
            <div className={classes.messages}>
                <Message content={"They"} />
                <Message content={"killed"} />
                <Message content={"Kenny"} />
            </div>
        </div>
    )

}

