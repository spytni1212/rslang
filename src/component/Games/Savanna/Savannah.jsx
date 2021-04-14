import React, { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { setCorrectWords, setWrongWords, setResultInfo } from '../../../redux/savannahReducer/savannahReducer'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Modal from '../../UIKit/Modal/Modal'
import ProgressBar from '../../UIKit/ProgressBar/ProgressBar'
import EndOfGame from './EndOfGame';
import showNewWords from './showNewWords'
import GameResults from '../../UIKit/GameResults/GameResults'

const useStyles = makeStyles({
    bgContainer: {
        position: 'absolute',
        top: '0',
        bottom: '0',
        right: '0',
        left: '0',
        "&::before": {
            content: '""',
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(/img/Games/savannah.jpeg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            opacity: '0.5',
            position: 'absolute',
            top: '0',
            bottom: '0',
            right: '0',
            left: '0',
        }
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: '10',
        '& h2, & div, & button': {
            zIndex: '10',
        }
    },
    gameContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: '1em',
        rowGap: '1em',
        flexWrap: 'wrap'
    },
    title: {
        marginBottom: '1.2em',
    },
    checkButton: {
        margin: '0 auto',
        background: '#d69eadf5',
        fontSize: '16px',
        "&:hover": {
            background: '#d69eadf !important'
        }
    },
    word: {
        padding: '0.8em',
        background: '#f3d7e6',
        boxShadow: '2px 2px 7px 2px #b4b4c7',
        border: '2px #0000002b solid',
        borderRadius: '10px',
        outline: 'none',
        fontSize: '16px',
        cursor: 'pointer',
        "&:hover": {
            transform: 'scale(1.1)'
        },
    },
    correct: {
        borderColor: '#1f841f',
        background: '#97e697',
        color: `black`
    },
    wrong: {
        borderColor: '#e00606',
        background: '#de8d8d',
        color: `black`
    }
});

const getRandomNumbers = () => {
    const arr = [0, 1, 2, 3];
    const randArr = arr.sort(() => 0.5 - Math.random());
    return randArr;
};
let randomNumbersArray = getRandomNumbers();

const Savannah = (props) => {
    const classes = useStyles()
    const history = useHistory();
    console.log(props.wordsInfo)
    const WORDS_NUMBER = 20;
    const wordsInfo = props.wordsInfo
    let wordToCheck, translationToCheck;

    const [wordsArray, setWordsArr] = useState(wordsInfo)
    wordsInfo[0] ? wordToCheck = wordsArray[0].firstWord : wordToCheck = null
    wordsInfo[0] ? translationToCheck = wordsArray[0].secondWord : translationToCheck = null
    console.log(wordsArray)
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [step, setStep] = useState(0)
    const [points, setPoints] = useState(0)
    const [correctAnswersNum, setCorrectAnswersNum] = useState(0)
    const [wrongAnswersNum, setWrongAnswersNum] = useState(0)
    const buttonsContainer = useRef()

    // start pop-up
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        history.push("/games")
        setOpen(false);
    };
    // end pop-up
    const handleCheck = (e) => {
        let currentButton;
        if (e.type !== 'click') {
            const pressedButton = Array.from(buttonsContainer.current.children).filter(
                (child) => child.dataset.index === e.key,
            );
            [currentButton] = pressedButton;
        } else {
            currentButton = e.target
        }

        const wordClicked = currentButton.dataset.word
        const wordId = currentButton.dataset.id
        const wordToSend = {
            id: wordId,
            word: wordClicked,
        }
        if (wordClicked === translationToCheck) {
            currentButton.classList.add(classes.correct)
            setPoints(prev => prev + 10)
            setCorrectAnswersNum(prev => prev + 1)
            const resultWord = wordsArray.find(word => word.id === wordId)
            // console.log(wordsArray)
            props.setResultInfo({...resultWord, result: true})
            // console.log(props.setResultInfo)
            // props.setCorrectWords(wordToSend)
        } else {
            currentButton.classList.add(classes.wrong)
            setWrongAnswersNum(prev => prev + 1)
            const resultWord = wordsArray.find(word => word.id === wordId)
            props.setResultInfo({...resultWord, result: false})
            // props.setWrongWords(wordToSend)
        }
        setButtonDisabled(false)
        setStep(prev => prev + 1)
    }
    const handleNext = () => {
        if (step === WORDS_NUMBER) {
            handleOpen()
        } else {
            const buttons = Array.from(buttonsContainer.current.children)
            buttons.map((btn) => btn.classList.remove(classes.correct, classes.wrong))
            randomNumbersArray = getRandomNumbers();
            showNewWords(wordsArray, setWordsArr)
            setButtonDisabled(true)
        }
    }

    //start hotkeys
    const handleDigitsPress = (event) => {
        const buttons = Array.from(buttonsContainer.current.children)
        const isEnabled = buttons.every((button) => button.getAttribute('disabled') === null);
        if (isEnabled && (event.key === '1' || event.key === '2' || event.key === '3' || event.key === '4')) {
            handleCheck(event);
        }
    };

    useEffect(() => {
        window.addEventListener('keypress', handleDigitsPress);
        return () => {
            window.removeEventListener('keypress', handleDigitsPress);
        };
    }, [handleDigitsPress]);

    const handleEnterPress = (event) => {
        const buttons = Array.from(buttonsContainer.current.children)
        const isEnabled = buttons.every((button) => button.getAttribute('disabled') === null);
        if (!isEnabled && (event.key === 'Enter')) {
            handleNext();
        }
    };
    useEffect(() => {
        window.addEventListener('keypress', handleEnterPress);
        return () => {
            window.removeEventListener('keypress', handleEnterPress);
        };
    }, [handleEnterPress]);
    console.log(props.correctWords);
    console.log(props.wordsInfo)
    console.log(props.wrongWords)
    //end hotkeys

    return (
        <Box className={classes.bgContainer} p={3}>
            <Box className={classes.container}>
                <ProgressBar number={step} />
                <h2 className={classes.title}> Выбери верный перевод слова "{wordToCheck}" </h2>
                <Box className={classes.gameContainer} mb={4} ref={buttonsContainer}>
                    {randomNumbersArray.map((randomNumber, index) => {
                        return (
                            <button
                                key={index}
                                className={classes.word}
                                data-word={wordsArray[randomNumber].secondWord}
                                data-id={wordsArray[randomNumber].id}
                                data-index={index + 1}
                                onClick={handleCheck}
                                disabled={!buttonDisabled}
                            >
                                {index + 1}. {wordsArray[randomNumber].secondWord}
                            </button>
                        )
                    })}
                </Box>
                <Button
                    variant="contained"
                    className={classes.checkButton}
                    disabled={buttonDisabled}
                    onClick={handleNext}
                >
                    Продолжить
                </Button>
            </Box>
            <Modal
                isOpen={open}
                children={
                    //     <EndOfGame
                    //         points={points} 
                    //         handleClose={handleClose} 
                    //         correctWords={props.correctWords}
                    //         wrongWords={props.wrongWords}
                    // />
                    <GameResults
                        score={points}
                        endGame={handleClose}
                        results={{ correct: correctAnswersNum, wrong: wrongAnswersNum }}
                        resultInfo={props.resultInfo}
                    />
                }
            />
        </Box>
    )
}

const mapStateToProps = (state) => {
    return {
        correctWords: state.savannah.correctWords,
        wrongWords: state.savannah.wrongWords,
        resultInfo: state.savannah.resultInfo,
    }
}
export default connect(mapStateToProps, { setCorrectWords, setWrongWords, setResultInfo })(Savannah);