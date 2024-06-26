
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

const Title = ({ title = "ChitChat", description = "A chat app for all people" }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
    );
};

Title.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};

export default Title;
