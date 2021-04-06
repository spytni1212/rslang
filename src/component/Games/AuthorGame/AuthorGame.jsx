import React from 'react';
import LevelMenu from '../../UIKit/LevelMenu/LevelMenu';
import s from './AuthorGame.module.css'

const AuthorGame = ({buttonСhoiceLevel, props}) => {
    return (
        <div>
            здесь будет авторская игра
            <div className={`wrapper ${s.wrapper}`}>
                <LevelMenu funClickButton={buttonСhoiceLevel}/>
            </div>
        </div>
    )
}

export default AuthorGame;