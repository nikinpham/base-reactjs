import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUserPlus,
	faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { logoutUser } from "../services/index";

const NavigationBar = () => {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const logout = () => {
		dispatch(logoutUser());
	};

	const guestLinks = (
		<>
			<div className="mr-auto"></div>
			<Nav className="navbar-right">
				<Link to="register" className="nav-link">
					<FontAwesomeIcon icon={faUserPlus} className="mr-1" /> Đăng ký
				</Link>
				<Link to="/" className="nav-link">
					Đăng nhập
				</Link>
			</Nav>
		</>
	);
	const userLinks = (
		<>
			{/* <Nav className="mr-auto">
				<Link to={"add"} className="nav-link">
					Add Book
				</Link>
				<Link to={"list"} className="nav-link">
					Book List
				</Link>
				<Link to={"users"} className="nav-link">
					User List
				</Link>
			</Nav> */}
			<Nav className="navbar-right">
				<Link to="logout" className="nav-link" onClick={logout}>
					<FontAwesomeIcon icon={faSignOutAlt} /> Logout
				</Link>
			</Nav>
		</>
	);

	return (
		<Navbar className="navigationBar">
			<Link to={auth.isLoggedIn ? "dashboard" : ""} className="navbar-brand">
				Company Name/Logo
			</Link>
			{auth.isLoggedIn ? userLinks : guestLinks}
		</Navbar>
	);
};

export default NavigationBar;
