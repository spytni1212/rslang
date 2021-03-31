import React from 'react'
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import Button from '@material-ui/core/Button';
import { Pagination } from '@material-ui/lab';
import s from './PageWords.module.css'

const PageWords = (props) => {

    const apiUrl = 'https://react-learn-words.herokuapp.com'

    let words = props.words.map((word, index) => {
        return <div key={index} className={s.wordContainer}>
                    <div className={s.wordImage} style={{backgroundImage: `url('${apiUrl}/${word.image}')`}}>
                    </div>
                    <div className={s.wordDescription}>
                        <span className={s.wordTranscription}>
                            {word.word} {word.transcription} 
                            <Button size='small' onClick={()=>props.clickAudioHandler(`${apiUrl}/${word.audio}`)}><VolumeUpIcon /></Button>
                        </span>
                        <span className={s.textMeaning}>
                            {word.textMeaning} <Button onClick={()=>props.clickAudioHandler(`${apiUrl}/${word.audioMeaning}`)}><VolumeUpIcon /></Button>
                        </span>
                        <span className={s.textMeaningTranslate}>
                            {word.textMeaningTranslate}
                        </span>
                        <span className={s.textExample}>
                            {word.textExample} <Button onClick={()=>props.clickAudioHandler(`${apiUrl}/${word.audioExample}`)}><VolumeUpIcon /></Button>
                        </span>
                        <span className={s.textExampleTranslate}>
                            {word.textExampleTranslate}
                        </span>
                    </div>
                    <div className={s.buttonsContainer}>
                        <Button 
                            variant="contained" 
                            color="primary"
                            onClick={()=>props.difficultWordClickHandler(word._id, index)}
                        >сложное слово
                        </Button>
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            onClick={()=>props.deleteWordClickHandler(word._id, index)}
                        >удалить слово
                        </Button>
                    </div>
                </div>
    })

    let pagesCount
    let pages = []

    if (props.totalUserCount === 0) {
        pagesCount = props.totalPages
    } else {
        pagesCount = Math.ceil(props.totalUserCount / props.wordsPerPage)
    }

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
                {words}
            </div>
        </div>
    )
}

export default PageWords