import React, { useEffect, useState } from 'react';

import axios from 'axios';
import Scream from '../components/scream/Scream';
import StaticProfile from '../components/profile/StaticProfile';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux';
// import ScreamSkeleton from '../util/ScreamSkeleton';
// import ProfileSkeleton from '../util/ProfileSkeleton';

import { getUserData } from '../redux/actions/dataActions';

const User = (props) => {
	const [state, setState] = useState({ profile: null, screamIdParam: null });

	const dispatch = useDispatch();
	const { screams, loading } = useSelector((state) => state.data);
	useEffect(() => {
		console.log(props);
		const handle = props.match.params.handle;
		const screamId = props.match.params.screamId;

		if (screamId) {
			setState((prev) => {
				return {
					...prev,
					screamIdParam: screamId,
				};
			});
			console.log('fired');
		}

		dispatch(getUserData(handle));
		console.log(handle);
		axios
			.get(`/user/${handle}`)
			.then((res) => {
				setState({
					profile: res.data.user,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	console.log(state.profile);
	const screamsMarkup = loading ? (
		<div> loading </div>
	) : screams === null ? (
		<div>no screams from this user</div>
	) : !state.screamIdParam ? (
		screams.map((scream) => (
			<Scream key={scream.screamId} scream={scream} />
		))
	) : (
		screams.map((scream) => {
			if (scream.screamId !== state.screamIdParam) {
				return <Scream key={scream.screamId} scream={scream} />;
			} else
				return (
					<Scream key={scream.screamId} scream={scream} openDialog />
				);
		})
	);

	return (
		<Grid container spacing={3}>
			<Grid item sm={8} xs={12}>
				{screamsMarkup}
			</Grid>
			<Grid item sm={4} xs={12}>
				{state.profile === null ? (
					<div>...</div>
				) : (
					<StaticProfile profile={state.profile} />
				)}
			</Grid>
		</Grid>
	);
};

export default User;
