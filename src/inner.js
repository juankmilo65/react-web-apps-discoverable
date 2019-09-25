import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const content =
  "TEXT: This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2";

class inner extends Component {
  render() {
    return (
      <div>
        <h1>This is page 2</h1>
        <article>{content}</article>
        <p>
          <Link to="/facebook">Facebook</Link>
        </p>
        <p>
          <Link to="/instagram">Instagram</Link>
        </p>
        <p>
          <Link to="/twitter">Twitter</Link>
        </p>
        <Helmet>
          <meta name="keywords" content="This,is,page2" />
          <title>This is page 2</title>
          <link rel="google" href="https://www.facebook.com/" />
        </Helmet>
      </div>
    );
  }
}

export default inner;
