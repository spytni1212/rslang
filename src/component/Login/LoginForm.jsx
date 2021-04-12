import React from 'react';
import { Form, Field } from 'react-final-form'

const LoginForm = (props) => {
    console.log(props)
    return (
        <Form
            onSubmit={props.onSubmit}
        >          
            {(props) => (
                
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <Field  
                            name='email'
                            component='input'
                            type='text'
                            placeholder='введите почту' 
                        />
                    </div>
                    <div>
                        <Field 
                            name='password' 
                            component='input'
                            type='text'
                            placeholder='веедите пароль' 
                        />
                    </div>
                    <div>
                        <button
                            type='submit'
                        >
                            войти
                        </button>
                    </div>
                </form>
            )}
        </Form>
    )
}


export default LoginForm;