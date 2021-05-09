import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import makeStyles from '@material-ui/core/styles/makeStyles';
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
	dayjs.extend(relativeTime);

	const {
		body,
		createdAt,
		userImage,
		userHandle,
		screamId,
		LikeCount,
		CommentCount,
	} = props.scream;
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
				<Typography variant='body2' color='textSecondary'>
					{dayjs(createdAt).fromNow()}
				</Typography>
				<Typography variant='body1'>{body}</Typography>
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
