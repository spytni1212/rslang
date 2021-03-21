import React from 'react';
import { connect } from 'react-redux'
import * as axios from 'axios'
import { setWords, setCurrentPage } from '../../redux/book-reducer'
import Book from './Book';

class BookContainer extends React.Component {

    componentDidMount() {
        let currentPage = this.props.currentPage - 1
        axios.get(`https://react-learn-words.herokuapp.com/words?group=0&page=${currentPage}`)
        .then(response => {
            console.log(response)
           this.props.setWords(response.data)
           
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        let currentPage = pageNumber - 1
        axios.get(`https://react-learn-words.herokuapp.com/words?group=0&page=${currentPage}`)
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
                onPageChanged={this.onPageChanged}
                currentPage = {this.props.currentPage}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        words: state.book.words,
        totalPages: state.book.totalPages,
        currentPage: state.book.currentPage
    }
}


export default connect(mapStateToProps, {setWords, setCurrentPage})(BookContainer);