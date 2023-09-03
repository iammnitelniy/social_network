import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../FormsControls/FormControls";
import {required} from "../utils/validator";
import {connect} from "react-redux";


type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    logout: () => void
}

export const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }


    //update2
    return (

        <div>


            <h1>
                Login
            </h1>

            <LoginReduxForm onSubmit={onSubmit}/>


        </div>
    );
};


export type LoginFormPropsType = {
    handleSubmit: any
}

export const LoginForm = (props: LoginFormPropsType) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <Field placeholder={'Login'} name={"email"} validate={[required]} component={Input}/>

            </div>
            <div>

                <Field placeholder={'Password'} name={"password"} type={'password'} validate={[required]} component={Input}/>

            </div>
            <div>

                <Field type={'checkbox'} name={'rememberMe'} component={'input'}/>

            </div>
            <div>

                <button>Login</button>


            </div>

        </form>

    );
};




const LoginReduxForm = reduxForm<any>({
    form: 'login'
})(LoginForm)










