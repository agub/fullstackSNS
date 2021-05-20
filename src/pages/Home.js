import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Profile from '../components/profile/Profile';
import Scream from '../components/scream/Scream';
import Grid from '@material-ui/core/Grid';
import { getScreams } from '../redux/actions/dataActions';
import ScreamSkeleton from '../utils/ScreamSkeleton';

function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getScreams());
	}, [dispatch]);

	const { loading, screams } = useSelector((state) => state.data);

	// const [screams, setScreams] = useState(null);

	let recentScreamMarkup = !loading ? (
		screams.map((scream) => (
			<Scream key={scream.screamId} scream={scream} />
		))
	) : (
		<ScreamSkeleton />
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
