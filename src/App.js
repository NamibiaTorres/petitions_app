import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import PetitionContainer from './containers/PetitionContainer';
import PetitionsContainer from './containers/PetitionsContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={PetitionsContainer} exact />
        <Route path="/:petitionId" component={PetitionContainer}/>
      </div>
    </BrowserRouter>
  );
}
console.log('App is running');

const appRoot = document.getElementById('root');

// let petitions = require();
// console.log(petitions[0][0])

const petitionsList = (id) => {

}

export default App;
