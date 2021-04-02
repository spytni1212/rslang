import React from 'react';
import s from './AudioCall.module.css'
import  GameProcess from "./ GameProcess"
import LevelMenu from '../../UIKit/LevelMenu/LevelMenu'

const AudioCall = ({levels, ...props}) => {

    const {start} = {...props}

    return (
            <div className={`wrapper ${s.wrapper}`}>
                <h2>Аудиовызов</h2>
                {!start ? <LevelMenu funClickButton={props.handlerButtonStart} /> : <GameProcess {...props}/>}  
            </div>
    )
}

export default AudioCall;