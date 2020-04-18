import { TOGGLE_SAFETY_MODE } from '../actions/safety';

const initialState = {
	safetyModeIsOn: true
};

export default (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_SAFETY_MODE:
			return {
				...state,
				safetyModeIsOn: !state.safetyModeIsOn
			};

		default:
			return state;
	};
};