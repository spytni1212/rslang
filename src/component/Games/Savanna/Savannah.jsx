import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import EndOfGamePopUp from './EndOfGamePopUp';
import showNewWords  from './showNewWords'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    gameContainer: {
        display: 'flex',
        justifyContent: 'center',
        columnGap: '1em',
        rowGap: '1em',
        flexWrap: 'wrap'
    },
    title: {
        marginBottom: '1.2em',
    },
    checkButton:{
        margin: '0 auto',
        background: '#d69eadf5',
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
        cursor: 'pointer',
        "&:hover": {
            transform: 'scale(1.1)'
        }
    },
    correct: {
        borderColor: '#1f841f',     
        background: '#97e697'
    },
    wrong: {
        borderColor: '#e00606',
        background: '#de8d8d'
    }
});

const getRandomNumbers = () => {
    const arr = [0, 1, 2, 3];
    const randArr = arr.sort(() => 0.5 - Math.random());
    console.log(randArr);
    return randArr;
};
let randomNumbersArray = getRandomNumbers(); 

const Savannah = (props) =>{
    const classes = useStyles()
    const history = useHistory();

    const words = props.words
    const translations = props.translations
    console.log(words)
    let wordToCheck;
    let translationToCheck; 
    const dataArray = words.map(function (value, index){
        return [value, translations[index]]
    }).sort(() => Math.random() - 0.5)
    const [wordsArray, setWordsArr] = useState(dataArray)
    dataArray[0] ? wordToCheck = wordsArray[0][0] : wordToCheck = null
    dataArray[0] ? translationToCheck = wordsArray[0][1] : translationToCheck = null

    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [step, setStep] = useState(0)
    const [points, setPoints] = useState(0)
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
        const target = e.target
        const wordClicked = target.dataset.id
        if (wordClicked === translationToCheck) {
            target.classList.add(classes.correct)
            setPoints(prev => prev + 10)
        } else {
            target.classList.add(classes.wrong)
        }
        setButtonDisabled(false)
        setStep(prev => prev + 1)
    }
    const handleNext = () => {
        if (step === 5) {
            handleOpen()
        } else {
            const buttons = Array.from(buttonsContainer.current.children)
            buttons.map((btn) => btn.classList.remove(classes.correct, classes.wrong))
            randomNumbersArray = getRandomNumbers();
            showNewWords(wordsArray, setWordsArr)
            setButtonDisabled(true)
        }
    }
    return (    
        <Box className={classes.container} p={3}>
            <EndOfGamePopUp 
                open={open}
                handleClose={handleClose}
                points={points}
            />
            <h3 className={classes.title}> Выбери верный перевод слова "{wordToCheck}" </h3>
            <Box className={classes.gameContainer} mb={4} ref={buttonsContainer}>
                {randomNumbersArray.map((randomNumber, index) => {
                    return (
                        <button 
                            key={index} 
                            className={classes.word} 
                            data-id={wordsArray[randomNumber][1]} 
                            onClick={handleCheck}
                            disabled={!buttonDisabled}
                        >
                            {wordsArray[randomNumber][1]}
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
    )
}
export default Savannah;