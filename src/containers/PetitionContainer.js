import React, { Component } from 'react'

export default class PetitionContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petition: [],
      page: 1,
      title:'',
      description: ''
    };
    this.getPetition = this.getPetition.bind(this);
  }

  getPetition() {
    // gets one the petition we clicked on, and passes back the title and description for that petition
  }
  // STEPS:
  // Once user is rerouted to the new page, they should see the title of the petition and its description
  // Remder the title and description of a single petition
  // Create a "Return to list" button that returns the user to the list of petitions
  render() {
    return (
      <div>
        <h1>Petition Title:{this.state.title}</h1>
        <h3>Description: <p>{this.state.description}</p></h3>
      </div>
    )
  }
}
