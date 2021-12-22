import React from "react";
import { useSelector } from "react-redux";
import authToken from "../utils/authToken";

const DashBoard = () => {
	if (localStorage.accessToken) {
		authToken(localStorage.accessToken);
	}

	const auth = useSelector((state) => state.auth);

	return (
		<div className="bg-primary global-height p-0 m-0">
			<h2 className="text-center">
				Chào bạn {auth.username || "rất tiếc chưa đăng nhập"}
			</h2>
		</div>
	);
};

export default DashBoard;
