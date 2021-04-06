import React from 'react';
import LevelMenu from '../../UIKit/LevelMenu/LevelMenu';
import s from './AuthorGame.module.css'

const AuthorGame = () => {
    return (
        <div>
            здесь будет авторская игра
            <div className={`wrapper ${s.wrapper}`}>
                
                <LevelMenu/>
            </div>
        </div>
    )
}

export default AuthorGame;