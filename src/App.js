import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthRoute from './utils/AuthRoute';
import { Provider } from 'react-redux';
import store from './redux/store';

import jwtDecode from 'jwt-decode';

import themeFile from './utils/theme';
import { ThemeProvider } from '@material-ui/core/styles';

import CreateMuiTheme from '@material-ui/core/styles/createMuiTheme';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
// import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import home from './pages/Home';
import login from './pages/Login';
import signup from './pages/Signup';
import Navbar from './components/Navbar';

const theme = CreateMuiTheme(themeFile);

let authenticated;
const token = localStorage.FBIdToken;
if (token) {
	const decodedToken = jwtDecode(token);
	if (decodedToken.exp * 1000 < Date.now()) {
		authenticated = false;
		window.location.href = '/login';
		localStorage.removeItem('FBIdToken');
	} else {
		authenticated = true;
	}
}

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<div className='App'>
					<Router>
						<Navbar />
						<div className='container'>
							<Switch>
								<Route exact path='/' component={home} />
								<AuthRoute
									exact
									path='/signup'
									component={signup}
									authenticated={authenticated}
								/>
								<AuthRoute
									exact
									path='/login'
									component={login}
									authenticated={authenticated}
								/>
							</Switch>
						</div>
					</Router>
				</div>
			</ThemeProvider>
		</Provider>
	);
}

export default App;
