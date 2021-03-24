import React from 'react';
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';
import s from './LoginButton.module.css'

const LoginButton = () => {
    return (
        <div className={s.buttonsContainer}>
            <NavLink to='/login'>
                <Button variant='contained' color='primary'>
                    войти
                </Button>
            </NavLink>
            <NavLink to='/registration'>
                <Button variant='contained' color='primary'>
                    регистрация
                </Button>
            </NavLink>
        </div>
    )
}

export default LoginButton;
