import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
	render() {
		return (
			<div className='p-5 row'>
				<h2 >This is Login page</h2>
				<Link to={process.env.PUBLIC_URL + "/"}><i className="fas fa-home"></i> Go To Homepage</Link>
			</div>
		)
	}
}

export default Login