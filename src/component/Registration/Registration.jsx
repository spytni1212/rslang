import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Form from '../../component/UIKit/Form'

const useStyles = makeStyles({
    content: {
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

const Registration = (props) => {
    const classes = useStyles()
    const registrationInfo = [
        {
            name: 'name',
            placeholder: 'введите имя'
        },
        {
            name: 'email',
            placeholder: 'введите почту'
        },
        {
            name: 'password',
            placeholder: 'введите пароль'
        }
    ]
    return (
        <div>
            <div className={classes.content}>
                <HighlightOffIcon onClick={props.onClose} className={classes.closeIcon} />
                <h2>Создание аккаунта</h2>
                <Form onSubmit={props.onSubmit} textfields={registrationInfo} buttonName='создать' />
            </div>
        </div>
    )
}

export default Registration;