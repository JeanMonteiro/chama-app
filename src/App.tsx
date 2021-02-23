import React from "react";
import "./App.css";
import Navbar from "./components/layout/NavBar";
import Search from "./components/pages/Search";
import History from "./components/pages/History";
import NotFound from "./components/pages/NotFound";
import { Provider } from "react-redux";
import store from "src/store";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar title="ChamaApp" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Search} />
              <Route exact path="/about" component={History} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
