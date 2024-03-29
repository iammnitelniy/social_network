import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'
import {DialogItem} from "./Dialogitem/Dialogitem";
import {Message} from "./Message/Message";
import {DialogItemType, MessageItemType} from "../../App";
import {
    DialogsPageStateType,
} from "../../redux/store";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../utils/validator";
import {TextArea} from "../FormsControls/FormControls";





type DialogsPropsType = {


    dialogsPage: DialogsPageStateType
    newMessageClicker: (body: string) => void
    isAuth: boolean

};




export const Dialogs = (props: DialogsPropsType) => {


    let state = props.dialogsPage

    const DialogElement =
        state.dialogsData.map((el: DialogItemType) => <DialogItem key={el.id} id={el.id} name={el.name}/>)

    const MessageElement =
        state.messagesData.map((el: MessageItemType) => <Message key={el.id} id={el.id}
                                                             message={el.message}  />)


    const addMessage = (values: any) => {
        // store.dispatch(sendMessageActionCreator())
        props.newMessageClicker(values.newMessageBody)

    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>

                    {DialogElement}


                </div>
                <div className={classes.dialog}>

                </div>

            </div>



            <div className={classes.messages}>
                <div>{MessageElement}</div>


               <AddMessageFormRedux onSubmit={addMessage}/>


            </div>



        </div>
    )

}



const maxLength30 = maxLengthCreator(30)

export const AddMessageForm = (props: any) => {

    const maxLength10 = maxLengthCreator(10)

    return (
        <form onSubmit={props.handleSubmit}>

            <Field component={TextArea} name='newMessageBody'
                   validate={[required, maxLength30]} placeholder='Enter your message'/>



            <div>
                <button>Send</button>
            </div>
        </form>


    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

