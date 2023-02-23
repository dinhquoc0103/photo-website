import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./InputField.module.scss";

const cx = classNames.bind(styles);

function InputField({
    field,
    form,

    type = "text",
    label = '',
    placeholder = '',
    disabled = false
}) {
    const { name, value, onChange, onBlur } = field;

    return (
        <div className={cx("form-group")}>
            {label && <label htmlFor={name}>{label}</label>}

            <input
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                id={name}

                {...field}
            />
        </div>
    );
}

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
}

export default InputField;