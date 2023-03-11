import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogsPropsType = any;


export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/1">Ilia</NavLink>

                </div>
                <div className={classes.dialog + " " + classes.active}>
                    <NavLink to="/dialogs/2">Regina</NavLink>

                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/3">Kyle</NavLink>

                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/4">Stan</NavLink>

                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/5">Cartman</NavLink>

                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/6">Kenny</NavLink>

                </div>

            </div>
            <div className={classes.messages}>
                <div className={classes.message}>They</div>
                <div className={classes.message}>have killed</div>
                <div className={classes.message}>Kenny</div>
            </div>
        </div>
    )

}

