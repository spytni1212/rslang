import React from 'react';
import BurgerMenu from './BurgerMenu/BurgerMenu'
import LoginButton from './LoginButton/LoginButton'
import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.header}>
            <div className={`wrapper ${s.wrapper}`}>
                <BurgerMenu />
                <h1>Pingu'English</h1>
                <LoginButton />
            </div>
        </div>
    )
}

export default Header;