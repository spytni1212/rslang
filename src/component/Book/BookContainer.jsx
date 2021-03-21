import React from 'react';
import { connect } from 'react-redux'
import * as axios from 'axios'
import { setWords, setCurrentPage, setCurrentGroup } from '../../redux/book-reducer'
import Book from './Book';

class BookContainer extends React.Component {

    componentDidMount() {
        let currentPage = this.props.currentPage - 1
        let currentGroup = this.props.currentGroup - 1
        axios.get(`https://react-learn-words.herokuapp.com/words?group=${currentGroup}&page=${currentPage}`)
        .then(response => {
            console.log(response)
           this.props.setWords(response.data)           
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        let currentPage = pageNumber - 1
        let currentGroup = this.props.currentGroup - 1
        axios.get(`https://react-learn-words.herokuapp.com/words?group=${currentGroup}&page=${currentPage}`)
        .then(response => {
            console.log(response)
           this.props.setWords(response.data)
           
        })
    }

    onGroupChanged = (groupNumber) => {
        this.props.setCurrentGroup(groupNumber)
        let currentGroup = groupNumber - 1
        let currentPage = this.props.currentPage - 1
        axios.get(`https://react-learn-words.herokuapp.com/words?group=${currentGroup}&page=${currentPage}`)
        .then(response => {
            console.log(response)
           this.props.setWords(response.data)
           
        })
    }

    render() {
        return (
            <Book
                words={this.props.words}
                totalPages={this.props.totalPages}
                currentPage = {this.props.currentPage}
                onPageChanged={this.onPageChanged}
                totalGroup={this.props.totalGroup}
                currentGroup={this.props.currentGroup}
                onGroupChanged={this.onGroupChanged}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        words: state.book.words,
        totalPages: state.book.totalPages,
        currentPage: state.book.currentPage,
        totalGroup: state.book.totalGroup,
        currentGroup: state.book.currentGroup
    }
}


export default connect(mapStateToProps, {setWords, setCurrentPage, setCurrentGroup})(BookContainer);