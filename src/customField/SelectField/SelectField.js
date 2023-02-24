import { useState } from "react";
import { ErrorMessage } from "formik";
import Select from "react-select";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./SelectField.module.scss";
import FormFeedBack from "../../components/FormFeedBack";


const cx = classNames.bind(styles);

function SelectField({
    field,
    form,

    label = '',
    placeholder = '',
    disabled = false,
    options = [],
}) {

    const { name, value, onChange, onBlur } = field;
    const { errors, touched } = form;


    const selectName = options.find(option => option.value === value);

    const handleSelectOptionChanged = (selectOption) => {
        form.setFieldValue(name, selectOption.value);
    }

    const handleSelectOptionBlur = (e) => {
        if (!e.target.value) {
            form.setFieldError(name, "Category is required!");
            form.setFieldTouched(name, true);
        }
    };

    return (
        <div className={cx("form-group")}>
            {label && <label htmlFor={name}>{label}</label>}

            <Select
                placeholder={placeholder}
                disabled={disabled}
                options={options}
                id={name}

                value={selectName}
                onChange={handleSelectOptionChanged}
                onBlur={e => handleSelectOptionBlur(e)}
            />

            <ErrorMessage component={FormFeedBack} name={name} />
        </div>
    );
}

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array
}

export default SelectField;