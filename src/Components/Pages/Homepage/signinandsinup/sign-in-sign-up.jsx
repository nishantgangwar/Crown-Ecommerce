import React from "react";
import "./sign-in-sign-up.scss";
import Signin from '../../../Signin/signin'
import SignUp from '../../../sign-up/signup'
const SignInAndSignUp = () => (
    <div className="sign-in-and-sign-up">
        <Signin/>
        <SignUp/>
    </div>
)

export default SignInAndSignUp;
