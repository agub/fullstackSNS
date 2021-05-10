import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../redux/actions/userActions';

import useTheme from '@material-ui/core/styles/useTheme';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AppLogo from '../images/icon.png';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const Signup = (props) => {
	const dispatch = useDispatch();
	const { loading, errors } = useSelector((state) => state.UI);

	const [state, setState] = useState({
		email: '',
		password: '',
		confirmPassword: '',
		handle: '',
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
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newUserData = {
			email: state.email,
			password: state.password,
			confirmPassword: state.confirmPassword,
			handle: state.handle,
		};
		dispatch(signupUser(newUserData, props.history));
	};
	const styles = useTheme();
	return (
		<div style={styles.root}>
			<Grid container style={styles.form}>
				<Grid item sm />
				<Grid item sm>
					<img src={AppLogo} alt='logo' style={styles.image} />
					<Typography variant='h2' style={styles.pageTitle}>
						Signup
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
						<TextField
							id='confirmPassword'
							name='confirmPassword'
							type='password'
							label='Confirm Password'
							helperText={state.error.confirmPassword}
							error={state.error.confirmPassword ? true : false}
							value={state.confirmPassword}
							style={styles.textField}
							onChange={handleChange}
							fullWidth
						/>
						<TextField
							id='handle'
							name='handle'
							type='text'
							label='Handle'
							helperText={state.error.handle}
							error={state.error.handle ? true : false}
							value={state.handle}
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
							Signup
							{loading && (
								<CircularProgress
									size={20}
									style={styles.progress}
								/>
							)}
						</Button>
						<br />
						<small>
							Already have an account? Login{' '}
							<Link to='/login'>here</Link>
						</small>
					</form>
				</Grid>
				<Grid item sm />
			</Grid>
		</div>
	);
};

// Login.propTypes = {
// 	classes: propTypes.object.isRequired,
// };
export default Signup;
