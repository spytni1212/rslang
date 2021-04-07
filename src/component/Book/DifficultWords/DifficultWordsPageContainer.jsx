import React from 'react';
import { connect } from 'react-redux';
import { userAggregatedWordsAPI, UserWordsAPI } from '../../../api/api'
import { setDifficultWords, setTotalUserCount, setCurrentPage, removeDifficultWord } from '../../../redux/book-reducer';
import DifficultWordsPage from './DifficultWordsPage';

class DifficultWordsPageContainer extends React.Component {

    componentDidMount() {
        let filter = {"userWord.optional.difficult":{"$eq": true}}

        if (this.props.user.isLogin) {
            userAggregatedWordsAPI.getAggregatedWords(this.props.user.userId, this.props.user.token, this.props.wordsPerPage, filter)
                .then(response => {
                    if (response.data[0].totalCount.length === 0) {
                        this.props.setTotalUserCount(0)
                    } else {
                        this.props.setDifficultWords(response.data[0].paginatedResults)
                        console.log(response)
                        this.props.setTotalUserCount(response.data[0].totalCount[0].count)
                    }
                    
                })
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        let currentPage = pageNumber - 1
        let filter = {"userWord.optional.difficult":{"$eq": true}}

        userAggregatedWordsAPI.getAggregatedWords(this.props.user.userId, this.props.user.token, this.props.wordsPerPage, filter, currentPage)
        .then(response => {
            this.props.setDifficultWords(response.data[0].paginatedResults)
            this.props.setTotalUserCount(response.data[0].totalCount[0].count)
        })
        
    }

    removeWordClickHandler = (wordId) => {
        this.props.removeDifficultWord(wordId)
        let optional = {"difficult": false}

        UserWordsAPI.updateUserWords(this.props.user.userId, this.props.user.token, wordId, optional)
    }

    clickAudioHandler = (src) => {
        let audio = new Audio();
        let current = 0;
        audio.src = src[0];
        audio.onended = function() {
            current++;
            if (current >= src.length) {
                return
            }
            audio.src = src[current]
            audio.play()
        }
        audio.play();
    }

    render() {

        if (this.props.user.isLogin) {
            return (
                <DifficultWordsPage 
                    difficultWords={this.props.difficultWords}
                    totalUserCount={this.props.totalUserCount}
                    wordsPerPage = {this.props.wordsPerPage}    
                    onPageChanged= {this.onPageChanged}
                    clickAudioHandler={this.clickAudioHandler}
                    removeWordClickHandler={this.removeWordClickHandler}
                    difficultColor={this.props.difficultColor}
                    settings={this.props.settings}
                />
            )
        }
        return (
            <div>Вы не зарегистрированы</div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        difficultWords: state.book.difficultWords,
        totalUserCount: state.book.totalUserCount,
        wordsPerPage: state.book.wordsPerPage,
        user: state.auth,
        difficultColor: state.book.difficultColor,
        settings: state.settings
    }
}

export default connect(mapStateToProps, {setDifficultWords, setTotalUserCount, setCurrentPage, removeDifficultWord})(DifficultWordsPageContainer);