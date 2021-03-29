import React from 'react';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import Button from '@material-ui/core/Button';
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
                    {/* <div className={s.buttonsContainer}>
                        <Button variant="contained" color="primary">сложное слово</Button>
                        <Button variant="contained" color="secondary" onClick={()=>props.deleteWordClickHandler(word._id)}>удалить слово</Button>
                    </div> */}
                </div>
    })



    return (
        <div className={s.pageContainer}>
            <div className={s.wordsContainer}>
                {deleteWords}
            </div>
        </div>
    )
}

export default DeleteWordsPage