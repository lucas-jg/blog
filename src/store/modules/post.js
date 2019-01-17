import { createAction, handleActions } from "redux-actions";
import { Map, fromJS } from "immutable";
import * as api from "lib/api";
import { pender } from "redux-pender";

// action types
const GET_POST = "post/GET_POST";

// action creators
export const getPost = createAction(GET_POST, api.getPost);

// initial state
const initialState = Map({
	post: Map({})
});

// reducer
export default handleActions(
	{
		...pender({
			type: GET_POST,
			onSuccess: (state, action) => {
				const { data: post } = action.payload;
				return state.set("post", fromJS(post));
			},
			onFailure: (state, action) => {
				console.log("onFailure");
			}
		})
	},
	initialState
);
