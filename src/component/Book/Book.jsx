import React from 'react';
import { Route } from "react-router-dom";
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import Button from '@material-ui/core/Button';
import BookNavigationContainer from './BookNavigation/BookNavigationContainer'
import PageWordsContainer from './PageWords/PageWordsContainer'
import s from './Book.module.css'

const Book = (props) => {

    return (
        <div className={s.book}>
            <div className={`wrapper ${s.wrapper}`}>
                <BookNavigationContainer />
                <Route path='/book/group/:currentGroup' render={() => <PageWordsContainer />} />
            </div>
        </div>
    )
}

export default Book;