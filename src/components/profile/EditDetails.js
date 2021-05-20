import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUserDetails } from '../../redux/actions/userActions';
import MyButton from '../../utils/MyButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';

import useTheme from '@material-ui/core/styles/useTheme';

function EditDetails() {
	const dispatch = useDispatch();
	const styles = useTheme();
	const { credentials } = useSelector((state) => state.user);
	const [state, setState] = useState({
		bio: '',
		website: '',
		location: '',
		open: false,
	});

	const handleOpen = () => {
		setState((pre) => {
			return {
				...pre,
				open: true,
			};
		});
	};
	const handleClose = () => {
		setState((pre) => {
			return {
				...pre,
				open: false,
			};
		});
	};
	const handleChange = (e) => {
		// setState({ ...state, [e.target.name]: e.target.value });
		setState((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};

	useEffect(() => {
		setState((prev) => {
			return {
				...prev,
				bio: credentials.bio ? credentials.bio : '',
				website: credentials.website ? credentials.website : '',
				location: credentials.location ? credentials.location : '',
			};
		});
	}, [credentials]);
	const handleSubmit = () => {
		const userDetails = {
			bio: state.bio,
			website: state.website,
			location: state.location,
		};
		dispatch(editUserDetails(userDetails));
		handleClose();
	};
	return (
		<>
			<MyButton
				tip='Edit Details'
				onClick={handleOpen}
				btnClassName='button'
			>
				<EditIcon color='primary' />
			</MyButton>

			<Dialog
				open={state.open}
				onClose={handleClose}
				fullWidth
				maxWidth='sm'
			>
				<DialogTitle>Edit your details</DialogTitle>
				<DialogContent>
					<form>
						<TextField
							name='bio'
							tpye='text'
							label='Bio'
							multiline
							rows='3'
							placeholder='A short bio about yourself'
							style={styles.textField}
							value={state.bio}
							onChange={handleChange}
							fullWidth
						/>
						<TextField
							name='website'
							tpye='text'
							label='Website'
							placeholder='Your personal/professinal website'
							style={styles.textField}
							value={state.website}
							onChange={handleChange}
							fullWidth
						/>
						<TextField
							name='location'
							tpye='text'
							label='Location'
							placeholder='Where you live'
							style={styles.textField}
							value={state.location}
							onChange={handleChange}
							fullWidth
						/>
					</form>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color='primary'>
						Cancel
					</Button>
					<Button onClick={handleSubmit} color='primary'>
						Save
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}

export default EditDetails;
