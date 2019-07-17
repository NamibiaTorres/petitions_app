import React, { Component } from 'react'
import axios from 'axios'

export default class PetitionsContainer extends Component {
  getPetitionsList() {
  }

  state = {

    petitions: [],
    page: 1,
    pageSize: 10,
    sortBy: 'created_at'

  }

  componentDidMount() {
    axios.get(`http://localhost:3001/petitions?size=${this.state.pageSize}&sortBy=${this.state.sortBy}`)
      .then(res => {
        this.setState({petitions: res.data});
      })
  }

  render() {
    return (
      <ul>
        {this.state.petitions.map(petition => <li key={petition.id}>{petition.id}</li>)}
      </ul>
    );
  }
}
