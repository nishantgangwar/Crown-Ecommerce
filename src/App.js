import React from "react";
import Homepage from "./Components/Pages/Homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import Shop from "./Components/shop/Shop.jsx";
import Header from "./Components/header/header.jsx";
import SignIn from "./Components/Pages/Homepage/signinandsinup/sign-in-sign-up.jsx";
import "./App.css";
import { auth, createUserProfileDocuments } from "./firebase/firebase";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocuments(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
