import React from 'react';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import Button from '@material-ui/core/Button';
import { Pagination } from '@material-ui/lab';
import s from './DeleteWordsPage.module.css'

const DeleteWordsPage = (props) => {

    const apiUrl = 'https://react-learn-words.herokuapp.com'

    let deleteWords = props.deleteWords.map(word => {
        return <div key={word.id} className={s.wordContainer}>
                    <div className={s.wordImage} style={{backgroundImage: `url('${apiUrl}/${word.image}')`}}>
                    </div>
                    <div className={s.wordDescription}>
                        <span className={s.wordTranscription}>
                            {word.word} {word.transcription} 
                            <Button size='small' onClick={() => props.clickAudioHandler([`${apiUrl}/${word.audio}`, `${apiUrl}/${word.audioMeaning}`, `${apiUrl}/${word.audioExample}`])}><VolumeUpIcon /></Button>
                        </span>
                        <span className={s.textMeaning}>
                            {word.textMeaning}
                        </span>
                        {props.settings.isShowTranslate ?
                            <span className={s.textMeaningTranslate}>
                                {word.textMeaningTranslate}
                            </span>
                            : null
                        }
                        <span className={s.textExample}>
                            {word.textExample}
                        </span>
                        {props.settings.isShowTranslate ?
                            <span className={s.textExampleTranslate}>
                                {word.textExampleTranslate}
                            </span>
                            : null
                        }
                    </div>
                    <div className={s.buttonsContainer}>
                        <Button variant="contained" color="primary" onClick={()=>props.removeWordClickHandler(word._id)}>восстановить</Button>
                    </div>
                    <div className={s.circle} style={{background: props.difficultColor[word.group]}}></div>
                </div>
    })

    let pagesCount
    let pages = []

    pagesCount = Math.ceil(props.totalUserCount / props.wordsPerPage)
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.pageContainer}>
            <Pagination 
                count={pages.length} 
                page={props.currentPage} 
                boundaryCount={2} 
                onChange={(e, value) => {props.onPageChanged(value)}}
            />          
            <div className={s.wordsContainer}>
                {deleteWords}
            </div>
        </div>
    )
}

export default DeleteWordsPage