import * as Yup from 'yup';

export const validationSchema = () => {
	return Yup.object().shape({
		userName: Yup.string().required('User name is required').email('User name must be in email format'),
		password: Yup.string().required('Password is required').min(8, 'Password should be minimum 8 characters')
	});
};
