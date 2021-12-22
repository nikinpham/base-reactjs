import * as AT from "./authTypes";
import axios from "axios";

const AUTH_URL = process.env.REACT_APP_API_URL + "/auth/login";

export const authenticateUser = (username, password) => async (dispatch) => {
	dispatch(loginRequest());
	try {
		const response = await axios.post(AUTH_URL, {
			username: username,
			password: password,
		});
		const { accessToken, user } = response.data;
		localStorage.setItem("accessToken", accessToken);
		dispatch(success({ username: user.username, isLoggedIn: true }));
		return Promise.resolve(response.data);
	} catch (error) {
		dispatch(failure());
		return Promise.reject(error);
	}
};

export const logoutUser = () => {
	return (dispatch) => {
		dispatch(logoutRequest());
		localStorage.removeItem("accessToken");
		dispatch(success({ username: "", isLoggedIn: false }));
	};
};

const loginRequest = () => {
	return {
		type: AT.LOGIN_REQUEST,
	};
};

const logoutRequest = () => {
	return {
		type: AT.LOGOUT_REQUEST,
	};
};

const success = (isLoggedIn) => {
	return {
		type: AT.SUCCESS,
		payload: isLoggedIn,
	};
};

const failure = () => {
	return {
		type: AT.FAILURE,
		payload: false,
	};
};
