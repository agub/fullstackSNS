import React from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MyButton from '../../utils/MyButton';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PostScream from '../scream/PostScream';

function NavBar() {
	const { authenticated } = useSelector((state) => state.user);
	return (
		<AppBar position='fixed'>
			<Toolbar className='nav-container'>
				{authenticated ? (
					<>
						{/* <MyButton tip='Post a scream'>
							<AddIcon />
						</MyButton> */}
						<PostScream />
						<MyButton tip='Home'>
							<HomeIcon />
						</MyButton>
						<MyButton tip='Notification'>
							<NotificationsIcon />
						</MyButton>
					</>
				) : (
					<>
						<Button color='inherit' component={Link} to='/login'>
							Login
						</Button>
						<Button color='inherit' component={Link} to='/'>
							Home
						</Button>
						<Button color='inherit' component={Link} to='/signup'>
							Signup
						</Button>
					</>
				)}
			</Toolbar>
		</AppBar>
	);
}

export default NavBar;
