import React, { useEffect } from 'react';
import SprintContainer from './SprintContainer';
import LevelMenu from "../../UIKit/LevelMenu/LevelMenu";
import { setSprintGameStart, setWordsInfo } from '../../../redux/sprint-reducer';
import { connect } from 'react-redux';
import * as axios from 'axios';
import style from './Sprint.module.css';
import putLearningWords from '../putLearningWords';

const Sprint = (props) => {    
    const getRandomPage = () => {
        const min = 0;
        const max = 29;
        const randomPage = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(randomPage);
    }

    useEffect(()=>{
        if (props.match.params.userGame) {
            props.setWordsInfo(props.userWords);
            props.setSprintGameStart();
            putLearningWords(props.userWords, props.user);
        }
    }, [])

    const handlerButtonStart = (wordsGroup = 1) => {
        axios.get(`https://react-learn-words.herokuapp.com/words?group=${wordsGroup}&page=${getRandomPage()}`)
            .then(response => {
                const wordsInfo = response.data.map(res => ({
                    _id: res.id,
                    word: res.word,
                    wordTranslate: res.wordTranslate
                }));
                props.setWordsInfo(wordsInfo);
                props.setSprintGameStart();
            })
            .catch(() => {alert('Упс... Что-то пошло не так!')});
    }

    return (
        <div>
            <h1 className={style.gameTitle}>Спринт</h1>
            <div className={style.mainPage}>
                {!props.sprintGameStart && !props.sprintGameEnd && <LevelMenu funClickButton={handlerButtonStart} />}
                {props.sprintGameStart && <SprintContainer />}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    sprintGameStart: state.sprint.sprintGameStart,
    sprintGameEnd: state.sprint.sprintGameEnd,
    userWords: state.book.userWords,
    user: state.auth
})

const mapDispatchToProps = (dispatch) => ({
    setSprintGameStart: () => dispatch(setSprintGameStart()),
    setWordsInfo: (wordsInfo) => dispatch(setWordsInfo(wordsInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sprint)