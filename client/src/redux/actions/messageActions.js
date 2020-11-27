import { CLEAR_MESSAGES } from '../constants/messageConstants';

export const clearMessages = () => dispatch => {
	dispatch({
		type: CLEAR_MESSAGES,
	});
};
