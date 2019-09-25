import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const content =
  "TEXT: Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'";

class main extends Component {
  render() {
    return (
      <div>
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
