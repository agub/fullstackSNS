import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CreateMuiTheme from '@material-ui/core/styles/createMuiTheme';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
// import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import home from './pages/Home';
import login from './pages/Login';
import signup from './pages/Signup';
import Navbar from './components/Navbar';

const theme = CreateMuiTheme({
	palette: {
		primary: {
			light: '#eed183',
			main: '#ffac3e',
			dark: '#008394',
			contrastText: '#fff',
		},
		secondary: {
			light: '#ff6333',
			main: '#ff3d00',
			dark: '#b22a00',
			contrastText: '#fff',
		},
	},

	typography: {
		useNextVariants: true,
	},
	form: {
		textAlign: 'center',
	},
	pageTitle: {
		margin: '10px auto 10px auto',
	},
	image: { margin: '20px auto 20px auto', width: 70 },
	textField: {
		margin: '10px auto 10px auto',
	},
	button: {
		marginTop: 20,
		position: 'relative',
		'&:hover': {
			cursor: 'pointer',
		},
	},
	progress: {
		position: 'absolute',
	},
	customError: {
		color: 'red',
		fontSize: '0.8rem',
		marginTop: 10,
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className='App'>
				{/* <h1>apppp!!!</h1> */}
				<Router>
					<Navbar />
					<div className='container'>
						<Switch>
							<Route exact path='/' component={home} />
							<Route exact path='/signup' component={signup} />
							<Route exact path='/login' component={login} />
						</Switch>
					</div>
				</Router>
			</div>
		</ThemeProvider>
	);
}

export default App;
