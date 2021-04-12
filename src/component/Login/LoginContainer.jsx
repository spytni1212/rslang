import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from "redux";
import { Alert, AlertTitle } from '@material-ui/lab';
import * as axios from 'axios'
import { setUserData, setToken } from '../../redux/auth-reducer';
import Login from './Login'

class LoginContainer extends React.Component {

    state = {
        isError: false,
        errorMessage: ''
    }


    onSubmit = (LoginFormData) => {
        axios.post(`https://react-learn-words.herokuapp.com/signin`, LoginFormData)
        .then(response => {
            let { userId, name, token} = response.data
            this.props.setUserData(userId, name)
            this.props.setToken(token)
            console.log(response.data)
        })
        .catch(err => {
            if (err.response.status === 404) {
                this.setErrorMessage('пользователь с таким адресом электронной почты не найден')
            } else if (err.response.status === 403) {
                this.setErrorMessage('не верно указан пароль')
            }
            console.log(err.response)
        })
    }

    setErrorMessage = (message) => {
        this.setState({errorMessage: message, isError: true})
    }

    render() {
        return (
            <div>
                <Login onSubmit={this.onSubmit} onClose={this.props.onClose} />
                {this.state.isError ? 
                    <Alert severity="error">
                        <AlertTitle>Ошибка</AlertTitle>
                        {this.state.errorMessage}
                    </Alert>
                : null 
                }
            </div>
        )
    }

}

export default compose(
    connect(null, { setUserData, setToken }),
    withAuthRedirect
)(LoginContainer);