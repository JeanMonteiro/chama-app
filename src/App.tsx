import React from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/layout/NavBar";
import Search from "./components/pages/Search";
import History from "./components/pages/History";
import NotFound from "./components/pages/NotFound";
import { Provider } from "react-redux";
import store from "src/store";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar title="ChamaApp" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Search} />
                <Route exact path="/search/:username" component={Search} />
                <Route exact path="/history" component={History} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
      <ToastContainer />
    </>
  );
};

export default App;
