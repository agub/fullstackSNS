import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useTheme from '@material-ui/core/styles/useTheme';

const Comments = (props) => {
	const styles = useTheme();
	// const { screams } = useSelector((state) => state.data);
	return (
		<Grid container>
			{props.comments.map((comment, index) => {
				const { body, createdAt, userImage, userHandle } = comment;
				return (
					<div key={createdAt}>
						<Grid item sm={12}>
							<Grid container>
								<Grid item sm={2}>
									<img
										src={userImage}
										alt='comment'
										style={styles.commentImage}
									/>
								</Grid>
								<Grid item sm={9}>
									<div style={styles.commentData}>
										<Typography
											variant='h5'
											component={Link}
											to={`/users/${userHandle}`}
											color='primary'
										>
											{userHandle}
										</Typography>
										<Typography
											variant='body2'
											color='textSecondary'
										>
											{dayjs(createdAt).format(
												'h:mm a, MMMM DD YYYY'
											)}
										</Typography>
										<hr style={styles.invisibleSeparator} />
										<Typography variabnt='body1'>
											{body}
										</Typography>
									</div>
								</Grid>
							</Grid>
						</Grid>
						{index !== props.comments.length - 1 && (
							<hr style={styles.visibleSeparator} />
						)}
					</div>
				);
			})}
		</Grid>
	);
};

export default Comments;
