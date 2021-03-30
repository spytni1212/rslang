import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { setDeleteWords } from '../../../redux/book-reducer';
import DeleteWordsPage from './DeleteWordsPage';

class DeleteWordsPageContainer extends React.Component {

    componentDidMount() {

        if (this.props.user.isLogin) {
            axios.get(`https://react-learn-words.herokuapp.com/users/${this.props.user.userId}/aggregatedWords`,{
                    headers: {'Authorization': `Bearer ${this.props.user.token}`},
                    params: { filter: {"userWord.optional.delete":{"$eq": true}}
                    }           
                })
                .then(response => {
                    this.props.setDeleteWords(response.data[0].paginatedResults)
                })
        }
    }

    render() {

        if (this.props.user.isLogin) {
            return (
                <DeleteWordsPage 
                    deleteWords={this.props.deleteWords}    
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
        deleteWords: state.book.deleteWords,
        user: state.auth
    }
}

export default connect(mapStateToProps, {setDeleteWords})(DeleteWordsPageContainer);