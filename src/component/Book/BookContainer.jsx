import React from 'react';
import { connect } from 'react-redux'
import * as axios from 'axios'
import { Howl } from 'howler' 
import { setWords, setUserWords, setCurrentPage, setCurrentGroup, } from '../../redux/book-reducer'
import Book from './Book';

class BookContainer extends React.Component {

    componentDidMount() {
        let currentPage = this.props.currentPage - 1
        let currentGroup = this.props.currentGroup - 1

        if(this.props.user.isLogin) {
            axios.get(`https://react-learn-words.herokuapp.com/users/${this.props.user.userId}/aggregatedWords?group=${currentGroup}&page=${currentPage}`,{
                headers: {'Authorization': `Bearer ${this.props.user.token}`},
                params: { filter: {"userWord.optional.delete":{"$not": {"$eq": true}}}
                }           
            })
            .then(response => {
                this.props.setUserWords(response.data[0].paginatedResults)
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
            axios.get(`https://react-learn-words.herokuapp.com/users/${this.props.user.userId}/aggregatedWords?group=${currentGroup}&page=${currentPage}`,{
                headers: {'Authorization': `Bearer ${this.props.user.token}`},
                params: { filter: {"userWord.optional.delete":{"$not": {"$eq": true}}}
                }           
            })
            .then(response => {
                this.props.setUserWords(response.data[0].paginatedResults)
            })
        } else {
            axios.get(`https://react-learn-words.herokuapp.com/words?group=${currentGroup}&page=${currentPage}`)
            .then(response => {
               this.props.setWords(response.data)           
            })
        }
    }

    onGroupChanged = (groupNumber) => {
        this.props.setCurrentGroup(groupNumber)
        let currentGroup = groupNumber - 1
        let currentPage = this.props.currentPage - 1

        if(this.props.user.isLogin) {
            axios.get(`https://react-learn-words.herokuapp.com/users/${this.props.user.userId}/aggregatedWords?group=${currentGroup}&page=${currentPage}`,{
                headers: {'Authorization': `Bearer ${this.props.user.token}`},
                params: { filter: {"userWord.optional.delete":{"$not": {"$eq": true}}}
                }           
            })
            .then(response => {
                this.props.setUserWords(response.data[0].paginatedResults)
            })
        } else {
            axios.get(`https://react-learn-words.herokuapp.com/words?group=${currentGroup}&page=${currentPage}`)
            .then(response => {
               this.props.setWords(response.data)           
            })
        }
    }

    clickAudioHandler = (src) => {
        const sound = new Howl({
            src
        })
        sound.play()
    }

    render() {
        return (
            <Book
                words={this.props.user.isLogin ? this.props.userWords : this.props.words}
                // words={this.props.userWords}
                totalPages={this.props.totalPages}
                currentPage = {this.props.currentPage}
                onPageChanged={this.onPageChanged}
                totalGroup={this.props.totalGroup}
                currentGroup={this.props.currentGroup}
                onGroupChanged={this.onGroupChanged}
                clickAudioHandler={this.clickAudioHandler}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userWords: state.book.userWords,
        words: state.book.words,
        totalPages: state.book.totalPages,
        currentPage: state.book.currentPage,
        totalGroup: state.book.totalGroup,
        currentGroup: state.book.currentGroup,
        user: state.auth
    }
}


export default connect(mapStateToProps, {setWords, setUserWords, setCurrentPage, setCurrentGroup})(BookContainer);