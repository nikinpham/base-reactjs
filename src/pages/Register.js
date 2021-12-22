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
	Container,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faLock,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { registerUser } from "../services/index";
import { MyToast } from "../components";

const Register = (props) => {
	const [show, setShow] = useState(false);
	const [message, setMessage] = useState("");

	const initialState = {
		name: "",
		email: "",
		password: "",
		repassword: "",
	};

	const [user, setUser] = useState(initialState);

	const userChange = (event) => {
		const { name, value } = event.target;
		setUser({ ...user, [name]: value });
	};

	const dispatch = useDispatch();

	const saveUser = () => {
		dispatch(registerUser(user))
			.then((response) => {
				setShow(true);
				setMessage(response.message);
				resetRegisterForm();
				setTimeout(() => {
					setShow(false);
					props.history.push("/login");
				}, 2000);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const resetRegisterForm = () => {
		setUser(initialState);
	};

	return (
		<div className="auth-bg d-flex text-center align-items-center">
			<div style={{ display: show ? "block" : "none" }}>
				<MyToast show={show} message={message} type={"success"} />
			</div>
			<Container>
				<Row className="d-flex justify-content-center">
					<Col xs={5}>
						<Card>
							<Card.Header>
								<h3 className="text-center">Đăng ký</h3>
							</Card.Header>
							<Card.Body>
								<Form.Row>
									<Form.Group as={Col}>
										<InputGroup>
											<InputGroup.Prepend>
												<InputGroup.Text>
													<FontAwesomeIcon icon={faUser} />
												</InputGroup.Text>
											</InputGroup.Prepend>
											<FormControl
												autoComplete="off"
												type="text"
												name="name"
												value={user.name}
												onChange={userChange}
												placeholder="Tên của bạn"
											/>
										</InputGroup>
									</Form.Group>
								</Form.Row>
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
												name="email"
												value={user.email}
												onChange={userChange}
												placeholder="Email của bạn"
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
												onChange={userChange}
												placeholder="Nhập mật khẩu"
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
												name="repassword"
												value={user.repassword}
												onChange={userChange}
												placeholder="Nhập lại mật khẩu"
											/>
										</InputGroup>
									</Form.Group>
								</Form.Row>
							</Card.Body>
							<Card.Footer className="text-center">
								<Button
									onClick={saveUser}
									disabled={user.email.length === 0 || user.password.length === 0}
								>
									Đăng ký ngay
								</Button>
							</Card.Footer>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Register;
