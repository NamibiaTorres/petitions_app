import React, { Component } from 'react';
import axios from 'axios';

export default class PetitionsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petitions: [],
      page: 1,
      pageSize: 10,
      sortBy: ['created_at', 'displayed_signature_count'],
    };

    this.onLoadPetitions = this.onLoadPetitions.bind(this);
    this.getPetitions = this.getPetitions.bind(this);
    this.bySignatureCount = this.bySignatureCount.bind(this);
    this.byCreated = this.byCreated.bind(this);
  }


  onLoadPetitions(e) {
    e.preventDefault();
    const currentPageSize = this.state.pageSize
    this.setState({pageSize: currentPageSize + 5 }, () => this.getPetitions())
  }

  getPetitions() {
    axios.get(`http://localhost:3001/petitions?size=${this.state.pageSize}&sortBy=${this.state.sortBy}`)
     .then(res => {
       this.setState({petitions: res.data.items})})
       .catch(err => console.log('There was an error' + err));
  }

  componentDidMount() {
    this.getPetitions();
  }

  sortBySignatures() {
    const currentPetitions = this.state.petitions;
    const newPetitions = currentPetitions.sort(this.bySignatureCount);
    this.setState({petitions: newPetitions})
  }

  bySignatureCount() {
    axios.get(`http://localhost:3001/petitions?size=${this.state.pageSize}&sortBy=${this.state.sortBy}`)
     .then(res => {
       this.setState({sortBy: res.data.items.displayed_signature_count})})
       .catch(err => console.log('There was an error' + err));
  }

  sortByCreatedAt() {
    const currentPetitions = this.state.petitions;
    const newPetitions = currentPetitions.sort(this.byCreated);
    this.setState({petitions: newPetitions})
  }

  byCreated() {
    axios.get(`http://localhost:3001/petitions?size=${this.state.pageSize}&sortBy=${this.state.sortBy}`)
     .then(res => {
       this.setState({sortBy: res.data.items.created_at})})
       .catch(err => console.log('There was an error' + err));
  }

  render() {
    const {petitions} = this.state
    let petitionsList = (
    <ul>
      {petitions && petitions.map((petition) => {
        return <li key={petition.display_title}>{petition.display_title}</li>
      })}
    </ul>
    )


    return (
      <div>
        <h1>These are trending petitions</h1>
        <h2>
          Sort petitions by:

          <button onClick={this.sortBySignatures}> Signature count</button>
          <button onClick={this.sortByCreatedAt}> When created</button>
        </h2>
        {petitions.length > 0 ? petitionsList : "loading"}
        <a href="#" onClick={this.onLoadPetitions}>Load more petitions...</a>
      </div>
    );
  }
}
