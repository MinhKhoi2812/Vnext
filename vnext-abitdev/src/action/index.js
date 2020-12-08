import { FETCHING_DATA } from "../constant/index.js";

export const fetchingData = (data) => {
	return {
		type: FETCHING_DATA,
		payload: data,
	};
};
