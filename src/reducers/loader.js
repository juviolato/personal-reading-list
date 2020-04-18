import { SET_LOADING, SET_LIST_LOADING, SET_MENU_LOADING } from '../actions/loader';

const initialState = {
	isLoading: false,
	isListLoading: false,
	isMenuLoading: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_LOADING:
			return {
				...state,
				isLoading: action.value
			};

		case SET_LIST_LOADING:
			return {
				...state,
				isListLoading: action.value,
				isLoading: action.value || state.isMenuLoading
			};

		case SET_MENU_LOADING:
			return {
				...state,
				isMenuLoading: action.value,
				isLoading: action.value || state.isListLoading
			};

		default:
			return state;
	};
};