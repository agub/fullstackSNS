import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Profile from '../components/Profile';
import Scream from '../components/Scream';
import Grid from '@material-ui/core/Grid';
import { getScream } from '../redux/actions/dataActions';

function Home() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getScream());
	}, []);

	const { loading, screams } = useSelector((state) => state.data);

	// const [screams, setScreams] = useState(null);

	let recentScreamMarkup = !loading ? (
		screams.map((scream) => (
			<Scream key={scream.screamId} scream={scream} />
		))
	) : (
		<p>loading....</p>
	);

	return (
		<Grid container spacing={2}>
			<Grid item sm={8} xs={12}>
				{recentScreamMarkup}
			</Grid>
			<Grid item sm={4} xs={12}>
				<Profile />
			</Grid>
		</Grid>
	);
}

export default Home;
