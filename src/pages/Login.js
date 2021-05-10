import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppLogo from '../images/icon.png';
// import propTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';

import useTheme from '@material-ui/core/styles/useTheme';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const Login = (props) => {
	const dispatch = useDispatch();
	const { loading, errors } = useSelector((state) => state.UI);

	const [state, setState] = useState({
		email: '',
		password: '',
		error: {},
	});

	useEffect(() => {
		if (errors) {
			setState((prev) => {
				return { ...prev, error: errors };
			});
		}
	}, [errors]);

	const handleChange = (e) => {
		// setState({ ...state, [e.target.name]: e.target.value });
		setState((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const userData = {
			email: state.email,
			password: state.password,
		};
		dispatch(loginUser(userData, props.history));
		// props.loginUser(userData, props.history);
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
							disabled={loading}
							style={styles.button}
						>
							Login
							{loading && (
								<CircularProgress
									size={20}
									style={styles.progress}
								/>
							)}
						</Button>
						<br />
						<small>
							Don't have an account? Sign up{' '}
							<Link to='/signup'>here</Link>
						</small>
					</form>
				</Grid>
				<Grid item sm />
			</Grid>
		</div>
	);
};

// Login.propTypes = {
// 	styles: propTypes.object.isRequired,
// };

export default Login;
