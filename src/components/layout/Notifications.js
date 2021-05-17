import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { likeScream, unlikeScream } from '../redux/actions/dataActions';
// import DeleteScream from './DeleteScream';
// import ScreamDialog from './ScreamDialog';
import { markNotificaitonsRead } from '../../redux/actions/userActions';
import Badge from '@material-ui/core/Badge';

import dayjs from 'dayjs';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

// Icons
import NotificationsIcon from '@material-ui/icons/Notifications';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatIcon from '@material-ui/icons/Chat';

const Notifications = () => {
	const dispatch = useDispatch();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const { notifications } = useSelector((state) => state.user);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const onMenuOpened = () => {
		let unreadNotificationsId = notifications
			.filter((not) => not.read === false)
			.map((not) => not.notificationId);
		dispatch(markNotificaitonsRead(unreadNotificationsId));
	};
	let notificationsIcon;
	const NotificationFunction = () => {
		console.log();

		if (notifications && notifications.length > 0) {
			notifications.filter((notification) => notification.read === false)
				.length > 0
				? (notificationsIcon = (
						<Badge
							badgeContent={
								notifications.filter(
									(notification) =>
										notification.read === false
								).length
							}
							color='secondary'
						>
							<NotificationsIcon />
						</Badge>
				  ))
				: (notificationsIcon = <NotificationsIcon />);
		} else {
			notificationsIcon = <NotificationsIcon />;
		}
	};
	NotificationFunction();
	let notificationsMarkup =
		notifications && notifications.length > 0 ? (
			notifications.map((not) => {
				const verb = not.type === 'like' ? 'liked' : 'commented on';
				const time = dayjs(not.createdAt).fromNow();
				const iconColor = not.read ? 'primary' : 'secondary';
				const icon =
					not.type === 'like' ? (
						<FavoriteIcon
							color={iconColor}
							style={{ marginRight: 10 }}
						/>
					) : (
						<ChatIcon
							color={iconColor}
							style={{ marginRight: 10 }}
						/>
					);

				return (
					<MenuItem key={not.createdAt} onClick={handleClose}>
						<Link
							to={`/users/${not.recipient}/scream/${not.screamId}`}
							style={{ display: 'flex' }}
						>
							{icon}
							<Typography variatnt='body1'>
								{not.sender} {verb} your scream {time}
							</Typography>
						</Link>
					</MenuItem>
				);
			})
		) : (
			<MenuItem onClick={handleClose}>
				You have no notificaitons yet
			</MenuItem>
		);
	return (
		<>
			<Tooltip placement='top' title='notifications'>
				<IconButton
					aria-controls='simple-menu'
					aria-haspopup='true'
					onClick={handleClick}
				>
					{notificationsIcon}
				</IconButton>
			</Tooltip>
			<Menu
				id='simple-menu'
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
				onEntered={onMenuOpened}
			>
				{notificationsMarkup}
			</Menu>
		</>
	);
};

export default Notifications;
