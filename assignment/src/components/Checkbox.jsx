import React from "react";

const Checkbox = ({ label, name, checked, onChange }) => {
    return (
        <div>
            <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={onChange}
            />
            <label>{label}</label>
        </div>
    );
};

export default Checkbox;
