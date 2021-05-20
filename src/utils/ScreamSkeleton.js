import React from 'react';
import noImage from '../images/no-img.png';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import makeStyles from '@material-ui/core/styles/makeStyles';
const useStyles = makeStyles({
	card: {
		display: 'flex',
		marginBottom: 20,
	},
	cardContent: {
		width: '100%',
		flexDirection: 'column',
		padding: 25,
	},
	cover: {
		minWidth: 200,
		objectFit: 'cover',
	},
	handle: {
		width: 60,
		height: 18,
		// backgroundColor: theme.palette.primary.main,
		marginBottom: 7,
	},
	date: {
		height: 14,
		width: 100,
		// backgroundColor: 'rgba(0,0,0, 0.3)',
		marginBottom: 10,
	},
	fullLine: {
		height: 15,
		width: '90%',
		// backgroundColor: 'rgba(0,0,0, 0.6)',
		marginBottom: 10,
	},
	halfLine: {
		height: 15,
		width: '50%',
		// backgroundColor: 'rgba(0,0,0, 0.6)',
		marginBottom: 10,
	},
	// card: {
	// 	display: 'flex',
	// 	marginBottom: 20,
	// },
	// image: { minWidth: 200, objectFit: 'cover' },
	// content: { padding: 25 },
});
const ScreamSkeleton = () => {
	const classes = useStyles();
	const content = Array.from({ length: 5 }).map((item, index) => {
		return (
			<Card className={classes.card} key={index}>
				<CardMedia className={classes.cover} image={noImage}>
					<CardContent className={classes.cardContent}>
						<div className={classes.handle} />
						<div className={classes.date} />
						<div className={classes.fullLine} />
						<div className={classes.fullLine} />
						<div className={classes.halfLine} />
					</CardContent>
				</CardMedia>
			</Card>
		);
	});
	return <>{content}</>;
};

export default ScreamSkeleton;