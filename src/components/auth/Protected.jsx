import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

const Protected = ({ children, user, redirect }) => {
    if (!user) return <Navigate replace to={redirect} />;

    return children ? children : <Outlet />;
};



export default Protected;

Protected.propTypes = {
    children: PropTypes.node,
    user: PropTypes.bool,
    redirect: PropTypes.string,
};
