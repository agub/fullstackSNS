import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitComment } from '../../redux/actions/dataActions';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import useTheme from '@material-ui/core/styles/useTheme';

const CommentForm = (props) => {
	const dispatch = useDispatch();
	const styles = useTheme();
	const { authenticated } = useSelector((state) => state.user);
	const { loading, errors } = useSelector((state) => state.UI);

	const [state, setState] = useState({
		body: '',
		error: {},
	});
	useEffect(() => {
		if (errors) {
			setState((prev) => {
				return { ...prev, error: errors };
			});
		} else {
			setState((prev) => {
				return { ...prev, error: {} };
			});
		}
		if (!errors && !loading) {
			setState((prev) => {
				return { ...prev, body: '' };
			});
		}
	}, [errors, loading]);

	const handleChange = (e) => {
		setState((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(submitComment(props.screamId, { body: state.body }));
	};

	const commentFormMarkUp = authenticated ? (
		<Grid item sm={12} style={{ textAlign: 'center' }}>
			<form onSubmit={handleSubmit}>
				<TextField
					name='body'
					type='text'
					label='Comment on scream'
					error={state.error.comment ? true : false}
					helperText={state.error.comment}
					value={state.body}
					onChange={handleChange}
					fullWidth
					style={styles.textField}
				/>
				<Button
					type='submit'
					variant='contained'
					color='primary'
					style={styles.button}
				>
					Submit
				</Button>
			</form>
			<hr style={styles.visibleSeparator} />
		</Grid>
	) : null;
	return commentFormMarkUp;
};

export default CommentForm;
