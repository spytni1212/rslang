import React, { useState, useEffect } from 'react';
import SprintStart from './SprintStart';
import SprintContainer from './SprintContainer';
import SprintResult from './SprintResult';
import { setSprintGameStart, setWordsInfo } from '../../../redux/sprint-reducer';
import { connect } from 'react-redux';
import * as axios from 'axios';
import style from './Sprint.module.css';

const Sprint = (props) => {    

    const [wordsGroup, setWordsGroup] = useState(1);

    const getRandomPage = () => {
        const min = 0;
        const max = 29;
        const randomPage = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(randomPage);
    }

    useEffect(() => {
        if (wordsGroup !== '') {
            axios.get(`https://react-learn-words.herokuapp.com/words?group=${wordsGroup}&page=${getRandomPage()}`)
                .then(response => {
                    const wordsInfo = response.data.map(res => ({
                        id: res.id,
                        word: res.word,
                        wordTranslate: res.wordTranslate
                    }));
                    props.setWordsInfo(wordsInfo);
                })
        }
    }, [wordsGroup])

    return (
        <div className={style.mainPage}>
            {!props.sprintGameStart && !props.sprintGameEnd && <SprintStart setWordsGroup={setWordsGroup} />}
            {props.sprintGameStart && <SprintContainer />}
            {props.sprintGameEnd && <SprintResult />}
        </div>
    )
}

const mapStateToProps = (state) => ({
    sprintGameStart: state.sprint.sprintGameStart,
    sprintGameEnd: state.sprint.sprintGameEnd,
})

const mapDispatchToProps = (dispatch) => ({
    setSprintGameStart: () => dispatch(setSprintGameStart()),
    setWordsInfo: (wordsInfo) => dispatch(setWordsInfo(wordsInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sprint)