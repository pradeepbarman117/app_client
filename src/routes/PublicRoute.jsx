import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../hooks/useAuth';

const PublicRoute = ({ children }) => {
    const { token } = useAuth();

    return token ? <Navigate to="/" /> : children;
};

PublicRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PublicRoute;
