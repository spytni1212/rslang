import React from 'react';
import s from './AudioCall.module.css'
import CardLevel from './CardLevel';
import Play from "./Play"

const AudioCall = ({levels, ...props}) => {

    const {start} = {...props}

    const levelCard = levels.map((level)=><CardLevel {...level} {...props} key={level.page}/>);
    return (
        <div>
            <div className={`wrapper ${s.wrapper}`}>
                {!start ? levelCard : <Play {...props}/>}
            </div>
        </div> 
    )
}

export default AudioCall;