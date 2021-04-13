import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from "redux";
import { Alert, AlertTitle } from '@material-ui/lab';
import { authAPI } from '../../api/api';
import { setUserData, setToken } from '../../redux/auth-reducer';
import Login from './Login';

class LoginContainer extends React.Component {

    state = {
        isError: false,
        errorMessage: ''
    }


    onSubmit = (loginFormData) => {
        authAPI.login(loginFormData)
        .then(response => {
            let { userId, name, token} = response.data
            this.props.setUserData(userId, name)
            this.props.setToken(token)
        })
        .catch(err => {
            if (err.response.status === 404) {
                this.setErrorMessage('пользователь с таким адресом электронной почты не найден')
                console.log(err.response)
            } else if (err.response.status === 403) {
                this.setErrorMessage('не верно указан пароль')
            }
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