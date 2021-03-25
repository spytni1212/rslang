import React from 'react';
import s from './AudioCall.module.css'

const AudioCall = () => {
    return (
        <div>
            <div className={`wrapper ${s.wrapper}`}>
                здесь будет игра Аудиовызов
                <button>Начать</button>
            </div>
        </div>
    )
}

export default AudioCall;