import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import BurgerMenu from './BurgerMenu/BurgerMenu'
import LoginButton from './LoginButton/LoginButton'
import Navigation from './Navigation/Navigation'
import s from './Header.module.css'

const HeaderContainer = (props) => {
    return (
        <div className={s.header}>
            <div className={`wrapper ${s.wrapper}`}>
                <BurgerMenu />
                <Navigation />
                <NavLink to='/'><h1>Pingu'English</h1></NavLink>
                { props.isLogin ? props.name :  <LoginButton />}
                
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