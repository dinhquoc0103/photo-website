import { ErrorMessage } from "formik";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./InputField.module.scss";

import FormFeedBack from "../../components/FormFeedBack";

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
    const { errors, touched } = form;

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

            <ErrorMessage component={FormFeedBack} name={name} />
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