import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "../containers/Home";
import Login from "../containers/Login";
import NotFound from "../containers/NotFound";
import Layout from "../components/Layout";
import Player from "../containers/Player";

const App = () => (
  <HashRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/inicio" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/player/:id" component={Player} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </HashRouter>
);

export default App;
