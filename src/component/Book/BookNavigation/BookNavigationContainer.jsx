import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {setCurrentGroup, setWords, setUserWords, setTotalUserCount, setCurrentPage} from '../../../redux/book-reducer'
import BookNavigation from './BookNavigation'

class BookNavigationContainer extends React.Component {

    onGroupChanged = (groupNumber) => {
        let pageNumber = 1
        this.props.setCurrentPage(pageNumber)
        this.props.setCurrentGroup(groupNumber)

        let currentGroup = groupNumber - 1
        let currentPage = pageNumber - 1

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

    render() {
        return (
            <BookNavigation 
                totalGroup={this.props.totalGroup}
                currentGroup={this.props.currentGroup}
                onGroupChanged={this.onGroupChanged}
                difficultColor={this.props.difficultColor}
            />
        )
    }

}

let mapStateToProps = (state) => {
    return {
        totalGroup: state.book.totalGroup,
        currentGroup: state.book.currentGroup,
        currentPage: state.book.currentPage,
        user: state.auth,
        difficultColor: state.book.difficultColor
    }
}

export default connect(mapStateToProps, {setCurrentGroup, setWords, setUserWords, setTotalUserCount, setCurrentPage})(BookNavigationContainer);