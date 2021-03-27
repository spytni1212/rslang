import React from 'react';
import { useHistory } from 'react-router-dom'
import { setSprintGameEnd } from '../../../redux/sprint-reducer';
import { connect } from 'react-redux';
import style from './SprintGameResult.module.css';

function SprintGameResult(props) {

    let history = useHistory();

    function handleClick(setSprintGameEnd) {
        setSprintGameEnd();
        history.push("/games");
    }

    return (
        <div className={style.endGame}>
            <p className={style.finalScore}>Финальный счет: {}</p>
            <button className={style.beginAgainButton} onClick={() => handleClick(props.setSprintGameEnd)}>Вернуться к другими играм</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    setSprintGameEnd: () => dispatch(setSprintGameEnd())
})

export default connect(null, mapDispatchToProps)(SprintGameResult)