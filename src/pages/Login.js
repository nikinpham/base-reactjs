import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
	Row,
	Col,
	Card,
	Form,
	InputGroup,
	FormControl,
	Button,
	Alert,
	Container,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faLock,
} from "@fortawesome/free-solid-svg-icons";
import { authenticateUser } from "../services/index";

const Login = (props) => {
	const [error, setError] = useState();
	const [show, setShow] = useState(true);

	const initialState = {
		username: "",
		password: "",
	};

	const [user, setUser] = useState(initialState);

	const credentialChange = (event) => {
		const { name, value } = event.target;
		setUser({ ...user, [name]: value });
	};

	const dispatch = useDispatch();

	const validateUser = () => {
		dispatch(authenticateUser(user.username, user.password))
			.then((response) => {
				return props.history.push("/dashboard");
			})
			.catch((error) => {
				setShow(true);
				setError("Invalid username and password");
			});
	};


	return (
		<div className="auth-bg d-flex text-center align-items-center">
			<Container>
				<Row className="d-flex justify-content-center">
					<Col xs={5}>
						{show && props.message && (
							<Alert variant="success" onClose={() => setShow(false)} dismissible>
								{props.message}
							</Alert>
						)}
						{show && error && (
							<Alert variant="danger" onClose={() => setShow(false)} dismissible>
								{error}
							</Alert>
						)}
						<Card>
							<Card.Header>
								<h3 className="text-center">Đăng Nhập</h3>
							</Card.Header>
							<Card.Body>
								<Form.Row>
									<Form.Group as={Col}>
										<InputGroup>
											<InputGroup.Prepend>
												<InputGroup.Text>
													<FontAwesomeIcon icon={faEnvelope} />
												</InputGroup.Text>
											</InputGroup.Prepend>
											<FormControl
												required
												autoComplete="off"
												type="text"
												name="username"
												value={user.username}
												onChange={credentialChange}
												placeholder="Tên đăng nhập"
											/>
										</InputGroup>
									</Form.Group>
								</Form.Row>
								<Form.Row>
									<Form.Group as={Col}>
										<InputGroup>
											<InputGroup.Prepend>
												<InputGroup.Text>
													<FontAwesomeIcon icon={faLock} />
												</InputGroup.Text>
											</InputGroup.Prepend>
											<FormControl
												required
												autoComplete="off"
												type="password"
												name="password"
												value={user.password}
												onChange={credentialChange}
												placeholder="Mật khẩu"
											/>
										</InputGroup>
									</Form.Group>
								</Form.Row>
							</Card.Body>
							<Card.Footer className="text-center">
								<Button
									onClick={validateUser}
									disabled={user.username.length === 0 || user.password.length === 0}
								>
									Đăng nhập
								</Button>
							</Card.Footer>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Login;
