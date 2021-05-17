import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { likeScream, unlikeScream } from '../redux/actions/dataActions';
// import DeleteScream from './DeleteScream';
// import ScreamDialog from './ScreamDialog';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
// Icons
import NotificationsIcon from '@material-ui/icons/Notifications';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatIcon from '@material-ui/icons/Chat';

const useStyles = makeStyles({
	card: {
		display: 'flex',
		marginBottom: 20,
	},
	image: { minWidth: 200, objectFit: 'cover' },
	content: { padding: 25 },
});

const Notifications = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return <div>a</div>;
};

export default Notifications;
