import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import HeaderContainer from './component/Header/HeaderContainer';
import RegistrationContainer from './component/Registration/RegistrationContainer';
import LoginContainer from './component/Login/LoginContainer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Main from './component/Main/Main'
import Footer from './component/Footer/Footer'
import Book from './component/Book/Book'
import Games from './component/Games/Games'
import Statistics from './component/Statistics/Statistics';
import AudioCall from './component/Games/AudioCall/AudioCall'
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
					<Route path='/book' component={Book} />
					<Route path='/games' component={Games} exact/>
					<Route path='/games/savanna' component={Savanna} />
					<Route path='/games/audioCall' component={AudioCall} />
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
