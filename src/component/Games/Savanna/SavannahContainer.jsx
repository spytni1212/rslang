import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { setWords, setTranslations, setWordToCheck, setCurrentPage} from '../../../redux/savannahReducer/savannahReducer'
import * as axios from 'axios'
// import { Howl, Howler } from 'howler' 
import Savannah from './Savannah';
import ChooseLevel from './ChooseLevel'

const SavannahContainer = (props) => {
    const [onLevelChoice, setOnLevelChoice] = useState(true)
    const [currentGroup, setCurrentGroup] = useState('')
    const getRandomPage = () => {
        const min = 0;
        const max = 29;
        const randomPage = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(randomPage);
    }
    const handleCurrentGroupChange = (group) => {
        setCurrentGroup(group)
    }
    const setWords = props.setWords
    const setTranslations = props.setTranslations
    useEffect(() => {
        if (currentGroup !== undefined) {
            axios.get(`https://react-learn-words.herokuapp.com/words?group=${currentGroup}&page=${getRandomPage()}`)
                .then(response => {
                    const newData = response.data.map(resp => resp.word  &&  resp.wordTranslate)
                    console.log(newData)
                    const translations = response.data.map(resp => resp.wordTranslate)
                    const words = response.data.map(resp => resp.word)
                    setWords(words)
                    setTranslations(translations)
                })
        }
    }, [currentGroup, setTranslations, setWords])
    return (
        onLevelChoice ? 
        <ChooseLevel setLevel = {handleCurrentGroupChange} setOnLevelChoice={setOnLevelChoice} />
        :   
        ( props.words.length && props.translations.length ? 
        <Savannah
            words= {props.words}
            translations={props.translations}
        /> 
        : null)
    )
}

const mapStateToProps = (state) => {
    return {
        words: state.savannah.words,
        translations: state.savannah.translations,
        wordToCheck: state.savannah.wordToCheck
    }
}

export default connect(mapStateToProps, {setWords, setTranslations, setWordToCheck})(SavannahContainer);