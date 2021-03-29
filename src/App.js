import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import HeaderContainer from './component/Header/HeaderContainer';
import RegistrationContainer from './component/Registration/RegistrationContainer';
import LoginContainer from './component/Login/LoginContainer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Main from './component/Main/Main'
import Footer from './component/Footer/Footer'
import BookContainer from './component/Book/BookContainer'
import Games from './component/Games/Games'
import Statistics from './component/Statistics/Statistics';
import AudioCallContainer from './component/Games/AudioCall/AudioCallContainer'
import AuthorGame from './component/Games/AuthorGame/AuthorGame'
import Savanna from './component/Games/Savanna/Savanna'
import Sprint from './component/Games/Sprint/Sprint'

function App() {
  return (
  	<div className="app">
		  <BrowserRouter>
				<CssBaseline>
					<HeaderContainer />
					<Route path='/' component={Main} exact />
					<Route path='/registration' component={RegistrationContainer} />
					<Route path='/login' component={LoginContainer} />
					<Route path='/book' component={BookContainer} />
					<Route path='/games' component={Games} exact/>
					<Route path='/games/savanna' component={Savanna} />
					<Route path='/games/audioCall' component={AudioCallContainer} />
					<Route path='/games/Sprint' component={Sprint} />
					<Route path='/games/authorGame' component={AuthorGame} />
					<Route path='/statistics' component={Statistics} />
					<Footer /> 
				</CssBaseline>
		  </BrowserRouter>		  
  	</div>

  )
}

export default App;
