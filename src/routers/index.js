import React from "react";
import { Switch, Redirect, BrowserRouter } from "react-router-dom";
import PvtRoute from "./PrivateRoute";
import HomeContainer from "../containers/Home";
import PageNotFound from "../containers/404";
const Router = (props) => {
  let content;
  content = (
    <BrowserRouter>
      <Switch>
        <PvtRoute exact path="/" component={HomeContainer} />
        <PvtRoute exact path="/404" component={PageNotFound} />
        <PvtRoute exact path="/*" component={() => <Redirect to="/404" />} />
      </Switch>
    </BrowserRouter>
  );
  return content;
};

export default Router;
