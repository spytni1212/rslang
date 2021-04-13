import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import DeleteIcon from '@material-ui/icons/Delete';
import WarningIcon from '@material-ui/icons/Warning';
import Button from '@material-ui/core/Button';
import s from './WordCard.module.css'

const useStyles = makeStyles((theme) =>
    createStyles({
        pagination: {
            margin: '1em',
        },
        titleContainer: {
            display: 'flex',
        },
        volumeBtn: {
            minWidth: 0,
            minHeight: 0
        },
        deleteBtn: {
            background: theme.palette.error.main,
            color: '#fffbfbde',
            '&:hover': {
                background: '#c1625d',
            }
        },
        difficultBtn: {
            background: theme.palette.warning.main,
            color: 'rgb(84 35 35 / 87%)',
            '&:hover': {
                background: '#ecba6bfa',
            }
        }
}))



const WordCard = (props) => {
    const classes = useStyles()
    const apiUrl = 'https://react-learn-words.herokuapp.com'

    const renderSwitchButton = (nameCard) => {
        switch (nameCard) {
            case 'mainCard':
                return (
                    <div className={s.buttonsContainer}>                    
                        <Button
                            variant="contained"
                            className={classes.difficultBtn}
                            color="error"
                            disabled={!props.isLogin}
                            startIcon={<WarningIcon />}
                            onClick={() => props.difficultWordClickHandler(props.word._id)}
                        >
                            сложное слово
                        </Button>
                        <Button
                            variant="contained"
                            className={classes.deleteBtn}
                            startIcon={<DeleteIcon />}
                            disabled={!props.isLogin}
                            onClick={() => props.deleteWordClickHandler(props.word._id)}
                        >удалить слово
                        </Button>
                    </div>
                )
            case 'difficultCard':
                return (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => props.removeWordClickHandler(props.word._id)}
                    >восстановить
                    </Button>
                )    
            case 'deleteCard':
                return (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => props.removeWordClickHandler(props.word._id)}
                    >восстановить
                    </Button>
                )
            case 'learningCard':
                return (
                    null
                )
            default:
                break;
        }
    }

    return (
        <div className={s.wordContainer}>
            {props.cardName === 'mainCard' ? null 
                : <div className={s.circle} style={{ background: props.difficultColor[props.word.group] }}></div>
            }
            <div className={s.wordDescription}>
                <Box className={classes.titleContainer} mb={2}>
                    <div className={s.wordImage} style={{ backgroundImage: `url('${apiUrl}/${props.word.image}')` }}>
                    </div>
                    <Box className={classes.titleContainer}>
                        <h3 className={s.wordTranscription}>
                            {props.word.word} {props.word.transcription}
                        </h3>
                        <Button
                            size='small'
                            className={classes.volumeBtn}
                            onClick={() => props.clickAudioHandler([`${apiUrl}/${props.word.audio}`, `${apiUrl}/${props.word.audioMeaning}`, `${apiUrl}/${props.word.audioExample}`])}
                            startIcon={<VolumeUpIcon style={{ color: '#414954' }} />}
                        />
                    </Box>
                </Box>
                <span className={s.textMeaning}>
                    {props.word.textMeaning}
                </span>
                {props.settings.isShowTranslate ?
                    <span className={s.textMeaningTranslate}>
                        {props.word.textMeaningTranslate}
                    </span>
                    : null
                }
                <span className={s.textExample}>
                    {props.word.textExample}
                </span>
                {props.settings.isShowTranslate ?
                    <span className={s.textExampleTranslate}>
                        {props.word.textExampleTranslate}
                    </span>
                    : null
                }
            </div>
            {props.settings.isShowButtons ?
                renderSwitchButton(props.cardName)
                : null
            }
        </div >
    )
}

export default WordCard
