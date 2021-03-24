import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios'
import { setUserData } from '../../redux/auth-reducer';
import Registration from './Registration'

class RegistrationContainer extends React.Component {

    onSubmit = (RegistrationData) => {
        axios.post(`https://react-learn-words.herokuapp.com/users`, RegistrationData)
        .then(response => {
            debugger
            let { email, id, name } = response.data;
            this.props.setUserData(email, id, name)
            console.log(response)
        })
        .catch(err => {
            if (err.response.status === 417) {
                console.log('пользователь с таким адресом электронной почты уже существует')
            }
        })
    }

    render() {
        return (
            <Registration onSubmit={this.onSubmit}/>
        )
    }

}

export default connect(null, { setUserData })(RegistrationContainer);