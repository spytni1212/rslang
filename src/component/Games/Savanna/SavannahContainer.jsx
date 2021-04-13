import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { setWordsInfo } from '../../../redux/savannahReducer/savannahReducer'
import * as axios from 'axios'
import Savannah from './Savannah';
import LevelMenu from '../../UIKit/LevelMenu/LevelMenu'
import putLearningWords from '../putLearningWords';
import s from '../style.module.css'

const SavannahContainer = ({ ...props }) => {
    const [onLevelChoice, setOnLevelChoice] = useState(true)
    const getRandomPage = () => {
        const min = 0;
        const max = 29;
        const randomPage = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(randomPage);
    }
    useEffect(() => {
        if (props.match.params.userGame) {
            props.setWordsInfo(props.userWords)
            console.log(props.userWords)
            setOnLevelChoice(false)
            putLearningWords(props.userWords, props.user)
        }
    }, [])

    const getWordsInfo = (currentGroup) => {
        console.log(currentGroup)
        axios.get(`https://react-learn-words.herokuapp.com/words?group=${currentGroup}&page=${getRandomPage()}`)
            .then(response => {
                const wordsInfo = response.data.map(res => ({
                    id: res.id,
                    word: res.word,
                    wordTranslate: res.wordTranslate
                }))
                props.setWordsInfo(wordsInfo)
                setOnLevelChoice(false)
            })
    }
    return (
        onLevelChoice ?
            <>
                <h2 className={s.levelsTitle}>Саванна</h2>
                <LevelMenu funClickButton={getWordsInfo} />
            </>
            :
            (props.wordsInfo ?

                <Savannah
                    wordsInfo={props.wordsInfo}
                />
                : null)
    )
}

const mapStateToProps = (state) => {
    return {
        wordsInfo: state.savannah.wordsInfo,
        userWords: state.book.userWords,
        user: state.auth
    }
}

export default connect(mapStateToProps, { setWordsInfo })(SavannahContainer);