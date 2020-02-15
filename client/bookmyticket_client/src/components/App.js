import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Movies from "../Pages/Movies/Movies";
import Sports from "../Pages/Sports/Sports";
import Events from "../Pages/Events/Events";
import Buzz from "../Pages/Buzz/Buzz";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/sports" component={Sports} />
          <Route path="/events" component={Events} />
          <Route path="/buzz" component={Buzz} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
