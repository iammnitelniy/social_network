import React from 'react';
import classes from './Header.module.css'

type HeaderPropsType = {
    content: string;
}

export function Header(props: HeaderPropsType) {
    return (
        <header className={classes.header}>
            <img src={props.content} alt="content"/>
        </header>
    )
}
