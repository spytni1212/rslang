import React from 'react';
import s from './Words.module.css'

const Words = () => {
    return (
        <div className={s.wordsContainer}>
            <div className={`wrapper ${s.wrapper}`}>
                Здесь будет список всех слов с разделами и тд
            </div>
        </div>
    )
}

export default Words;