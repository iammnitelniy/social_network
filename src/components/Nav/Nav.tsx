import React from 'react';
import classes from './Nav.module.css'

type NavPropsType = {
    names: string[];
}

export function Nav(props: NavPropsType) {
    return (
        <nav className={classes.nav}>

                <div className={classes.item}><a>{props.names[0]}</a></div>
                <div className={classes.item}><a>{props.names[1]}</a></div>
                <div className={classes.item}><a>{props.names[2]}</a></div>
                <div className={classes.item}><a>{props.names[3]}</a></div>
                <div className={classes.item}><a>{props.names[4]}</a></div>



        </nav>
    )
}