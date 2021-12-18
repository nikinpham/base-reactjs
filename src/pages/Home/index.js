import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
	render() {
		return (
			<div className='p-5 row'>
				<Link to={process.env.PUBLIC_URL + "/login"}><i className="fas fa-home"></i>Go To Login</Link>
				<Link to={process.env.PUBLIC_URL + "/register"}><i className="fas fa-home"></i>Go To Register</Link>
				<Link to={process.env.PUBLIC_URL + "/forgotpassword"}><i className="fas fa-home"></i>Go To Forgot Password</Link>
			</div>
		)
	}
}

export default Home