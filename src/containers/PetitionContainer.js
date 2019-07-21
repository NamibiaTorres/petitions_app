import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { parse } from 'node-html-parser';
import Title from '../components/Title'

class PetitionContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petition: {},
    };
    // this.getPetitionsList = this.getPetitionsList.bind(this)
    // this.getPetition = this.getPetition.bind(this);
  }

  getPetition(id) {
    axios.get(`http://localhost:3001/petitions/${id}`)
     .then(res => {
       this.setState({petition: res.data})
      })
      .catch(err => console.log('There was an error' + err));
  }

  componentDidMount() {
      const petitionId = this.props.match.params.petitionId
      this.getPetition(petitionId);
      console.log(petitionId)
  }

  render() {
    // This will be handled by the Views in second iteration

    const { display_title, description } = this.state.petition;
    let domparser = new DOMParser();
    const parseDescription = parse(description)

    return (
      <div>
        <Title text = {display_title}/>
        <h3>Description: {description}</h3>
      </div>
    )
  }
}

export default withRouter(PetitionContainer);
