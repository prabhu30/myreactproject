import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Cards from './card.js';
import Resume from './resume.js';
import {BrowserRouter,Route} from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <BrowserRouter>
        <Route exact path="/" component={Cards}/>

        <Route exact path="/resume" component={Resume}/>
        </BrowserRouter>
      {/* <Cards/> */}
      </div>
    );
  }
}

export default App;
