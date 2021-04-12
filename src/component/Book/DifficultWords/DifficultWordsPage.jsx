import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab';
import s from '../PageWords/PageWords.module.css'
import WordCard from '../../../common/WordCard/WordCard'

const useStyles = makeStyles(() =>
    createStyles({
        pagination: {
            margin: '1em',
        }
    }))

const DifficultWordsPage = (props) => {
    const classes = useStyles()

    let difficultWords = props.difficultWords.map((word, index) => {
        return (
            <WordCard
                key = {index}
                cardName = 'difficultCard'
                word = {word}
                clickAudioHandler = {props.clickAudioHandler}
                settings = {props.settings}
                removeWordClickHandler = {props.removeWordClickHandler}
                difficultColor = {props.difficultColor}
            />  
        )
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
                        className={classes.pagination}
                        count={pages.length}
                        page={props.currentPage}
                        boundaryCount={2}
                        onChange={(e, value) => { props.onPageChanged(value) }}
                    />
                    <div className={s.wordsContainer}>
                        {difficultWords}
                    </div>
                </div>
    )
}

export default DifficultWordsPage