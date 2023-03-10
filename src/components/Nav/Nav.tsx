import React from 'react';
import classes from './Nav.module.css'
import {NavLink} from "react-router-dom";

type NavPropsType = {
    names: string[];
}

export function Nav(props: NavPropsType) {
    return (
        <nav className={classes.nav}>

            <div className={`${classes.item} ${classes.active}`}><NavLink to="/profile">{props.names[0]}</NavLink></div>
            <div className={classes.item}><NavLink to="/dialogs">{props.names[1]}</NavLink></div>
                <div className={classes.item}><NavLink to="/news">{props.names[2]}</NavLink></div>
                <div className={classes.item}><NavLink to="/music">{props.names[3]}</NavLink></div>
                <div className={classes.item}><NavLink to="/settings">{props.names[4]}</NavLink></div>



        </nav>
    )
}