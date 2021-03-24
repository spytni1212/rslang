import React from 'react';
import { Form, Field } from 'react-final-form'

const RegistrationForm = (props) => {
    return (
        <Form
            onSubmit={props.onSubmit}
        >          
            {(props) => (
                
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <Field 
                            name='name'
                            component='input'
                            type='text'
                            placeholder='введите имя' 
                        />
                    </div>
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
                            создать
                        </button>
                    </div>
                </form>
            )}
        </Form>
    )
}


export default RegistrationForm;