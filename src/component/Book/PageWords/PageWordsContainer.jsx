import React from 'react'
import { connect } from 'react-redux';
import { wordsAPI, UserWordsAPI, userAggregatedWordsAPI } from '../../../api/api'
import { setWords, setUserWords, setCurrentPage, deleteWordInUserWords, setTotalUserCount } from '../../../redux/book-reducer'
import PageWords from './PageWords'

class PageWordsContainer extends React.Component {

    componentDidMount() {
        let currentGroup = this.props.currentGroup - 1
        let currentPage = this.props.currentPage - 1
        let filter = {"userWord.optional.delete":{"$not": {"$eq": true}}}

        if(this.props.user.isLogin) {
            userAggregatedWordsAPI.getAllUserAggregatedWords(this.props.user.userId, this.props.user.token, currentGroup, currentPage, filter)
            .then(response => {
                this.props.setUserWords(response.data[0].paginatedResults)
                this.props.setTotalUserCount(response.data[0].totalCount[0].count)
            })
        } else {
            wordsAPI.getWords(currentGroup, currentPage)
            .then(response => {
               this.props.setWords(response.data)   
            })
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        let currentPage = pageNumber - 1
        let currentGroup = this.props.currentGroup - 1
        let filter = {"userWord.optional.delete":{"$not": {"$eq": true}}}

        if(this.props.user.isLogin) {
            userAggregatedWordsAPI.getAllUserAggregatedWords(this.props.user.userId, this.props.user.token, currentGroup, currentPage, filter)
            .then(response => {
                this.props.setUserWords(response.data[0].paginatedResults)
                this.props.setTotalUserCount(response.data[0].totalCount[0].count)
            })
        } else {
            wordsAPI.getWords(currentGroup, currentPage)
            .then(response => {
               this.props.setWords(response.data)     
            })
        }
    }

    deleteWordClickHandler = (wordId) => {   
        this.props.deleteWordInUserWords(wordId)
        let wordData = this.props.userWords.filter(word => word._id === wordId)[0]
        let optional = {"delete": true}
        if (wordData.userWord === undefined) {
            UserWordsAPI.createUserWord(this.props.user.userId, this.props.user.token, wordId, optional)
        } else {
            UserWordsAPI.updateUserWords(this.props.user.userId, this.props.user.token, wordId, optional)
        }
    }

    difficultWordClickHandler = (wordId) => {   
        let wordData = this.props.userWords.filter(word => word._id === wordId)[0]
        let optional = {"difficult": true}
        if (wordData.userWord === undefined) {
            UserWordsAPI.createUserWord(this.props.user.userId, this.props.user.token, wordId, optional)
        } else {
            UserWordsAPI.updateUserWords(this.props.user.userId, this.props.user.token, wordId, optional)
        }
    }

    clickAudioHandler = (src) => {
        console.log(src)
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
        return (
            <PageWords 
                words={this.props.user.isLogin ? this.props.userWords : this.props.words}
                totalUserCount={this.props.totalUserCount}
                totalPages={this.props.totalPages}
                wordsPerPage = {this.props.wordsPerPage}
                currentPage = {this.props.currentPage}
                onPageChanged={this.onPageChanged}
                totalGroup={this.props.totalGroup}
                currentGroup={this.props.currentGroup}
                clickAudioHandler={this.clickAudioHandler}
                deleteWordClickHandler={this.deleteWordClickHandler}
                difficultWordClickHandler={this.difficultWordClickHandler}
                settings={this.props.settings}
                isLogin={this.props.user.isLogin}
            />            
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userWords: state.book.userWords,
        words: state.book.words,
        totalPages: state.book.totalPages,
        totalUserCount: state.book.totalUserCount,
        wordsPerPage: state.book.wordsPerPage,
        currentPage: state.book.currentPage,
        totalGroup: state.book.totalGroup,
        currentGroup: state.book.currentGroup,
        user: state.auth,
        settings: state.settings
    }
}

export default connect(mapStateToProps, {setWords, setUserWords, setCurrentPage, deleteWordInUserWords, setTotalUserCount})(PageWordsContainer)
