import React from 'react';
import AudioCall from './AudioCall';
import axios from 'axios';
import { connect } from 'react-redux';

const AudioCallContainer = () => {

    const handlerButtonStart = () => {
        axios.get(`https://react-learn-words.herokuapp.com/words?group=${0}&page=${0}`)
        .then(res => {
        const persons = res.data;
        console.log(persons)
      })

    }

    return (<AudioCall handlerButtonStart={handlerButtonStart}/>)
}


let mapStateToProps = (state) => {
    return {
        // words: state.audioCall.reducers,
    }
}

export default connect(mapStateToProps, {})(AudioCallContainer);