import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
    type = "button",
    disabled = false,
    className = ["btn"],
    children,
    onClick = null,
    onBlur = null
}) {
    return (
        <button
            type={type}
            disabled={disabled}
            className={cx(className)}
            onClick={onClick}
            onBlur={onBlur}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    type: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.array,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
}

export default Button;