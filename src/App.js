import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import PetitionContainer from './containers/PetitionContainer';
import PetitionsContainer from './containers/PetitionsContainer';

class App extends React.Component {
  render(){
  return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" component={PetitionsContainer} exact />
          <Route path="/:petitionId" component={PetitionContainer}/>
        </div>
      </BrowserRouter>
    );
  }
}

const appRoot = document.getElementById('root');

const petitionsList = (id) => {

}

export default App;
