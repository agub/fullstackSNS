import React from 'react';
import MyButton from '../../utils/MyButton';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { likeScream, unlikeScream } from '../../redux/actions/dataActions';

const LikeButton = (props) => {
	const dispatch = useDispatch();
	const { likes, authenticated, credentials } = useSelector(
		(state) => state.user
	);
	const likedScream = () => {
		if (likes && likes.find((like) => like.screamId === props.screamId)) {
			return true;
		} else return false;
	};
	const likeScreamHandle = () => {
		dispatch(likeScream(props.screamId));
	};
	const unlikeScreamHandle = () => {
		dispatch(unlikeScream(props.screamId));
	};
	const likeButton = !authenticated ? (
		<Link to='/login'>
			<MyButton tip='like'>
				<FavoriteBorderIcon color='primary' />
			</MyButton>
		</Link>
	) : likedScream() ? (
		<MyButton tip='undo like' onClick={unlikeScreamHandle}>
			<FavoriteIcon color='primary' />
		</MyButton>
	) : (
		<MyButton tip='like' onClick={likeScreamHandle}>
			<FavoriteBorderIcon color='primary' />
		</MyButton>
	);
	return likeButton;
};

export default LikeButton;
