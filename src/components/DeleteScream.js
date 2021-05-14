import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyButton from '../utils/MyButton';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { deleteScream } from '../redux/actions/dataActions';

const DeleteScream = (props) => {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const handleDeleteScream = () => {
		dispatch(deleteScream(props.screamId));
		setOpen(false);
	};
	return (
		<>
			<MyButton
				tip='delete scream'
				onClick={handleOpen}
				btnClassName='deleteButton'
			>
				<DeleteOutlineIcon color='secondary' />
			</MyButton>
			<Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm'>
				<DialogTitle>Are you sure do you want delete</DialogTitle>
				<DialogActions>
					<Button onClick={handleClose} color='primary'>
						Cancel
					</Button>
					<Button onClick={handleDeleteScream} color='secondary'>
						Delete
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default DeleteScream;
