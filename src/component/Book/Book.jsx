import React from 'react';
import s from './Book.module.css'

const Book = (props) => {

    let words = props.words.map(word => {
        return <div key={word.id} className={s.wordContainer}>
                    <div className={s.wordImage} style={{backgroundImage: `url('https://react-learn-words.herokuapp.com/${word.image}')`}}>
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

    let pagesCount = props.totalPages;
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let pagination = pages.map(page => {
        return <div className={s.pageNumberContainer} key={page}>
                <span className={`${s.page} ${props.currentPage === page && s.currentPage}`}  onClick={() => {props.onPageChanged(page)}}>{page}</span>
            </div>
    })

    return (
        <div className={s.book}>
            <div className={`wrapper ${s.wrapper}`}>
                <div className={s.paginationContainer}>{pagination}</div>
                <div className={s.wordsContainer}>
                    {words}
                </div>
            </div>
        </div>
    )
}

export default Book;