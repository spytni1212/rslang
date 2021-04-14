import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff'; 
import Form from '../UIKit/Form'

const useStyles = makeStyles({
    content:{
        padding: '1em',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: '1em'
    },
    closeIcon: {
        position: 'absolute',
        top: '5px',
        right: '7px',
        cursor: 'pointer',
        "&:hover": {
            transform: 'scale(1.1)',
        }
    }
})

const Login = (props) => {
const classes = useStyles()

const content = [
    {
        name: 'email',
        placeholder: 'введите почту'
    },
    {
        name: 'password',
        placeholder: 'веедите пароль'
    }
]
    return (
        <div>
            <div className={classes.content}>
                <HighlightOffIcon className={classes.closeIcon} onClick={props.onClose} />
                <h2>Войти в аккаунт</h2>
                <Form onSubmit={props.onSubmit} textfields={content} buttonName="войти" />
            </div>
        </div>
    )
}

export default Login;