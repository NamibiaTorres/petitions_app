import React, { Component } from 'react';
import PetitionsContainer from './PetitionsContainer'

export default class PetitionContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petition: '',
      page: 1,
      title:'',
      description: ''
    };
    this.getPetition = this.getPetition.bind(this);
  }


  getPetition() {
    console.log(PetitionsContainer.getPetitions());
    // list = this.PetitionsContainer.getPetitions()
    // list.map((item) => {
    //   return item;
    // })
  }

  // STEPS:
  // Once user is rerouted to the new page, they should see the title of the petition and its description
  // Render the title and description of a single petition
  // Create a "Return to list" button that returns the user to the list of petitions
  render() {
    // This will be handled by the Views in second iteration
    return (
      <div>
        <h1>Petition Title:{this.getPetition.title}</h1>
        <h3>Description: <p>{this.getPetition.description}</p></h3>
      </div>
    )
  }
}
