import { FETCHING_DATA } from "../constant/index.js";

const initialState = {
	data: "",
};

const fetchingDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING_DATA:
			return {
				...state,
				data: action.payload,
			};
		default:
			return state;
	}
};

export default fetchingDataReducer;
