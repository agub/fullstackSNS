import React from 'react';
import NoImg from '../images/no-img.png';
// MUI
import Paper from '@material-ui/core/Paper';
// Icons
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalendarToday from '@material-ui/icons/CalendarToday';
import useTheme from '@material-ui/core/styles/useTheme';

const ProfileSkeleton = () => {
	const styles = useTheme();
	return (
		<>
			{/* <Paper className={classes.paper}>
				<div className={classes.profile}>
					<div className='image-wrapper'>
						<img
							src={NoImg}
							alt='profile'
							className='profile-image'
						/>
					</div>
					<hr />
					<div className='profile-details'>
						<div className={classes.handle} />
						<hr />
						<div className={classes.fullLine} />
						<div className={classes.fullLine} />
						<hr />
						<LocationOn color='primary' /> <span>Location</span>
						<hr />
						<LinkIcon color='primary' /> https://website.com
						<hr />
						<CalendarToday color='primary' /> Joined date
					</div>
				</div>
			</Paper> */}
			<Paper style={styles.paper}>
				<div style={styles.profile}>
					<div style={styles.profile.imageWrapper}>
						<img
							src={NoImg}
							style={styles.profile.profileImage}
							alt='profile'
						/>
					</div>
					<hr
						style={{
							border: 'none',
						}}
					/>
					<div style={styles.profile.profileDetails}>
						<LocationOn color='primary' />{' '}
						<hr
							style={{
								border: 'none',
							}}
						></hr>
						<LinkIcon color='primary' />
						<hr
							style={{
								border: 'none',
							}}
						/>
						<CalendarToday color='primary' />{' '}
					</div>
				</div>
			</Paper>
		</>
	);
};

export default ProfileSkeleton;
