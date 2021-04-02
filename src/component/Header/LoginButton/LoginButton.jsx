import React from 'react';
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import s from './LoginButton.module.css'

const useStyles = makeStyles((theme) => ({
    button: {
       fontWeight: 600
    },
}));

const LoginButton = () => {
    const classes = useStyles()
    return (
        <div className={s.buttonsContainer}>
            <NavLink to='/login'>
                <Button variant='contained' color='primary' className={classes.button}>
                    войти
                </Button>
            </NavLink>
            <NavLink to='/registration'>
                <Button variant='outlined' color='primary.dark' className={classes.button}>
                    регистрация
                </Button>
            </NavLink>
        </div>
    )
}

export default LoginButton;
