import React from 'react';
import { connect } from 'react-redux';
import { Alert, AlertTitle } from '@material-ui/lab';
import * as axios from 'axios'
import { setUserData } from '../../redux/auth-reducer';
import Registration from './Registration'

class RegistrationContainer extends React.Component {

    state = {
        isAuth: false,
        isError: false,
        errorMessage: ''
    }

    onSubmit = (RegistrationData) => {
        axios.post(`https://react-learn-words.herokuapp.com/users`, RegistrationData)
        .then(response => {
            console.log(response)
            this.setIsAuth()
        })
        .catch(err => {
            if (err.response.status === 417) {
                this.setErrorMessage('пользователь с таким адресом электронной почты уже существует')
            } else if (err.response.status === 422) {
                this.setErrorMessage('не верно указан адрес электронной почты или пароль')
            }
        })
    }

    setErrorMessage = (message) => {
        this.setState({errorMessage: message, isError: true})
    }

    setIsAuth = () => {
        this.setState({isAuth: true, isError: false})
    }

    render() {
        return (
            <div>
                <Registration onSubmit={this.onSubmit}/>
                {this.state.isError ? 
                    <Alert severity="error">
                        <AlertTitle>Ошибка</AlertTitle>
                        {this.state.errorMessage}
                    </Alert>
                : null 
                }
                {this.state.isAuth ?
                    <Alert severity="success">
                        <AlertTitle>Успешно</AlertTitle>
                        Вы успешно зарегистрировались, теперь необходимо войти в аккаунт
                    </Alert>
                : null
                }
            </div>
            
        )
    }

}

export default connect(null, { setUserData })(RegistrationContainer);