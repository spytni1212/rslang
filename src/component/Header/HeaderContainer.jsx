import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import BurgerMenu from './BurgerMenu/BurgerMenu'
import LoginButton from './LoginButton/LoginButton'
import s from './Header.module.css'

const useStyles = makeStyles({
    logoContainer: {
        display: 'flex',
        columnGap: '10px'
    },
    img: {
        width: '40px'
    }
})

const HeaderContainer = (props) => {
    const classes = useStyles()
    return (
        <div className={s.header}>
            <div className={`wrapper ${s.wrapper}`}>
                <BurgerMenu />
                <NavLink to='/'>
                    <Box className={classes.logoContainer}>
                        <img src="./penguin.png" alt="penguin icon" className={classes.img} />
                        <h1>Pengu'English</h1>
                    </Box>
                </NavLink>
                {props.isLogin ? props.name : <LoginButton />}

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        name: state.auth.name,
        isLogin: state.auth.isLogin
    }
}

export default connect(mapStateToProps)(HeaderContainer);