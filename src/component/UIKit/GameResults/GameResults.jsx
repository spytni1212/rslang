import React from 'react';
import style from './GameResults.module.css';

const GameResults = (props) => {
    console.log(props)
    return (
        <div className={style.endGame}>
            <div>
                <p className={style.finalScore}>Ваш результат: {props.score}</p>
                <p className={style.knowWords}>Вы знаете {props.results.correct} слов(-a)</p>
                <p className={style.unknowWords}>Вы не знаете {props.results.wrong} слов(-a)</p>
            </div>
            <div>
                <table className={style.resultTable}>
                    <tbody>
                        {props.resultInfo.map((res, index) => {
                            const correctAnswer = res.result ? '✓' : 'X';
                            return (
                                <tr key={index}>
                                    <td>{res.firstWord}</td>
                                    <td>&#8212;</td>
                                    <td>{res.secondWord}</td>
                                    <td>{correctAnswer}</td>
                                </tr>
                        )})}
                    </tbody>
                </table>
            </div>
            <div>
                <button className={style.beginAgainButton} onClick={props.endGame}>Начать сначала</button>
            </div>
        </div>
    );
}

export default GameResults;