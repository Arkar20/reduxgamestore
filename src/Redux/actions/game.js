import axios from "axios";
import { types } from "../constants/type";

export const setRecentGames = () => {
	return async (dispatch, getState) => {
		const fetchGames = await axios.get("http://localhost:3001/games");
		dispatch({
			type: types.ADD_RECENT_GAMES,
			payload: fetchGames,
		});
	};
};
export const resetGames = () => {
	return {
		type: types.RESET_GAMES,
	};
};
export const setPagenation = pageno => {
	return async (dispatch, getState) => {
		dispatch(resetGames());
		const fetchGames = await axios.get(
			`http://localhost:3001/games?page=${pageno}`
		);
		dispatch({
			type: types.ADD_RECENT_GAMES,
			payload: fetchGames.data,
		});
	};
};
export const setSearchList = games => {
	return {
		type: types.ADD_SEARCH_LIST,
		payload: games,
	};
};
