import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '../../UIKit/Modal/Modal'
import RegistrationContainer from '../../Registration/RegistrationContainer'
import LoginContainer from '../../Login/LoginContainer'
import s from './LoginButton.module.css'

const useStyles = makeStyles((theme) => ({
    button: {
        fontWeight: 600
    },
    darkButton: {
        color: theme.palette.primary.dark
    }
}));

const LoginButton = () => {
    const classes = useStyles()
    // start pop-up
    const [open, setOpen] = useState(false);
    const [isRegistration, setIsRegistration] = useState(true)
    const handleOpen = (value) => {
        setIsRegistration(value)
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={s.buttonsContainer}>
            <Modal
                isOpen={open}
                children={
                    isRegistration 
                    ? <RegistrationContainer onClose={handleClose} /> 
                    : <LoginContainer onClose={handleClose} />
                }
            />
            <Button 
                variant='contained' 
                color='primary' 
                className={classes.button}
                onClick={e => handleOpen(false)}
                >
                войти
            </Button>
            <Button
                variant='outlined'
                // color='primary'
                className={`${classes.button} ${classes.darkButton}`}
                onClick={e => handleOpen(true)}
            >
                регистрация
                </Button>
        </div>
    )
}

export default LoginButton;
