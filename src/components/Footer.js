import React, { useState, useEffect } from "react";

import { Navbar, Container, Col } from "react-bootstrap";
const Footer = () => {
	const [fullYear, setFullYear] = useState();

	useEffect(() => {
		setFullYear(new Date().getFullYear());
	}, [fullYear]);
	return (
		<Navbar fixed="bottom" bg="dark" className="vw-100">
			<Container>
				<Col lg={12} className="text-center text-white-50">
					<div>{fullYear}, All Rights Reserved by Nikin Pham</div>
				</Col>
			</Container>
		</Navbar>
	);
};

export default Footer;
