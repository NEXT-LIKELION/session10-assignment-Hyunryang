import React, { useState } from "react";
import InputField from "./InputField";
import Checkbox from "./Checkbox";
import SubmitButton from "./SubmitButton";

const SignInForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputField
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <InputField
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            <Checkbox
                label="Remember me"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
            />
            <SubmitButton />
            <a href="#">Forgot your password?</a>
        </form>
    );
};

export default SignInForm;
