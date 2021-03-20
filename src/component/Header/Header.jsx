import React from 'react';
import { NavLink } from "react-router-dom";
import BurgerMenu from './BurgerMenu/BurgerMenu'
import LoginButton from './LoginButton/LoginButton'
import Navigation from './Navigation/Navigation'
import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.header}>
            <div className={`wrapper ${s.wrapper}`}>
                <BurgerMenu />
                <Navigation />
                <NavLink to='/'><h1>Pingu'English</h1></NavLink>
                <LoginButton />
            </div>
        </div>
    )
}

export default Header;