import React, { Component } from 'react';
import axios from 'axios';

export default class PetitionsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petitions: [],
      page: 1,
      pageSize: 10,
      sortBy: 'created_at'
    };

    this.onLoadPetitions = this.onLoadPetitions.bind(this);
    this.getPetitions = this.getPetitions.bind(this);
  }


  onLoadPetitions(e) {
    e.preventDefault();
    const currentPageSize = this.state.pageSize
    this.setState({pageSize: currentPageSize + 5 }, () => this.getPetitions())
  }

  getPetitions() {
    axios.get(`http://localhost:3001/petitions?size=${this.state.pageSize}&sortBy=${this.state.sortBy}`)
     .then(res => {
       this.setState({petitions: res.data.items});
    })
  }

  componentDidMount() {
    this.getPetitions();
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
        {petitions.length > 0 ? petitionsList : "loading"}
        <a href="#" onClick={this.onLoadPetitions}>Load more petitions...</a>
      </div>
    );
  }
}
