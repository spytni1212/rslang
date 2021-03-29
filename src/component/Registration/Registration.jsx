import React from 'react';
import RegistrationFrom from './RegistrationForm'

const Registration = (props) => {

    return (
        <div>
            <div className={`wrapper`}>
                <h2>Создание аккаунта</h2>
                <RegistrationFrom  onSubmit={props.onSubmit}/>
            </div>
        </div>
    )
}

export default Registration;