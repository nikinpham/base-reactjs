import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Login, Register, Dashboard, PageNotFound } from "./pages";
import { Footer, NavigationBar } from "./components";

require('dotenv').config();

const App = () => {
	window.onbeforeunload = (event) => {
		const e = event || window.event;
		e.preventDefault();
		if (e) {
			e.returnValue = "";
		}
		return "";
	};

	return (
		<Router>
			<NavigationBar />
			<Switch>
				<Route path="/" exact component={Login} />
				<Route path="/dashboard" exact component={Dashboard} />
				<Route path="/register" exact component={Register} />
				<Route path="/404" exact component={PageNotFound} />
				<Route
					path="/logout"
					exact
					component={() => (
						<Login message="User Logged Out Successfully." />
					)}
				/>
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;
