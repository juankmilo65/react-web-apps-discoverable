import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import main from "./main";
import inner from "./inner";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Helmet>
          <title>This is page 2</title>
          <meta charSet="utf-8" />
          <meta name="description" content="A React.js application JuanK" />
          <link rel="google" href="https://www.facebook.com/" />
        </Helmet>
        <Switch>
          <Route exact path="/" component={main} />
          <Route exact path="/Inner" component={inner} />
          <Route
            path="/google"
            component={() => {
              window.location = "https://www.google.com";
              return null;
            }}
          />
          <Route
            path="/yahoo"
            component={() => {
              window.location = "https://www.yahoo.com/";
              return null;
            }}
          />
          <Route
            path="/amazon"
            component={() => {
              window.location = "https://www.amazon.com";
              return null;
            }}
          />
          <Route
            path="/facebook"
            component={() => {
              window.location = "https://www.facebook.com/";
              return null;
            }}
          />
          <Route
            path="/instagram"
            component={() => {
              window.location = "https://www.instagram.com/";
              return null;
            }}
          />
          <Route
            path="/twitter"
            component={() => {
              window.location = "https://twitter.com/";
              return null;
            }}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
