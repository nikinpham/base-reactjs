import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './helper/ScrollToTop';
import { GlobalStyle } from "./components/common/styles/global.js";

import { PageNotFound, Home, Login, Register, ForgotPassword } from './pages';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<ScrollToTop />
			<Routes>
				<Route exact path={`${process.env.PUBLIC_URL + "/"}`} element={<Home />} />
				<Route exact path={`${process.env.PUBLIC_URL + "/login"}`} element={<Login />} />
				<Route exact path={`${process.env.PUBLIC_URL + "/register"}`} element={<Register />} />
				<Route exact path={`${process.env.PUBLIC_URL + "/forgotpassword"}`} element={<ForgotPassword />} />
				<Route path={`${process.env.PUBLIC_URL + "/404"}`} element={<PageNotFound />} />
			</Routes>
		</Router>
	);
}

export default App;
