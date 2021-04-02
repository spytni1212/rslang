import React from 'react';
import { setSprintGameStart } from '../../../redux/sprint-reducer';
import { connect } from 'react-redux';
import style from './SprintStart.module.css';

const SprintStart = (props) => {
    const levels = [0, 1, 2, 3, 4, 5];

    const handleChooseLevel = (e) => {
        const level = e.target.dataset.id
        props.setWordsGroup(level)
    }

    const handleStartGame = () => {
        props.setSprintGameStart();
    }

    return (
        <div>
            <div className={style.levelsContainer}>
                <h3>Выбери уровень сложности и нажмите кнопку Начать </h3>
                <ul style={{listStyleType: 'none'}}>
                    {levels.map((level, index) => {
                        return <li key={index} data-id={level} onClick={(e) => handleChooseLevel(e)} className={style.levelButton}>Уровень {level + 1}</li>
                    })}
                </ul>
            </div>
            <button className={style.startButton} onClick={handleStartGame}>Начать</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    setSprintGameStart: () => dispatch(setSprintGameStart())
})

export default connect(null, mapDispatchToProps)(SprintStart)