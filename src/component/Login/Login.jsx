import React from 'react';
import LoginForm from './LoginForm'

const Login = (props) => {

    return (
        <div>
            <div className={`wrapper`}>
                <h2>войти в аккаунт</h2>
                <LoginForm  onSubmit={props.onSubmit}/>
            </div>
        </div>
    )
}

export default Login;