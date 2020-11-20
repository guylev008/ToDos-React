import React from 'react';
import { useHistory } from 'react-router-dom';
import appRoutes from '../../appRoutes';
import { Formik } from 'formik';
import { validationSchema } from '../../validationSchema/loginForm';
import { Form, InputGroup, Button, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { handleLogin } from '../../state/users/operations';

const LoginForm = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const handleLoginSubmit = async (userName, password) => {
		await dispatch(await handleLogin(userName, password));
		history.push(appRoutes.todo);
	};

	return (
		<Formik
			validationSchema={validationSchema()}
			onSubmit={values => handleLoginSubmit(values.userName, values.password)}
			initialValues={{
				userName: '',
				password: ''
			}}
		>
			{({ handleSubmit, handleChange, values, touched, errors }) => (
				<Form noValidate onSubmit={handleSubmit}>
					<Form.Row>
						<Form.Group as={Col} controlId="validationFormikUsername">
							<Form.Label>Username</Form.Label>
							<InputGroup>
								<Form.Control
									type="text"
									placeholder="Username"
									aria-label="UserName"
									name="userName"
									value={values.userName}
									onChange={handleChange}
									isInvalid={!!errors.userName & touched.userName}
								/>
								<Form.Control.Feedback type="invalid">{errors.userName}</Form.Control.Feedback>
							</InputGroup>
						</Form.Group>
					</Form.Row>
					<Form.Row>
						<Form.Group as={Col} controlId="validationFormik03">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								aria-label="Password"
								name="password"
								value={values.password}
								onChange={handleChange}
								isInvalid={!!errors.city & touched.password}
							/>
							<Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
						</Form.Group>
					</Form.Row>
					<Button type="submit">Login</Button>
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;
