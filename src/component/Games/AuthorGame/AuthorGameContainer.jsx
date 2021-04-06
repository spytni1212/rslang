import React from "react";
import { connect } from "react-redux";
import AuthorGame from "./AuthorGame";
import { setStartGame, setArrWords } from "../../../redux/authorGame-reducer";
import { generateRandom, shuffleArray, getRequestWords } from "../generalFunctionsForGame";


const AuthorGameContainer = (props) => {

  const buttonСhoiceLevel = async (group) => {
    const arrWords =  await getRequestWords(group)
    props.setArrWords(arrWords.data)
    props.setStartGame(true);
  };



  return <AuthorGame buttonСhoiceLevel={buttonСhoiceLevel} />;
};

let mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { setStartGame, setArrWords })(AuthorGameContainer);
