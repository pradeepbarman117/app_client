import * as Yup from 'yup';

const loginValidationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required').max(16, 'Password must be at most 16 characters'),
    passcode: Yup.string().required().min(4, 'Passcode must be at least 4 characters').max(4, 'Passcode must be at most 4 characters')
});

export default loginValidationSchema;