import React, { useState } from 'react';
import { connect } from 'react-redux'
import { setWordsInfo } from '../../../redux/savannahReducer/savannahReducer'
import * as axios from 'axios'
import Savannah from './Savannah';
import ChooseLevel from './ChooseLevel'

const SavannahContainer = ({ ...props }) => {
    const [onLevelChoice, setOnLevelChoice] = useState(true)
    const getRandomPage = () => {
        const min = 0;
        const max = 29;
        const randomPage = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(randomPage);
    }

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
                console.log(wordsInfo)
                setOnLevelChoice(false)
            })
    }
    return (
        onLevelChoice ?
            <ChooseLevel getWordsInfo={getWordsInfo} />
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
    }
}

export default connect(mapStateToProps, { setWordsInfo })(SavannahContainer);