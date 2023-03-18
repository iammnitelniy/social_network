import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogsPropsType = any;
type DialogItemPropsType = {
    name: string;
    id: number;

}
type MessagePropsType = {
    message: string;
}
type DialogItemType = {
    id: number
    name: string
}
type MessageItemType= {
    id: number
    message: string
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

        <div className={classes.message}>{props.message}</div>

    )
}


export const Dialogs = (props: DialogsPropsType) => {
    let dialogsData: Array<DialogItemType> = [
        {
            id: 1,
            name: "Ilia",
        },
        {
            id: 2,
            name: "Regina",
        },
        {
            id: 3,
            name: "Kyle",
        },
        {
            id: 4,
            name: "Stan",
        },
        {
            id: 5,
            name: "Cartman",
        },
        {
            id: 6,
            name: "Kenny",
        }


    ]
    let messagesData: Array<MessageItemType> = [
        {
            id: 1,
            message: "They",
        },
        {
            id: 2,
            message: "killed",
        },
        {
            id: 3,
            message: "Kenny",
        }


    ]
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>

                    {dialogsData.map((el)=> <DialogItem key={el.id} id={el.id} name={el.name} />)}


                </div>
                <div className={classes.dialog}>

                </div>

            </div>
            <div className={classes.messages}>
                {messagesData.map((el)=> <DialogItem key={el.id} id={el.id} name={el.message} />)}

            </div>
        </div>
    )

}

