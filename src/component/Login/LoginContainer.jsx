import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios'
import { setUserData, setToken} from '../../redux/auth-reducer';
import Login from './Login'

class LoginContainer extends React.Component {

    onSubmit = (formData) => {
        axios.post(`https://react-learn-words.herokuapp.com/users`, formData)
        .then(response => {
            let { email, id, name } = response.data;
            this.props.setUserData(email, id, name)
            console.log(response)
            axios.post(`https://react-learn-words.herokuapp.com/signin`, {email: formData.email, password: formData.password})
            .then(response => {
                console.log(response);
                setToken(response.data.token)
            })
        })
    }

    render() {
        return (
            <Login onSubmit={this.onSubmit}/>
        )
    }

}

export default connect(null, { setUserData, setToken })(LoginContainer);