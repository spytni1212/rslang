import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import { DefaultTheme } from './theme'
import Box from '@material-ui/core/Box';
import HeaderContainer from './component/Header/HeaderContainer';
import RegistrationContainer from './component/Registration/RegistrationContainer';
import LoginContainer from './component/Login/LoginContainer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Main from './component/Main/Main'
import Footer from './component/Footer/Footer'
import Book from './component/Book/Book'
import Games from './component/Games/Games'
import Statistics from './component/Statistics/Statistics';
import AudioCallContainer from './component/Games/AudioCall/AudioCallContainer'
import AuthorGame from './component/Games/AuthorGame/AuthorGame'
import SavannahContainer from './component/Games/Savanna/SavannahContainer'
import Sprint from './component/Games/Sprint/Sprint'
import "./App.css";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<CssBaseline>
						<ThemeProvider theme={DefaultTheme}>
							<HeaderContainer />
							<Box className="contentContainer">
								<Route path='/' component={Main} exact />
								<Route path='/registration' component={RegistrationContainer} />
								<Route path='/login' component={LoginContainer} />
								<Route path='/book' component={Book} />
								<Route path='/games' component={Games} exact />
								<Route path='/games/savannah/:userGame?' component={SavannahContainer} />
								<Route path='/games/audioCall/:userGame?' component={AudioCallContainer} />
								<Route path='/games/Sprint/:userGame?' component={Sprint} />
								<Route path='/games/authorGame/:userGame?' component={AuthorGame} />
								<Route path='/statistics' component={Statistics} />
							</Box>
							<Footer />
						</ThemeProvider>
				</CssBaseline>
			</BrowserRouter>
		</div>

	)
}

export default App;
