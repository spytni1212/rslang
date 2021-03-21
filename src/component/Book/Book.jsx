import React from 'react';
import s from './Book.module.css'

const Book = (props) => {

    let words = props.words.map(word => {
        return <div key={word.id} className={s.wordContainer}>
                    <div className={s.wordImage}>
                        <img src={word.image} alt="/"/>
                    </div>
                    <div className={s.wordDescription}>
                        <span>{word.word} {word.transcription}</span>
                        <span className={s.textMeaning}>
                            {word.textMeaning}
                        </span>
                        <span className={s.textMeaningTranslate}>
                            {word.textMeaningTranslate}
                        </span>
                        <span className={s.textExample}>
                            {word.textExample}
                        </span>
                        <span className={s.textExampleTranslate}>
                            {word.textExampleTranslate}
                        </span>
                    </div>
                </div>
    })

    return (
        <div>
            <div className={`wrapper ${s.wrapper}`}>
                <div className={s.wordsContainer}>
                    {words}
                </div>
            </div>
        </div>
    )
}

export default Book;