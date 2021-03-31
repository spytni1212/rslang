import React from 'react';
import { Route } from "react-router-dom";
import BookNavigationContainer from './BookNavigation/BookNavigationContainer'
import PageWordsContainer from './PageWords/PageWordsContainer'
import DeleteWordsPageContainer from './DeleteWordsPage/DeleteWordsPageContainer'
import DifficultWordsPageContainer from './DifficultWords/DifficultWordsPageContainer'
import s from './Book.module.css'

const Book = (props) => {

    return (
        <div className={s.book}>
            <div className={`wrapper ${s.wrapper}`}>
                <BookNavigationContainer />
                <Route path='/book/textBook' render={() => <PageWordsContainer />} />
                <Route path='/book/deleteWords' render={() => <DeleteWordsPageContainer />} />
                <Route path='/book/difficultWords' render={() => <DifficultWordsPageContainer />} />
            </div>
        </div>
    )
}

export default Book;