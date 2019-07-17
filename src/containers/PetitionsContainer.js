import React, { Component } from 'react'
import axios from 'axios'

export default class PetitionsContainer extends Component {
  getPetitionsList() {
  }

  state = {

    petitions: [],
    page: 1,
    pageSize: 15,
    sortBy: 'created_at'

  }

  componentDidMount() {
    axios.get(`http://localhost:3001/petitions?size=${this.state.pageSize}&sortBy=${this.state.sortBy}`)
      .then(res => {
        this.setState({petitions: res.data});
      })
  }

  render() {
    const {petitions} = this.state
    let petitionsList = (
    <ul>
      {petitions && petitions.map((petition) => {
        return <li>{petition.id}</li>
      })}
    </ul>
    )

    return (
      <div>
        <h1>These are the trending petitions</h1>

      </div>
    );
  }
}
