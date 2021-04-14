import React from 'react'
import { Form, Field } from 'react-final-form'
import { Input } from '../../common/FormsControls'
import Button from '@material-ui/core/Button';
import s from '../Registration/RegistrationForm.module.css'

const FormComponent = (props) => {
    const fields = props.textfields.map(textfield => {
        return <Field
            name={textfield.name}
            component={Input}
            type={textfield.name === 'password' ? 'password' : 'text'}
            placeholder={textfield.placeholder}
        />
    })
    const btnName = props.buttonName
    console.log(props)
    return (
        <Form
            onSubmit={props.onSubmit}
        >
            {(props) =>
            (
                <form onSubmit={props.handleSubmit} className={s.formContainer}>
                    {fields}
                    <Button
                        type='submit'
                        variant='contained'
                        color='primary'
                        className={s.submitBtn}
                    >
                        {btnName}
                    </Button>
                </form>
            )}
        </Form>
    )
}
export default FormComponent