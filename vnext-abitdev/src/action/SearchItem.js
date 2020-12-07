import { SEARCH_ITEM } from "../constant/index.js";

export const searchItem = (payload) => ({
	type: SEARCH_ITEM,
	payload,
});
