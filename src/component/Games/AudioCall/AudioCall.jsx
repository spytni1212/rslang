import React from 'react';
import s from './AudioCall.module.css'

const AudioCall = ({handlerButtonStart}) => {
    return (
        <div>
            <div className={`wrapper ${s.wrapper}`}>
                <button onClick={handlerButtonStart}>Начать</button>
            </div>
        </div>
    )
}

export default AudioCall;