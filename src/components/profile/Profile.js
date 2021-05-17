import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser, uploadImage } from '../../redux/actions/userActions';
import dayjs from 'dayjs';
import EditDetails from './EditDetails.js';
import MyButton from '../../utils/MyButton';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';

import MuiLink from '@material-ui/core/Link';
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import EditIcon from '@material-ui/icons/Edit';
import CalendarToday from '@material-ui/icons/CalendarToday';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';

function Profile() {
	const dispatch = useDispatch();
	const handleImageChange = (e) => {
		const image = e.target.files[0];
		const formData = new FormData();
		formData.append('image', image, image.name);

		dispatch(uploadImage(formData));
	};
	const handleEditPicture = () => {
		const fileInput = document.getElementById('imageInput');
		fileInput.click();
	};

	const handleLogout = () => {
		dispatch(logoutUser());
	};
	const { credentials, loading, authenticated } = useSelector(
		(state) => state.user
	);
	// console.log(credentials);
	const styles = useTheme();
	let ProfileMarkup = !loading ? (
		authenticated ? (
			<Paper style={styles.paper}>
				<div style={styles.profile}>
					<div style={styles.profile.imageWrapper}>
						<img
							src={credentials.imageUrl}
							style={styles.profile.profileImage}
							alt='profile'
						/>
						<input
							type='file'
							id='imageInput'
							hidden='hidden'
							onChange={handleImageChange}
						/>

						<MyButton
							tip='Edit profile picture'
							onClick={handleEditPicture}
							btnClassName='button'
						>
							<EditIcon color='primary' />
						</MyButton>
					</div>
					<hr
						style={{
							border: 'none',
						}}
					/>
					<div style={styles.profile.profileDetails}>
						<MuiLink
							component={Link}
							to={`/users/${credentials.handle}`}
							color='primary'
							variant='h5'
						>
							@ {credentials.handle}
						</MuiLink>
						<hr
							style={{
								border: 'none',
							}}
						/>
						{credentials.bio && (
							<>
								<Typography variant='body2'>
									{credentials.bio}
								</Typography>
								<hr />
							</>
						)}
						{credentials.location && (
							<>
								<LocationOn color='primary' />{' '}
								<span>{credentials.location}</span>
								<hr
									style={{
										border: 'none',
									}}
								/>
							</>
						)}
						{credentials.website && (
							<>
								<LinkIcon color='primary' />
								<a
									href={credentials.website}
									target='_blank'
									rel='noopener noreferrer'
								>
									{' '}
									{credentials.website}
								</a>
								<hr
									style={{
										border: 'none',
									}}
								/>
							</>
						)}
						<CalendarToday color='primary' />{' '}
						<span>
							Joined{' '}
							{dayjs(credentials.createdAt).format('MMM YYYY')}
						</span>
					</div>
					<MyButton
						tip='Logout'
						onClick={handleLogout}
						btnClassName='button'
					>
						<KeyboardReturn color='primary' />
					</MyButton>
					<EditDetails />
				</div>
			</Paper>
		) : (
			<Paper style={styles.paper}>
				<Typography variant='body2' align='center'>
					No profile found, please login again
				</Typography>
				<div style={styles.button}>
					<Button
						variant='contained'
						color='primary'
						component={Link}
						to='/login'
					>
						Login
					</Button>
					<Button
						variant='contained'
						color='secondary'
						component={Link}
						to='/signup'
					>
						Signup
					</Button>
				</div>
			</Paper>
		)
	) : (
		<p>...</p>
	);
	return ProfileMarkup;
}

export default Profile;
