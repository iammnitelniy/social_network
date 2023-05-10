import React from 'react';
import classes from './Sidebar.module.css'
import {SidebarStateType} from "../../redux/state";

type SidebarPropsType = {
    sidebar: Array<SidebarStateType>
}



export function Sidebar(props:SidebarPropsType) {
    console.log(props.sidebar)
    return (
        <div>

          {props.sidebar.map((el)=><span>{el.name}</span>)}
        </div>

    )
}