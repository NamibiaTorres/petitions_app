import React, { Component } from 'react';
import axios from 'axios';

export default class PetitionsContainer extends Component {

  // state = {
  //   petitions: [],
  //   page: 1,
  //   pageSize: 10,
  //   sortBy: 'created_at'
  // }
  constructor(props) {
    super(props);

    this.state = {
      petitions: [],
      page: 1,
      pageSize: 10,
      sortBy: 'created_at'
    };

    this.onLoadPetitions = this.onLoadPetitions.bind(this);
    this.renderPetitions = this.renderPetitions.bind(this);
  }


  onLoadPetitions(e) {
    e.preventDefault();
    this.setState(prevState => {
      return {pageSize: this.state.pageSize.count + 5 }
    })
  }

  axios = require('axios');
  renderPetitions() {
    return {
      axios.get(`http://localhost:3001/petitions?size=${this.state.pageSize}&sortBy=${this.state.sortBy}`)
    };
  }

  componentDidMount() {
      this.renderPetitions().then(res => {
        this.setState({petitions: res.data.items});
      })
  }

  render() {
    const {petitions, pageSize} = this.state
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
        {petitions.length > 0 ? petitionsList : "loading"}
        <a href="#" onClick={this.onLoadPetitions}>Load more petitions...</a>
      </div>
    );
  }
}
