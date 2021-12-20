import React from "react";
import "./App.css";

import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Welcome from "./pages/Welcome";
import UserList from "./pages/User/UserList";
import Register from "./pages/User/Register";
import Login from "./pages/User/Login";
import Footer from "./components/Footer";
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
			<Container>
				<Row>
					<Col lg={12} className={"margin-top"}>
						<Switch>
							<Route path="/" exact component={Welcome} />
							<Route path="/users" exact component={UserList} />
							<Route path="/register" exact component={Register} />
							<Route path="/login" exact component={Login} />
							<Route
								path="/logout"
								exact
								component={() => (
									<Login message="User Logged Out Successfully." />
								)}
							/>
						</Switch>
					</Col>
				</Row>
			</Container>
			<Footer />
		</Router>
	);
};

export default App;
