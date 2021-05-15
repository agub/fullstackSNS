import React, { useState, useEffect } from 'react';
import { Tooltip } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { postScream, clearErrors } from '../../redux/actions/dataActions';
import MyButton from '../../utils/MyButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import CircularProgress from '@material-ui/core/CircularProgress';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import useTheme from '@material-ui/core/styles/useTheme';
import CloseIcon from '@material-ui/icons/Close';
const PostScream = () => {
	const styles = useTheme();
	const dispatch = useDispatch();
	const { loading, errors } = useSelector((state) => state.UI);

	const [state, setState] = useState({
		open: false,
		body: '',
		errors: {},
	});

	const handleChange = (e) => {
		setState((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(postScream({ body: state.body }));
	};
	const handleOpen = () => {
		setState((prev) => {
			return { ...prev, open: true };
		});
	};
	const handleClose = () => {
		dispatch(clearErrors());
		setState((prev) => {
			return { ...prev, open: false, errors: '' };
		});
	};
	useEffect(() => {
		if (errors) {
			setState((prev) => {
				return { ...prev, errors: errors };
			});
		}
		if (!errors && !loading) {
			setState((prev) => {
				return { ...prev, open: false, body: '' };
			});
		}
	}, [errors, loading]);
	return (
		<>
			<MyButton tip='Post Scream!' onClick={handleOpen}>
				<AddIcon />
			</MyButton>
			<Dialog
				open={state.open}
				onClose={handleClose}
				fullWidth
				maxWidth='sm'
			>
				<MyButton tip='close' onClick={handleClose}>
					<CloseIcon />
				</MyButton>
				<DialogTitle>Post a new Scream</DialogTitle>
				<DialogContent>
					<form onSubmit={handleSubmit}>
						<TextField
							name='body'
							type='text'
							label='SCREAM!!'
							multiline
							rows='3'
							placeholder='Scream at your fellow apes'
							error={state.errors.body ? true : false}
							helperText={state.errors.body}
							style={styles.textField}
							onChange={handleChange}
							fullWidth
						/>
						<Button
							type='submit'
							variant='contained'
							color='primary'
							style={styles.submitButton}
							disabled={loading}
						>
							Submit
							{loading && (
								<CircularProgress
									size={30}
									style={styles.progressSpinner}
								/>
							)}
						</Button>
					</form>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default PostScream;
