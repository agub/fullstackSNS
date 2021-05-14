import {
	SET_SCREAMS,
	LOADING_DATA,
	LIKE_SCREAM,
	UNLIKE_SCREAM,
	DELETE_SCREAM,
} from '../types';

const initialState = {
	screams: [],
	scream: {},
	loading: false,
};

export const dataReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOADING_DATA:
			return { ...state, loading: true };
		case SET_SCREAMS:
			return { ...state, loading: false, screams: action.payload };
		case LIKE_SCREAM:
		case UNLIKE_SCREAM:
			let index = state.screams.findIndex(
				(scream) => scream.screamId === action.payload.screamId
			);
			state.screams[index] = action.payload;
			if (state.scream.screamId === action.payload.screamId) {
				state.scream = action.payload;
			}
			return {
				...state,
			};
		case DELETE_SCREAM:
			let number = state.screams.findIndex(
				(scream) => scream.screamId === action.payload
			);
			state.screams.splice(number, 1);
			return {
				...state,
			};
		default:
			return state;
	}
};
