import React from "react";
import Homepage from "./Components/Pages/Homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import Shop from "./Components/shop/Shop.jsx";
import Header from "./Components/header/header.jsx";
import SignIn from "./Components/Pages/Homepage/signinandsinup/sign-in-sign-up.jsx";
import "./App.css";
import { connect } from "react-redux";
import { setCurrentUser } from './redux/user/user.action'
import { auth, createUserProfileDocuments } from "./firebase/firebase";
class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocuments(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
