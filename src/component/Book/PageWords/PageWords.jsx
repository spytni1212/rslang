import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab';
import s from './PageWords.module.css'
import WordCard from '../../../common/WordCard/WordCard'

const useStyles = makeStyles(() =>
    createStyles({
        pagination: {
            margin: '1em',
        }
    }))

const PageWords = (props) => {
    const classes = useStyles()

    let words = props.words.map((word, index) => {
        return (
            <WordCard
                key = {index}
                cardName = 'mainCard'
                word = {word}
                clickAudioHandler = {props.clickAudioHandler}
                settings = {props.settings}
                isLogin = {props.isLogin}
                difficultWordClickHandler = {props.difficultWordClickHandler}
                deleteWordClickHandler = {props.deleteWordClickHandler}
            />    
        )
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
                className={classes.pagination}
                count={pages.length}
                page={props.currentPage}
                boundaryCount={2}
                onChange={(e, value) => { props.onPageChanged(value) }}
            />
            <div className={s.wordsContainer}>
                {words}
            </div>
        </div>
    )
}

export default PageWords