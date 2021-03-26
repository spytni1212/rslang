import React from 'react';
import s from './AudioCall.module.css'
import CardLevel from './CardLevel';
import  GameProcess from "./ GameProcess"

const AudioCall = ({levels, ...props}) => {

    const {start} = {...props}

    const levelCard = levels.map((level)=><CardLevel {...level} {...props} key={level.page}/>);
    return (
        <div>
            <div className={`wrapper ${s.wrapper}`}>
                {!start ? levelCard : <GameProcess {...props}/>}
            </div>
        </div> 
    )
}

export default AudioCall;