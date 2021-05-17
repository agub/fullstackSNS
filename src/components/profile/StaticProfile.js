import React from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
// MUI
import MuiLink from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// Icons
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalendarToday from '@material-ui/icons/CalendarToday';

import useTheme from '@material-ui/core/styles/useTheme';

const StaticProfile = (props) => {
	const styles = useTheme();
	const {
		profile: { handle, createdAt, imageUrl, bio, website, location },
	} = props;
	return (
		<Paper style={styles.paper}>
			<div style={styles.profile}>
				<div style={styles.profile.imageWrapper}>
					<img
						src={imageUrl}
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
					<MuiLink
						component={Link}
						to={`/users/${handle}`}
						color='primary'
						variant='h5'
					>
						@ {handle}
					</MuiLink>
					<hr
						style={{
							border: 'none',
						}}
					/>
					{bio && (
						<>
							<Typography variant='body2'>{bio}</Typography>
							<hr />
						</>
					)}
					{location && (
						<>
							<LocationOn color='primary' />{' '}
							<span>{location}</span>
							<hr
								style={{
									border: 'none',
								}}
							/>
						</>
					)}
					{website && (
						<>
							<LinkIcon color='primary' />
							<a
								href={website}
								target='_blank'
								rel='noopener noreferrer'
							>
								{' '}
								{website}
							</a>
							<hr
								style={{
									border: 'none',
								}}
							/>
						</>
					)}
					<CalendarToday color='primary' />{' '}
					<span>Joined {dayjs(createdAt).format('MMM YYYY')}</span>
				</div>
			</div>
		</Paper>
	);
};

export default StaticProfile;
