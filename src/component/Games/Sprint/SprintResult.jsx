import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { setSprintGameEnd, setResetWordsInfo, setResetTotalScore, setResetResultInfo } from '../../../redux/sprint-reducer';
import { connect } from 'react-redux';
import style from './SprintResult.module.css';

function SprintResult(props) {

    let history = useHistory();

    const [state, setState] = useState({correct: 0, wrong: 0})

    useEffect(() => {
        let correct = 0, wrong = 0;
        props.resultInfo.map(res => {
            res.result ? correct++ : wrong ++
        })
        setState({ correct, wrong });
    }, [])

    const resetStore = () => {
        props.setSprintGameEnd();
        props.setResetTotalScore();
        props.setResetResultInfo();
    }

    const handleClick = () => {
        resetStore();
        props.setResetWordsInfo();
        history.push("/games");
    }

    return (
        <div className={style.endGame}>
            <div>
                <p className={style.finalScore}>Ваш результат: {props.totalScore}</p>
                <p>Вы знаете {state.correct} слов(-a)</p>
                <p>Вы не знаете {state.wrong} слов(-a)</p>
            </div>
            <div>
                <table>
                    <tbody>
                        {props.resultInfo.map((res, index) => {
                            const correctAnswer = res.result ? '✓' : 'X'
                            return (
                                <tr key={index}>
                                    <td>{res.firstWord}</td>
                                    <td>{res.secondWord}</td>
                                    <td>{correctAnswer}</td>
                                </tr>
                        )})}
                    </tbody>
                </table>
            </div>
            <div>
                <button className={style.beginAgainButton} onClick={resetStore}>Начать сначала</button>
                <button className={style.beginAgainButton} onClick={handleClick}>Вернуться к другими играм</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    totalScore: state.sprint.totalScore,
    resultInfo: state.sprint.resultInfo
})

const mapDispatchToProps = (dispatch) => ({
    setSprintGameEnd: () => dispatch(setSprintGameEnd()),
    setResetTotalScore: () => dispatch(setResetTotalScore()),
    setResetWordsInfo: () => dispatch(setResetWordsInfo()),
    setResetResultInfo: () => dispatch(setResetResultInfo())
})

export default connect(mapStateToProps, mapDispatchToProps)(SprintResult)