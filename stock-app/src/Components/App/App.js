import React, {useState} from 'react';
import Home from "../Home/Home";
import About from "../About/About";
import DowJonesIndex from "../Dashboard/Stocks";
import PriceDetails from "../Dashboard/PriceDetails";
import dowjones from "../Dashboard/dowJones";
import {Route, Link, Switch, Redirect} from "react-router-dom";

import './App.css';

function App() {
return (
    <div>
    <nav>
      <Link to="/">
        <img src="" alt=""/>
        <h1>React-Stocks</h1>
      </Link>
      <Link to="/about">
        About
      </Link>
      <Link to="/dashboard">
        Dow Jones Index
      </Link>
    </nav>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/dashboard" component={DowJonesIndex} />
        <Route path="/stock/:ticker"
          render={({routerProps}) =>
            <PriceDetails {...routerProps}
             ticker={dowjones.ticker}
            /> 
            }/>
        <Route path="*" 
          render={()=> 
          <Redirect to="/dashboard"/> } 
          />
      </Switch>
    </main>
  </div>
  );
}
export default App;
