import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const content =
  "TEXT: Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'";

class main extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta
            name="description"
            content="This is a different description for this route."
          />
        </Helmet>
        <p>
          <Link to="/Inner">Link to page 2</Link>
        </p>

        <h2>This is page1</h2>
        <article>{content}</article>
        <p>
          <Link to="/google">Google</Link>
        </p>
        <p>
          <Link to="/yahoo">Yahoo</Link>
        </p>
        <p>
          <Link to="/amazon">Amazon</Link>
        </p>
      </div>
    );
  }
}

export default main;
