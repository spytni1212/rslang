import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {setCurrentGroup, setWords, setUserWords} from '../../../redux/book-reducer'
import BookNavigation from './BookNavigation'

class BookNavigationContainer extends React.Component {

    onGroupChanged = (groupNumber) => {
        this.props.setCurrentGroup(groupNumber)
        let currentPage = this.props.currentPage - 1
        let currentGroup = groupNumber - 1

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

    render() {
        return (
            <BookNavigation 
                totalGroup={this.props.totalGroup}
                currentGroup={this.props.currentGroup}
                onGroupChanged={this.onGroupChanged}
            />
        )
    }

}

let mapStateToProps = (state) => {
    return {
        totalGroup: state.book.totalGroup,
        currentGroup: state.book.currentGroup,
        currentPage: state.book.currentPage,
        user: state.auth
    }
}


export default connect(mapStateToProps, {setCurrentGroup, setWords, setUserWords})(BookNavigationContainer);