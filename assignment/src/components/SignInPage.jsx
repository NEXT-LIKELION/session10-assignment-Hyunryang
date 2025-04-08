import React from "react";
import SignInForm from "./SignInForm";
import SocialLoginButtons from "./SocialLoginButtons";
import SignUpLink from "./SignUpLink";
import "../App.css"; // 👈 여기에 스타일 다 포함

const SignInPage = () => {
    return (
        <div className="sign-in-page">
            <div className="sign-in-container">
                <h2>Sign in</h2>
                <SignInForm />
                <div className="divider">or</div>
                <SocialLoginButtons />
                <SignUpLink />
            </div>
        </div>
    );
};

export default SignInPage;
