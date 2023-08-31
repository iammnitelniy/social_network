import React, {ChangeEvent, LegacyRef} from 'react';
import classes from './../Dialogs.module.css'



type MessagePropsType = {

    message: string;
    id: number;


}



export const Message = (props: MessagePropsType) => {





    return (

        <div className={classes.message + props.id}>{props.message}

            {/*<div>{props.message}</div>*/}

        </div>

    )
}

