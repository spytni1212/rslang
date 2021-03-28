import React from 'react';
import { connect } from 'react-redux';
import {setCurrentGroup} from '../../../redux/book-reducer'
import BookNavigation from './BookNavigation'

const BookNavigationContainer = (props) => {

    const onGroupChanged = (groupNumber) => {
        props.setCurrentGroup(groupNumber)
    }

    return (
        <BookNavigation 
            totalGroup={props.totalGroup}
            currentGroup={props.currentGroup}
            onGroupChanged={onGroupChanged}
        />
    )
}

let mapStateToProps = (state) => {
    return {
        totalGroup: state.book.totalGroup,
        currentGroup: state.book.currentGroup,
    }
}


export default connect(mapStateToProps, {setCurrentGroup})(BookNavigationContainer);