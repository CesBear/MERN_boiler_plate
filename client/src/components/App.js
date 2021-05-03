import React, { Component } from 'react';
import '../App.css';
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Route from "react-router-dom/es/Route";

class App extends Component {
  render() {
    return (
      <div>
          <BrowserRouter>
            <div>
                <Route exact path="/" />
                <h1>Test</h1>
            </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
