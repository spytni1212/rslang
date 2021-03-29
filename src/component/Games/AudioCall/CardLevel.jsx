import React, { useState } from 'react';
import styleCard from './CardLevel.module.css'

const CardLevel = ({handlerButtonStart, name, group, pages}) => {
    


    return (
        <div className={styleCard.card}>
            {name}
            <button onClick={()=>handlerButtonStart(group)}>Начать</button>
        </div> 
    )
}

export default CardLevel;