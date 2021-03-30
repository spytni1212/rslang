import React from 'react'
import { connect } from 'react-redux';
import { Howl } from 'howler' 
import * as axios from 'axios'
import { setWords, setUserWords, setCurrentPage, deleteWordInUserWords, setTotalUserCount } from '../../../redux/book-reducer'
import PageWords from './PageWords'

class PageWordsContainer extends React.Component {

    componentDidMount() {
        let currentGroup = this.props.currentGroup - 1
        let currentPage = this.props.currentPage - 1

        if(this.props.user.isLogin) {
            axios.get(`https://react-learn-words.herokuapp.com/users/${this.props.user.userId}/aggregatedWords`,{
                headers: {'Authorization': `Bearer ${this.props.user.token}`},
                params: { 
                    group: currentGroup,
                    page: currentPage,
                    wordsPerPage: 20,
                    filter: {"userWord.optional.delete":{"$not": {"$eq": true}}}
                }           
            })
            .then(response => {
                this.props.setUserWords(response.data[0].paginatedResults)
                this.props.setTotalUserCount(response.data[0].totalCount[0].count)
            })
        } else {
            axios.get(`https://react-learn-words.herokuapp.com/words?group=${currentGroup}&page=${currentPage}`)
            .then(response => {
               this.props.setWords(response.data)   
            })
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        let currentPage = pageNumber - 1
        let currentGroup = this.props.currentGroup - 1

        if(this.props.user.isLogin) {
            axios.get(`https://react-learn-words.herokuapp.com/users/${this.props.user.userId}/aggregatedWords`,{
                headers: {'Authorization': `Bearer ${this.props.user.token}`},
                params: { 
                    group: currentGroup,
                    page: currentPage,
                    wordsPerPage: 20,
                    filter: {"userWord.optional.delete":{"$not": {"$eq": true}}}
                }           
            })
            .then(response => {
                this.props.setUserWords(response.data[0].paginatedResults)
                this.props.setTotalUserCount(response.data[0].totalCount[0].count)
            })
        } else {
            axios.get(`https://react-learn-words.herokuapp.com/words?group=${currentGroup}&page=${currentPage}`)
            .then(response => {
               this.props.setWords(response.data)     
            })
        }
    }

    deleteWordClickHandler = (wordId) => {   
        this.props.deleteWordInUserWords(wordId)
        axios.post(`https://react-learn-words.herokuapp.com/users/${this.props.user.userId}/words/${wordId}`,{
            optional: {"delete": true}
        }, 
        {
            headers: {"Authorization": `Bearer ${this.props.user.token}`}
        }) 
    }

    clickAudioHandler = (src) => {
        const sound = new Howl({
            src
        })
        sound.play()
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
            deleteWordClickHandler={this.deleteWordClickHandler}/>
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
        user: state.auth
    }
}


export default connect(mapStateToProps, {setWords, setUserWords, setCurrentPage, deleteWordInUserWords, setTotalUserCount})(PageWordsContainer)