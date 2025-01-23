
import * as Yup from 'yup';


const masterSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    name: Yup.string().min(3,'Name must be at least 3 characters').max(16,'Name must be at most 16 characters').required('Name is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required').max(16, 'Password must be at most 16 characters'),
    passcode: Yup.string().required().min(4, 'Passcode must be at least 4 characters').max(4, 'Passcode must be at most 4 characters'),
    percent: Yup.string().required().min(1, 'Percent must be at least 1 digit').max(3, 'Percent must be at most 3 digit'),
});

export default masterSchema