import React from "react";
import "./signin.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../Buttons/customButton";
import { auth, signInWithGoogle } from "../../firebase/firebase";
class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = async event => {
    event.preventDefault();

    const {email, password} =this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      
      this.setState({ email: "", password: "" });
      
    } catch (error) {
      console.log(error);
    }
   
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already Have an Account</h2>
        <span>Signin with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
            label="Password"
          />
          <div className="button">
            {" "}
            <CustomButton type="submit" >Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
