import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { likeScream, unlikeScream } from '../redux/actions/dataActions';
import DeleteScream from './DeleteScream';
import ScreamDialog from './ScreamDialog';

import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import ChatIcon from '@material-ui/icons/Chat';
import makeStyles from '@material-ui/core/styles/makeStyles';
import MyButton from '../../utils/MyButton';
import LikeButton from './LikeButton';

const useStyles = makeStyles({
	card: {
		display: 'flex',
		marginBottom: 20,
	},
	image: { minWidth: 200, objectFit: 'cover' },
	content: { padding: 25 },
});
const Scream = (props) => {
	const classes = useStyles();
	// const dispatch = useDispatch();
	const {
		body,
		createdAt,
		userImage,
		userHandle,
		screamId,
		likeCount,
		commentCount,
	} = props.scream;
	const { authenticated, credentials } = useSelector((state) => state.user);
	const deleteButton =
		authenticated && userHandle === credentials.handle ? (
			<DeleteScream screamId={screamId} />
		) : null;

	dayjs.extend(relativeTime);

	return (
		<Card className={classes.card}>
			<CardMedia
				className={classes.image}
				image={userImage}
				title='Profile Image'
			/>
			<CardContent className={classes.content}>
				<Typography
					variant='h5'
					component={Link}
					to={`/user/${userHandle}`}
					color='primary'
				>
					{userHandle}
				</Typography>
				{deleteButton}
				<Typography variant='body2' color='textSecondary'>
					{dayjs(createdAt).fromNow()}
				</Typography>
				<Typography variant='body1'>{body}</Typography>
				<LikeButton screamId={screamId} />
				<span>{likeCount} likes</span>
				<MyButton tip='comments'>
					<ChatIcon color='primary' />
				</MyButton>
				<span>{commentCount} comments</span>
				<ScreamDialog screamId={screamId} userHandle={userHandle} />
			</CardContent>
		</Card>
	);
};

Scream.propTypes = {
	scream: PropTypes.shape({
		body: PropTypes.string,
		createdAt: PropTypes.string,
		userImage: PropTypes.string,
		userHandle: PropTypes.string,
		screamId: PropTypes.string,
		LikeCount: PropTypes.number,
		CommentCount: PropTypes.number,
	}).isRequired,
};

export default Scream;
