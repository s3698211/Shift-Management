import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./page/Home";
import CreateShift from "./page/CreateShift";
import Shift from "./page/Shift";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/createShift"> Create A Shift</Link>
          <Link to="/"> Home page</Link>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createShift" exact component={CreateShift} />
          <Route path="/shift/:id" exact component={Shift} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
