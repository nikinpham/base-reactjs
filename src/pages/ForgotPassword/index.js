import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ForgotPassword extends Component {
	render() {
		return (
			<div className='p-5 row'>
				<h2 >This is Forgot Password page</h2>
				<Link to={process.env.PUBLIC_URL + "/"}><i className="fas fa-home"></i> Go To Homepage</Link>
			</div>
		)
	}
}

export default ForgotPassword