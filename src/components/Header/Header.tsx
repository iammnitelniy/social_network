import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    auth: any
}

export function Header(props: HeaderPropsType) {
    return (
        <header className={classes.header}>
            <div><img
                src={'https://media.istockphoto.com/id/1371958166/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D1%81%D1%82%D0%BA%D0%B8-%D0%B2-%D0%BA%D1%80%D1%83%D0%B3%D1%83-%D0%B4%D0%B5%D1%80%D0%B6%D0%B0%D1%82-%D0%B2-%D1%80%D1%83%D0%BA%D0%B0%D1%85-%D1%81%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD%D1%8B-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D0%B8%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80%D0%BD%D1%8B%D0%B5-%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D1%8B%D0%B5-%D0%BB%D1%8E%D0%B4%D0%B8-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D1%83%D1%8E%D1%89%D0%B8%D0%B5.jpg?s=1024x1024&w=is&k=20&c=ZCi9F1KxZ-9PDgC02wMNRCNQ8iv1zjgrEtZNGKL11Xk='}
                alt="content"/></div>

            <div className={classes.loginBlock}>
                {props.auth.isAuth ?
                    props.auth.login :

                    <NavLink to={'/login'}>Login</NavLink>

                }
            </div>
        </header>
    )
}
