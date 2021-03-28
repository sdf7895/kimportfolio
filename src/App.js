import React,{ Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import portfolio from "./components/Session/portfolio";
import intro from "./components/Session/intro";
import detailportfolio from "./components/detailportfolio/DetailPortFolio";
import './App.css';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar/>
          <Switch>
            <Route exact path="/" component={portfolio}/>
            <Route path='/portfolio/:Id' component={detailportfolio}/>
            <Route path='/portfolio' component={portfolio}/>
            <Route path='/intro' component={intro}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
