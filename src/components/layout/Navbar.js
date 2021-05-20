import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MyButton from '../../utils/MyButton';
import Notifications from './Notifications';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import PostScream from '../scream/PostScream';

function NavBar() {
	const { authenticated } = useSelector((state) => state.user);
	return (
		<AppBar position='fixed'>
			<Toolbar className='nav-container'>
				{authenticated ? (
					<>
						<PostScream />
						<Link to='/'>
							<MyButton tip='Home'>
								<HomeIcon />
							</MyButton>
						</Link>
						<Notifications />
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
