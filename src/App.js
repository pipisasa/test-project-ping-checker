import React, { Component } from "react";
import StatisticProvider from "./contexts/statistic.context";
import Router from "./routes/Router";

// import './App.css'
import './assets/scss/app.scss'

class App extends Component {
  render() {
    return (
      <StatisticProvider>
        <Router/>
      </StatisticProvider>
    );
  }
}

export default App;