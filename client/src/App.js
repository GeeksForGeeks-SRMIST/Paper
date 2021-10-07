import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./Components/Routing/privateRoute";

//Pages
import Landing from "./Pages/Landing";
import LoginPage from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import CreatePaper from "./Pages/Paper";
import Write from "./Pages/Write";
import PaperPage from "./Pages/PaperPage";
import Search from "./Pages/Search";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/paper" component={CreatePaper} />
          <PrivateRoute exact path="/write" component={Write} />
          <PrivateRoute exact path="/paper/:paper" component={PaperPage} />
          <PrivateRoute exact path="/search" component={Search} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
