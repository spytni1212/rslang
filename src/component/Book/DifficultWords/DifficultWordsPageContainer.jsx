import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { setDifficultWords, setTotalUserCount, setCurrentPage } from '../../../redux/book-reducer';
import DifficultWordsPage from './DifficultWordsPage';

class DifficultWordsPageContainer extends React.Component {

    componentDidMount() {

        if (this.props.user.isLogin) {
            axios.get(`https://react-learn-words.herokuapp.com/users/${this.props.user.userId}/aggregatedWords`,{
                    headers: {'Authorization': `Bearer ${this.props.user.token}`},
                    params: {
                        wordsPerPage: this.props.wordsPerPage,
                        filter: {"userWord.optional.difficult":{"$eq": true}}
                    }           
                })
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
 
        axios.get(`https://react-learn-words.herokuapp.com/users/${this.props.user.userId}/aggregatedWords`,{
            headers: {'Authorization': `Bearer ${this.props.user.token}`},
            params: { 
                page: currentPage,
                wordsPerPage: this.props.wordsPerPage,
                filter: {"userWord.optional.difficult":{"$eq": true}}
            }           
        })
        .then(response => {
            this.props.setDifficultWords(response.data[0].paginatedResults)
            this.props.setTotalUserCount(response.data[0].totalCount[0].count)
        })
        
    }

    render() {

        if (this.props.user.isLogin) {
            return (
                <DifficultWordsPage 
                    difficultWords={this.props.difficultWords}
                    totalUserCount={this.props.totalUserCount}
                    wordsPerPage = {this.props.wordsPerPage}    
                    onPageChanged= {this.onPageChanged}
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
        user: state.auth
    }
}

export default connect(mapStateToProps, {setDifficultWords, setTotalUserCount, setCurrentPage})(DifficultWordsPageContainer);