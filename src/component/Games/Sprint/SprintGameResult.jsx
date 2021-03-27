import React from 'react';
import style from './SprintGameResult.module.css'

export default function SprintGameResult() {
    return (
        <div className={style.endGame}>
            <p className={style.finalScore}>Финальный счет: {}</p>
            <button className={style.beginAgainButton}>Начать сначала</button>
        </div>
    )
}