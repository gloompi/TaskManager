import AppDispathcer from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

import api from '../api';

const SessionActions = {
	authorize(immediate = false, callback) {
		api.authorize({immediate})
		.then(() => {
			AppDispathcer.dispatch({
				type: AppConstants.SESSION_AUTHIRIZE_SUCCESS
			});

			if (callback) callback();
		})
		.catch((err) => {
			AppDispathcer.dispatch({
				type: AppConstants.SESSION_AUTHIRIZE_FAIL,
				error: err
			})

			if (callback) callback();
		})
	}
};

export default SessionActions;