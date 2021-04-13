import React, { useEffect } from "react";
import AudioCall from "./AudioCall";
import { connect } from "react-redux";
import {
  setCallStartGame,
  setCallArrWords,
  setCallIndexSelectWord,
  setCallSelectWord,
  setCallListChoiceWords,
  setCallAddWrongWord,
  setCallAddCorrectWord,
  setAnswer,
} from "../../../redux/audioCall-reducer";
import {
  generateRandom,
  shuffleArray,
  getRequestWords,
  generateRandomArray,
} from "../generalFunctionsForGame";
import { useHistory } from "react-router-dom";
import _ from "lodash";

const AudioCallContainer = ({ ...props }) => {
  const {
    start,
    arrWords,
    indexSelectWord,
    selectWord,
    listСhoiceWords,
    wrongWords,
    correctWords,
    setCallStartGame,
    setCallArrWords,
    setCallIndexSelectWord,
    setCallSelectWord,
    setCallListChoiceWords,
    setCallAddWrongWord,
    setCallAddCorrectWord,
    setAnswer,
    answer,
    userWords,
  } = props;

  let history = useHistory();

  useEffect(() => {
    if (props.match.params.userGame) {
      const copyUserWords = _.cloneDeep(userWords)
      shuffleArray(copyUserWords);
      setCallArrWords(copyUserWords);
      setCallStartGame(true);
      setCallIndexSelectWord(0);
    }
  }, []);

  useEffect(() => {
    if (start === true) {
      if (indexSelectWord === arrWords.length) {
        return;
      }
      setCallSelectWord(arrWords[indexSelectWord]);
      generatorListСhoiceWords();
    }
  }, [indexSelectWord]);

  const generatorListСhoiceWords = () => {
    const listСhoiceWords = generateRandomArray(
      arrWords.length - 1,
      indexSelectWord
    ).map((n) => {
      return Object.assign({ typeButton: "active" }, arrWords[n]);
    });
    setCallListChoiceWords(listСhoiceWords);
  };

  const buttonСhoiceLevel = async (group) => {
    const arrWords = await getRequestWords(group);
    const arrWordsData = arrWords.data.slice();
    shuffleArray(arrWordsData);
    setCallArrWords(arrWordsData);
    setCallStartGame(true);
    setCallIndexSelectWord(0);
  };

  const buttonNextWord = () => {
    setAnswer(false);
    setCallIndexSelectWord(indexSelectWord + 1);
  };

  const buttonChoseWord = (obj) => {
    setAnswer(true);
    const funTypesSelectWords = (arr, word, type) => {
      return arr.map((obj) => {
        if (obj.word === word) {
          obj.typeButton = type;
        } else {
          obj.typeButton = "block";
        }
        return obj;
      });
    };

    if (obj.word === selectWord.word) {
      setCallAddCorrectWord([...props.correctWords, props.selectWord]);
      return setCallListChoiceWords(
        funTypesSelectWords(listСhoiceWords, obj.word, "correct")
      );
    } else {
      setCallAddWrongWord([...props.correctWords, selectWord]);
      return setCallListChoiceWords(
        funTypesSelectWords(listСhoiceWords, obj.word, "wrong")
      );
    }
  };

  const buttonEndGame = () => {
    setCallStartGame(false);
    setCallArrWords([]);
    setCallIndexSelectWord(null);
    setCallSelectWord({});
    setCallListChoiceWords([]);
    setCallAddWrongWord([]);
    setCallAddCorrectWord([]);
    if (props.match.params.userGame) {
      history.push("/book");
    }
  };

  return (
    <AudioCall
      buttonСhoiceLevel={buttonСhoiceLevel}
      buttonChoseWord={buttonChoseWord}
      buttonNextWord={buttonNextWord}
      buttonEndGame={buttonEndGame}
      arrWords={arrWords}
      start={start}
      selectWord={selectWord}
      listСhoiceWords={listСhoiceWords}
      indexSelectWord={indexSelectWord}
      wrongWords={wrongWords}
      correctWords={correctWords}
      answer={answer}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    start: state.audioCall.start,
    arrWords: state.audioCall.arrWords,
    indexSelectWord: state.audioCall.indexSelectWord,
    selectWord: state.audioCall.selectWord,
    listСhoiceWords: state.audioCall.listСhoiceWords,
    wrongWords: state.audioCall.levelResult.wrongWords,
    correctWords: state.audioCall.levelResult.correctWords,
    answer: state.audioCall.answer,
    userWords: state.book.userWords
  };
};

export default connect(mapStateToProps, {
  setCallStartGame,
  setCallArrWords,
  setCallIndexSelectWord,
  setCallSelectWord,
  setCallListChoiceWords,
  setCallAddWrongWord,
  setCallAddCorrectWord,
  setAnswer,
})(AudioCallContainer);
