import React from 'react';
import { connect } from 'react-redux';
import AuthorGame from './AuthorGame';



const AuthorGameContainer = (props) => {
    return (
        <AuthorGame/>
    )
}

let mapStateToProps = (state) => {
    return {

    };
  };
  
  export default connect(mapStateToProps, {})(AuthorGameContainer);
