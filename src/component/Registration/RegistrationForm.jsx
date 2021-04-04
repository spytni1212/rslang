import React from 'react';
import { Input } from '../../common/FormsControls'
import { Form, Field } from 'react-final-form'
import { required } from '../../utils/validators'
import s from './RegistrationForm.module.css'

const RegistrationForm = (props) => {
    return (
        <Form
            onSubmit={props.onSubmit}
        >          
            {(props) => (
                
                <form onSubmit={props.handleSubmit} className={s.formContainer}>
                    <div>
                        <Field 
                            name='name'
                            component={Input}
                            validate={required}
                            type='text'
                            placeholder='введите имя' 
                        />
                    </div>
                    <div>
                        <Field 
                            name='email'
                            component={Input}
                            validate={required}
                            type='text'
                            placeholder='введите почту' 
                        />
                    </div>
                    <div>
                        <Field 
                            name='password' 
                            component={Input}
                            validate={required}
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