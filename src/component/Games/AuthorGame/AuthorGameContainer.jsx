import React from 'react';
import { connect } from 'react-redux';
import AuthorGame from './AuthorGame';
import axios from "axios";
import {
    setStartGame,
  } from "../../../redux/authorGame-reducer";
import {generateRandom, shuffleArray} from "../generalFunctionsForGame"


const AuthorGameContainer = (props) => {

    const buttonСhoiceLevel = (group) =>{
    axios
      .get(
        `https://react-learn-words.herokuapp.com/words?group=${group}&page=${generateRandom(0, 29)}`
      )
      .then((res) => {
        props.setLevelArr(res.data);
      })
      .then(() => props.setStartGame(true));
        props.setStartGame(true)
    }

    return (
        <AuthorGame
            buttonСhoiceLevel={buttonСhoiceLevel}
        />
    )
}

let mapStateToProps = (state) => {
    return {
    };
  };
  
  export default connect(mapStateToProps, {setStartGame})(AuthorGameContainer);
