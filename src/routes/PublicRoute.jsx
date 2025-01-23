import { Navigate } from 'react-router-dom';
<<<<<<< HEAD
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

const PublicRoute = ({ children }) => {
    const { user } = useSelector((state) => state.auth);
    const token = Cookies.get('token');

    return token && user ? <Navigate to="/" /> : children;
=======
import PropTypes from 'prop-types';
import { useAuth } from '../hooks/useAuth';

const PublicRoute = ({ children }) => {
    const { token } = useAuth();

    return token ? <Navigate to="/" /> : children;
>>>>>>> fe76fd557da426803569ab39d8a9e9e2d64d0c80
};

PublicRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PublicRoute;
