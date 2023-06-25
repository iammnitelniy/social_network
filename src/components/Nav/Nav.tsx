import React from 'react';
import classes from './Nav.module.css'
import {NavLink} from "react-router-dom";

type NavPropsType = {
    names: string[];
}

export function Nav(props: NavPropsType) {
    return (
        <nav className={classes.nav}>

            <div className={classes.item}><NavLink to="/profile" activeClassName={classes.active}>{props.names[0]}</NavLink></div>
            <div className={classes.item}><NavLink to="/dialogs" activeClassName={classes.active}>{props.names[1]}</NavLink></div>
                <div className={classes.item}><NavLink to="/news" activeClassName={classes.active}>{props.names[2]}</NavLink></div>
                <div className={classes.item}><NavLink to="/music" activeClassName={classes.active}>{props.names[3]}</NavLink></div>
                <div className={classes.item}><NavLink to="/settings" activeClassName={classes.active}>{props.names[4]}</NavLink></div>
                <div className={classes.item}><NavLink to="/users" activeClassName={classes.active}>{props.names[5]}</NavLink></div>



        </nav>
    )

/*    {`${classes.item} ${classes.active}`}*/
}