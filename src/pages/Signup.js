import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

import useTheme from '@material-ui/core/styles/useTheme';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AppLogo from '../images/icon.png';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const Singup = (props) => {
	const [state, setState] = useState({
		email: '',
		password: '',
		confirmPassword: '',
		handle: '',
		loading: false,
		error: {},
	});
	const handleChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	console.log(state);
	const handleSubmit = (e) => {
		e.preventDefault();
		setState({ ...state, loading: true });
		const newUserData = {
			email: state.email,
			password: state.password,
			confirmPassword: state.confirmPassword,
			handle: state.handle,
		};
		axios
			.post('/login', newUserData)
			.then((res) => {
				console.log(res.data);
				setState({ ...state, loading: false });
				props.history.push('/');
			})
			.catch((err) => {
				console.log(err.response);
				setState({
					...state,
					error: err.response.data,
					loading: false,
				});
			});
	};
	const styles = useTheme();
	return (
		<div style={styles.root}>
			<Grid container style={styles.form}>
				<Grid item sm />
				<Grid item sm>
					<img src={AppLogo} alt='logo' style={styles.image} />
					<Typography variant='h2' style={styles.pageTitle}>
						Login
					</Typography>
					<form noValidate onSubmit={handleSubmit}>
						<TextField
							id='email'
							name='email'
							type='email'
							label='Email'
							helperText={state.error.email}
							error={state.error.email ? true : false}
							value={state.email}
							style={styles.textField}
							onChange={handleChange}
							fullWidth
						/>
						<TextField
							id='password'
							name='password'
							type='password'
							label='Password'
							helperText={state.error.password}
							error={state.error.password ? true : false}
							value={state.password}
							style={styles.textField}
							onChange={handleChange}
							fullWidth
						/>
						{state.error.general && (
							<Typography
								variant='body2'
								style={styles.customError}
							>
								{state.error.general}
							</Typography>
						)}
						<Button
							type='submit'
							variant='contained'
							color='primary'
							disabled={state.loading}
							style={styles.button}
						>
							Login
							{state.loading && (
								<CircularProgress
									size={20}
									style={styles.progress}
								/>
							)}
						</Button>
						<br />
						<small>
							Don't have an account? Sign up
							<Link to='/signup'>here</Link>
						</small>
					</form>
				</Grid>
				<Grid item sm />
			</Grid>
		</div>
	);
};

export default Singup;
