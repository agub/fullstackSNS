import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthRoute from './utils/AuthRoute';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userActions';

import themeFile from './utils/theme';
import { ThemeProvider } from '@material-ui/core/styles';
// import CreateMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';

import home from './pages/Home';
import login from './pages/Login';
import signup from './pages/Signup';
import Navbar from './components/Navbar';

// const theme = CreateMuiTheme(themeFile);
const theme = createMuiTheme(themeFile);

function App() {
	const dispatch = useDispatch();
	const token = localStorage.FBIdToken;
	if (token) {
		const decodedToken = jwtDecode(token);
		if (decodedToken.exp * 1000 < Date.now()) {
			dispatch(logoutUser());
			window.location.href = '/login';
			localStorage.removeItem('FBIdToken');
		} else {
			dispatch({ type: SET_AUTHENTICATED });
			axios.defaults.headers.common['Authorization'] = token;
			dispatch(getUserData());
		}
	}
	return (
		// <Provider store={store}>
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
							/>
							<AuthRoute exact path='/login' component={login} />
						</Switch>
					</div>
				</Router>
			</div>
		</ThemeProvider>
		// </Provider>
	);
}

export default App;
