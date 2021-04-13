import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab';
import s from './LearningWords.module.css'
import WordCard from '../../../common/WordCard/WordCard'

const useStyles = makeStyles(() =>
    createStyles({
        pagination: {
            margin: '1em',
        }
}))

const LearningWords = (props) => {
    const classes = useStyles()

    let learningWords = props.learningWords.map((word, index) => {
        return (
            <WordCard
                key = {index}
                cardName = 'learningCard'
                word = {word}
                index = {index}
                clickAudioHandler = {props.clickAudioHandler}
                settings = {props.settings}
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
                onChange={(e, value) => {props.onPageChanged(value)}}
            />          
            <div className={s.wordsContainer}>
                {learningWords}
            </div>
        </div>
    )
}

export default LearningWords