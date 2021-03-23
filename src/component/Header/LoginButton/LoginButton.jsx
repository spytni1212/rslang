import React from 'react';
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';

const LoginButton = () => {
    return (
        <div>
            <NavLink to='/login'>
                <Button variant='contained' color='primary'>
                    Login
                </Button>
            </NavLink>
        </div>
    )
}

export default LoginButton;
