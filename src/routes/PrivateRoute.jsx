// import { Navigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
// import { useEffect } from 'react';
// import { verifySession } from '../redux/slices/auth/authSlice';

// const PrivateRoute = ({ children }) => {
//     const { user, loading } = useSelector((state) => state.auth);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(verifySession());
//     }, [dispatch]);

//     if (loading) return <div>Loading...</div>;

//     return user ? children : <Navigate to="/login" />;
// };

// PrivateRoute.propTypes = {
//     children: PropTypes.node.isRequired,
// };

// export default PrivateRoute;


import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { verifySession } from '../redux/slices/auth/authSlice';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useSelector((state) => state.auth);
    const [isVerified, setIsVerified] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const verify = async () => {
            await dispatch(verifySession());
            setIsVerified(true);
        };
        verify();
    }, [dispatch]);

    console.log('private routes called');

    if (loading || !isVerified) return <div>Loading...</div>;
    return user ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;