import React from 'react';
import { connect } from 'react-redux'
import * as axios from 'axios'
import { setWords } from '../../redux/book-reducer'
import Book from './Book';

class BookContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://react-learn-words.herokuapp.com/words?group=0&page=0`)
        .then(response => {
            console.log(response)
           this.props.setWords(response.data)
           
        })
    }


    render() {
        return (
            <Book
                words={this.props.words}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        words: state.book.words
    }
}


export default connect(mapStateToProps, {setWords})(BookContainer);