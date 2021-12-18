import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from './styles';

class PageNotFound extends Component {
	render() {
		return (
			<Styles>
				<div className="main-wrapper error-page">
					{/* 404 Area */}
					<section className="error-area" style={{ backgroundImage: `` }}>
						<Container>
							<Row>
								<Col md="12">
									<div className="error-box text-center">
										<h1>4<span>0</span>4</h1>
										<h3>Page Not Found</h3>
										<p>Ooops! The page you are looking for, couldn't be found.</p>
										<Link to={process.env.PUBLIC_URL + "/"}><i className="fas fa-home"></i>Go To Homepage</Link>
									</div>
								</Col>
							</Row>
						</Container>
					</section>

				</div>
			</Styles>
		)
	}
}

export default PageNotFound