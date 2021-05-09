import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Scream from '../components/Scream';
import Grid from '@material-ui/core/Grid';

function Home() {
	const [screams, setScreams] = useState(null);
	useEffect(() => {
		axios
			.get('/screams')
			.then((res) => {
				console.log(res.data);
				setScreams(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	let recentScreamMarkup = screams ? (
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
				<p>profile...</p>
			</Grid>
		</Grid>
	);
}
// Scream.propTypes = {
// 	body: PropTypes.string,
// 	createdAt: PropTypes.string,
// 	userImage: PropTypes.string,
// 	userHandle: PropTypes.string,
// 	screamId: PropTypes.string,
// 	LikeCount: PropTypes.number,
// 	CommentCount: PropTypes.number,
// };

// Scream.propTypes = {
// 	scream: PropTypes.shape({
// 		body: PropTypes.string,
// 		createdAt: PropTypes.string,
// 		userImage: PropTypes.string,
// 		userHandle: PropTypes.string,
// 		screamId: PropTypes.string,
// 		LikeCount: PropTypes.number,
// 		CommentCount: PropTypes.number,
// 	}).isRequired,
// };
export default Home;
