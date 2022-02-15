import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import ItemsComponent from "./components/ItemsComponent";
import AddItemComponent from "./components/AddItemComponent";
import ReceiptCompoent from "./components/ReceiptComponent";
import LoginUserComponent from "./components/LoginUserComponent";
import MenuComponent from "./components/MenuComponent";

function App() {
  return (
    <div>
      <Router>
        {/* <HeaderComponent /> */}

        <Switch>
          <Route exact path="/" component={LoginUserComponent}></Route>
          <Route path="/items" component={ItemsComponent}></Route>
          <Route
            exact
            path="/add-item/:id"
            component={AddItemComponent}
          ></Route>
          <Route path={"/view-item/:id"} component={ReceiptCompoent}></Route>
        </Switch>

        {/* <FooterComponent /> */}
      </Router>
    </div>
  );
}

export default App;
