import React from 'react';

type LoginPropsType = {

}


export const Login = (props: LoginPropsType) => {
    return (

        <div>


    <h1>
        Login
    </h1>

            <LoginForm />


        </div>
);
};


export type LoginFormPropsType = {

}

export const LoginForm = (props: LoginFormPropsType) => {
    return (
        <form>

            <div>
                <input placeholder={'Login'}/>

            </div>
            <div>

                <input placeholder={'Password'}/>

            </div>
            <div>

                <input type={'checkbox'}/>

            </div>
            <div>

                <button>Login</button>


            </div>

        </form>

    );
};



