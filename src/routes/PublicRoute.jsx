import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

const PublicRoute = ({ children }) => {
    const { user } = useSelector((state) => state.auth);
    const token = Cookies.get('token');

    return token && user ? <Navigate to="/" /> : children;
};

PublicRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PublicRoute;
