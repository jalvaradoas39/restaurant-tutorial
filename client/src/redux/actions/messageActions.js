import { CLEAR_MESSAGES } from '../constants/messageConstants';

export const clear_messages = () => dispatch => {
	dispatch({
		type: CLEAR_MESSAGES,
	});
};
