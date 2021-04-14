import React from 'react';
import { wordsAPI, userAggregatedWordsAPI } from '../../../api/api'
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

    render() {
        return (
            <BookNavigation 
                totalGroup={this.props.totalGroup}
                currentGroup={this.props.currentGroup}
                onGroupChanged={this.onGroupChanged}
                difficultColor={this.props.difficultColor}
                isLogin={this.props.user.isLogin}
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