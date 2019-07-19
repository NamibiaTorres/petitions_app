import React from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Route, Link } from "react-router-dom";
import PetitionContainer from './containers/PetitionContainer';
import PetitionsContainer from './containers/PetitionsContainer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageSize: 10,
      petitions: [{ display_title: 'display_title', id: 1, description: 'description' }],
      sortBy: ['created_at', 'displayed_signature_count'],
    };
  }
  getPetitions = () => {
    axios.get(`http://localhost:3001/petitions?size=${this.state.pageSize}&sortBy=${this.state.sortBy}`)
     .then(res => {
       this.setState({ petitions: res.data.items })
      })
      .catch(err => console.log('There was an error' + err));
  }
  sortBy = (sortType) => {
    this.setState({sortBy: sortType, pageSize: 10}, () => this.getPetitions())
  };

  onLoadPetitions = (e) => {
    e.preventDefault();
    const currentPageSize = this.state.pageSize
    this.setState({
      pageSize: currentPageSize + 5,
    }, () => this.getPetitions())
  }

  render(){
    const componentProps = {
      getPetitions: this.getPetitions,
      petitions: this.state.petitions,
      onLoadPetitions: this.onLoadPetitions,
      sortBy: this.sortBy,
    };
    return (
      <BrowserRouter>
        <div className="App">
          <Route
            path="/"
            render={() =>
              <PetitionsContainer {...componentProps} />
            }
            exact
          />
          <Route
            path="/:petitionId"
            render={() =>
              <PetitionContainer {...componentProps} />
            }
          />
          <Link to="/">Petitions List</Link>{' '}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
