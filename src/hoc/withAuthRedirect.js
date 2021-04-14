import React from "react";
import { Redirect } from "react-router";
import { connect } from 'react-redux';

let mapStateToPropsForRedirect = (state) => ({
	isLogin: state.auth.isLogin
})

export const withAuthRedirect = (Component) => {

  class RedirectComponent extends React.Component {
    render() {
      if (this.props.isLogin) return <Redirect to={"/"} />;
      return <Component {...this.props} />;
    }
  }
	
	let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

	return ConnectedAuthRedirectComponent
};

