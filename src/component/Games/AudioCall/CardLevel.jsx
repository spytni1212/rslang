import React, { useState } from 'react';
import styleCard from './CardLevel.module.css'

const CardLevel = ({handlerButtonStart, name, page}) => {
    return (
        <div className={styleCard.card}>
            {name}
            <button onClick={()=>handlerButtonStart(page)}>Начать</button>
        </div> 
    )
}

export default CardLevel;