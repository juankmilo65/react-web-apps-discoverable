import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const content =
  "TEXT: This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2";

class inner extends Component {
  render() {
    return (
      <div>
        <h2>This is page2</h2>
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
      </div>
    );
  }
}

export default inner;
