import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./FormFeedBack.module.scss";

const cx = classNames.bind(styles);

function FormFeedBack({ children }) {
    return (
        <p className={cx("error-message")}>{children}</p>
    );
}

FormFeedBack.propTypes = {
    children: PropTypes.node
}

export default FormFeedBack;