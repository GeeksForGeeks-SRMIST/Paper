import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./Components/Routing/privateRoute";

//Pages
import Landing from "./Pages/Landing";
import LoginPage from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import CreatePaper from "./Pages/Paper";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/paper" component={CreatePaper} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
