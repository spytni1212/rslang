import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios'
import { setUserData, setToken } from '../../redux/auth-reducer';
import Login from './Login'

class LoginContainer extends React.Component {


    onSubmit = (LoginFormData) => {
        axios.post(`https://react-learn-words.herokuapp.com/signin`, LoginFormData)
        .then(response => {
            let { userId, name, token} = response.data
            this.props.setUserData(userId, name)
            this.props.setToken(token)
            console.log(response.data)
        })
    }

    render() {
        return (
            <Login onSubmit={this.onSubmit}/>
        )
    }

}

export default connect(null, { setUserData, setToken })(LoginContainer);