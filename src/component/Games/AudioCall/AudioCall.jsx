import React from 'react';
import s from './AudioCall.module.css'
import CardLevel from './CardLevel';
import  GameProcess from "./ GameProcess"

const AudioCall = ({levels, ...props}) => {

    const {start} = {...props}

    const levelCard = levels.map((level)=><CardLevel {...level} {...props} key={level.group}/>);
    return (
            <div className={`wrapper ${s.wrapper}`}>
                {!start ? <div className={s.cardList}>{levelCard}</div> : <GameProcess {...props}/>}               
            </div>
    )
}

export default AudioCall;