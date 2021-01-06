import Homepage from "./Components/Pages/Homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import Shop from './Components/shop/Shop.jsx'
import './App.css'
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
