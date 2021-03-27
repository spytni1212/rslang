import React from 'react'
import s from './Savannah.module.css'

const SavannahStart = (props) => {
    console.log('jhg')
    const levels = [0, 1, 2, 3, 4, 5]
    const handleClick = (e) => {
        const level = e.target.dataset.id
        props.setLevel(level)
        props.setOnLevelChoice(false)
    }
    return (
        <div className={s.levelsContainer}>
            <h3>Выбери уровень сложности </h3>
            <ul style={{listStyleType:'none'}}>
                {levels.map((level, index) => {
                    return <li key={index} data-id={level} onClick={(e) => handleClick(e)} className={s.levelButton}>Уровень {level + 1}</li>
                })}
            </ul>
        </div>
    )
}
export default SavannahStart;