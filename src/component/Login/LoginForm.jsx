import React from 'react';
import { Form, Field } from 'react-final-form'
import Button from '@material-ui/core/Button';
import s from '../Registration/RegistrationForm.module.css'

const LoginForm = (props) => {
    return (
        <Form
            onSubmit={props.onSubmit}
        >
            {(props) => (

                <form onSubmit={props.handleSubmit} className={s.formContainer}>
                    <Field
                        name='email'
                        component='input'
                        type='text'
                        placeholder='введите почту'
                    />
                    <Field
                        name='password'
                        component='input'
                        type='text'
                        placeholder='веедите пароль'
                    />
                    <Button
                        type='submit'
                        variant='contained'
                        color='primary'
                        className={s.submitBtn}
                    >
                        войти
                    </Button>
                </form>
            )}
        </Form>
    )
}


export default LoginForm;