import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const content =
  "TEXT: Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'";

class main extends Component {
  render() {
    return (
      <div>
        <article>{content}</article>
        <h2>
          <p>
            <Link to="/google">Google</Link>
          </p>{" "}
        </h2>
        <h2>
          <p>
            <Link to="/yahoo">Yahoo</Link>
          </p>{" "}
        </h2>
        <h2>
          <p>
            <Link to="/amazon">Amazon</Link>
          </p>{" "}
        </h2>
        <Helmet>
          <meta
            name="keywords"
            content="Amid,AOC,pressure,Pelosi,suggests,impeachment,back,on,the,table,to,address,grave,new,chapter,of,lawlessness"
          />
          <link rel="google" href="https://www.google.com" />
        </Helmet>
      </div>
    );
  }
}

export default main;
