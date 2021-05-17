import React, { useState, useEffect } from 'react';
import MyButton from '../../utils/MyButton';
import Comments from './Comments';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import dayjs from 'dayjs';
import Dialog from '@material-ui/core/Dialog';
import CircularProgress from '@material-ui/core/CircularProgress';
import DialogContent from '@material-ui/core/DialogContent';
import LikeButton from './LikeButton';
import useTheme from '@material-ui/core/styles/useTheme';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { clearErrors, getScream } from '../../redux/actions/dataActions';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import ChatIcon from '@material-ui/icons/Chat';

const ScreamDialog = (props) => {
	const { scream } = useSelector((state) => state.data);
	const { loading } = useSelector((state) => state.UI);
	const styles = useTheme();
	const dispatch = useDispatch();
	useEffect(() => {
		if (props.openDialog) {
			handleOpen();
		}
	}, []);
	const [state, setState] = useState({
		open: false,
		oldPath: '',
		newPath: '',
	});
	const handleOpen = () => {
		let oldPath = window.location.pathname;
		const newPath = `/users/${props.userHandle}/scream/${props.screamId}`;
		if (oldPath === newPath) {
			oldPath = `/users/${props.userHandle}`;
		}
		window.history.pushState(null, null, newPath);
		setState((prev) => {
			return {
				...prev,
				open: true,
				oldPath,
				newPath,
			};
		});
		dispatch(getScream(props.screamId));
	};
	const handleClose = () => {
		window.history.pushState(null, null, state.oldPath);
		setState((prev) => {
			return {
				...prev,
				open: false,
			};
		});
		dispatch(clearErrors());
	};
	const dialogMarkup = loading ? (
		<div style={styles.spinnerDiv}>
			<CircularProgress size={200} thickness={2} />
		</div>
	) : (
		<Grid container spacing={3}>
			<Grid item sm={5}>
				<img
					src={scream.userImage}
					alt='Profile'
					style={styles.profile.profileImage}
				/>
			</Grid>

			<Grid item sm={7}>
				<Typography
					component={Link}
					color='primary'
					variant='h5'
					to={`/users/${scream.userHandle}`}
				>
					@{scream.userHandle}
				</Typography>
				<MyButton
					tip='Close'
					onClick={handleClose}
					// tipClassName={classes.closeButton}
				>
					<CloseIcon />
				</MyButton>
				<hr style={styles.invisibleSeparator} />
				<Typography variant='body2' color='textSecondary'>
					{dayjs(scream.createdAt).format('h:mm a, MMMM DD YYYY')}
				</Typography>
				<hr style={styles.invisibleSeparator} />
				<Typography variant='body1'>{scream.body}</Typography>
				<LikeButton screamId={scream.screamId} />
				<span>{scream.likeCount} likes</span>
				<MyButton tip='comments'>
					<ChatIcon color='primary' />
				</MyButton>
				<span>{scream.commentCount} comments</span>
			</Grid>
			<hr style={styles.visibleSeparator} />
			<CommentForm screamId={scream.screamId} />
			{scream.comments && <Comments comments={scream.comments} />}
		</Grid>
	);
	return (
		<>
			<MyButton onClick={handleOpen} tip='Expand scream'>
				<UnfoldMoreIcon color='primary' />
			</MyButton>

			<Dialog
				open={state.open}
				onClose={handleClose}
				fullWidth
				maxWidth='sm'
			>
				<DialogContent style={styles.dialogContent}>
					{dialogMarkup}
				</DialogContent>
			</Dialog>
		</>
	);
};

export default ScreamDialog;
