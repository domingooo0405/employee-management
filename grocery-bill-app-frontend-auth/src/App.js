import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginComponent from "./pages/LoginComponent";
import ItemsComponent from "./components/ItemsComponent";
import AddItemComponent from "./components/AddItemComponent";
import ViewItemComponent from "./components/ViewItemComponent";
import ReceiptComponent from "./components/ReceiptComponent";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginComponent} />
        <Route path="/items" component={ItemsComponent}></Route>
        <Route path="/add-item/:id" component={AddItemComponent}></Route>
        <Route path={"/view-item/:id"} component={ViewItemComponent}></Route>
        <Route path={"/receipt"} component={ReceiptComponent}></Route>
      </Switch>
    </Router>
  );
}

export default App;
