import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import { validationSchema } from '../../validationSchema/signUpForm';
import { Form, InputGroup, Button, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { handleSignUp } from '../../state/users/operations';
import appRoutes from '../../appRoutes';

const SignUpForm = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const handleSignUpSubmit = async (name, userName, password) => {
		await dispatch(await handleSignUp(name, userName, password));
		history.push(appRoutes.todo);
	};

	return (
		<Formik
			validationSchema={validationSchema()}
			onSubmit={async values => await handleSignUpSubmit(values.fullName, values.userName, values.password)}
			initialValues={{
				fullName: '',
				userName: '',
				password: ''
			}}
		>
			{({ handleSubmit, handleChange, values, touched, errors }) => (
				<Form noValidate onSubmit={handleSubmit}>
					<Form.Row>
						<Form.Group as={Col} controlId="validationFormik01">
							<Form.Label>Full name</Form.Label>
							<InputGroup>
								<Form.Control
									type="text"
									placeholder="Full Name"
									aria-label="FullName"
									name="fullName"
									value={values.fullName}
									onChange={handleChange}
									isValid={!!errors.fullName & touched.fullName}
								/>
								<Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback>
							</InputGroup>
						</Form.Group>
					</Form.Row>
					<Form.Row>
						<Form.Group as={Col} controlId="validationFormikUsername">
							<Form.Label>User Name</Form.Label>
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
								isInvalid={!!errors.password & touched.password}
							/>
							<Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
						</Form.Group>
					</Form.Row>
					<Button type="submit">SignUp</Button>
				</Form>
			)}
		</Formik>
	);
};

export default SignUpForm;
