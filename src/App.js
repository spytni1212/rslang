import "./App.css";
import Header from './component/Header/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Main from './component/Main/Main'
import Footer from './component/Footer/Footer'

function App() {
  return (
  	<div className="app">
		  
		  <CssBaseline>
			<Header />	
			<Main /> 
			<Footer /> 
		  </CssBaseline>
  	</div>

  )
}

export default App;
