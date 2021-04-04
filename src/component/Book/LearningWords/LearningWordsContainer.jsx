import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { setLearningWords, setTotalUserCount, setCurrentPage, } from '../../../redux/book-reducer';
import LearningWords from './LearningWords';

class LearningWordsContainer extends React.Component {

    componentDidMount() {

        if (this.props.user.isLogin) {
            axios.get(`https://react-learn-words.herokuapp.com/users/${this.props.user.userId}/aggregatedWords`,{
                    headers: {'Authorization': `Bearer ${this.props.user.token}`},
                    params: {
                        wordsPerPage: this.props.wordsPerPage,
                        filter: {"$or":[{"userWord.optional.learning":{"$eq": true}}, {"userWord.optional.difficult":{"$eq": true}}]}
                    }           
                })
                .then(response => {
                    console.log(response)
                    if (response.data[0].totalCount.length === 0) {
                        this.props.setTotalUserCount(0)
                    } else {
                        this.props.setLearningWords(response.data[0].paginatedResults)
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
                filter: {"userWord.optional.learning":{"$eq": true}}
            }           
        })
        .then(response => {
            this.props.setLearningWords(response.data[0].paginatedResults)
            this.props.setTotalUserCount(response.data[0].totalCount[0].count)
        })
        
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
                <LearningWords 
                    learningWords={this.props.learningWords}
                    totalUserCount={this.props.totalUserCount}
                    wordsPerPage = {this.props.wordsPerPage}    
                    onPageChanged= {this.onPageChanged}
                    clickAudioHandler={this.clickAudioHandler}
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
        learningWords: state.book.learningWords,
        totalUserCount: state.book.totalUserCount,
        wordsPerPage: state.book.wordsPerPage,
        user: state.auth,
        difficultColor: state.book.difficultColor,
        settings: state.settings
    }
}

export default connect(mapStateToProps, {setLearningWords, setTotalUserCount, setCurrentPage })(LearningWordsContainer);