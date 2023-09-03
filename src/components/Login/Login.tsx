import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../FormsControls/FormControls";
import {required} from "../utils/validator";


type LoginPropsType = {

}

export const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: any) => {
        console.log(formData)
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
                <Field placeholder={'Login'} name={"login"} validate={[required]} component={Input}/>

            </div>
            <div>

                <Field placeholder={'Password'} name={"password"} validate={[required]} component={Input}/>

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









