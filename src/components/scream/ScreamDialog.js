import React, { useState } from 'react';
import MyButton from '../../utils/MyButton';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import Dialog from '@material-ui/core/Dialog';
import CircularProgress from '@material-ui/core/CircularProgress';
import DialogContent from '@material-ui/core/DialogContent';
import LikeButton from './LikeButton';
import useTheme from '@material-ui/core/styles/useTheme';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { getScream } from '../../redux/actions/dataActions';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import ChatIcon from '@material-ui/icons/Chat';

const ScreamDialog = (props) => {
	const styles = useTheme();
	const dispatch = useDispatch();
	const { scream } = useSelector((state) => state.data);
	const { loading } = useSelector((state) => state.UI);
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
		dispatch(getScream(props.screamId));
	};
	const handleClose = () => {
		setOpen(false);
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
			{/* <CommentForm screamId={scream.screamId} /> */}
			{/* <Comments comments={scream.comments} /> */}
		</Grid>
	);
	return (
		<>
			<MyButton onClick={handleOpen} tip='Expand scream'>
				<UnfoldMoreIcon color='primary' />
			</MyButton>

			<Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm'>
				<DialogContent style={styles.dialogContent}>
					{dialogMarkup}
				</DialogContent>
			</Dialog>
		</>
	);
};

export default ScreamDialog;
