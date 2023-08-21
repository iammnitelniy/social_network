import React from 'react';
import {Field, reduxForm} from "redux-form";


type LoginPropsType = {

}

export const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: any) => {
        console.log(formData)
    }

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
                <Field placeholder={'Login'} name={"login"} component={'input'}/>

            </div>
            <div>

                <Field placeholder={'Password'} name={"password"} component={'input'}/>

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









