import React, { Component } from 'react';
import PetitionsContainer from './PetitionsContainer'

export default class PetitionContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petition: '',
      title:'',
      description: ''
    };
    this.getPetitionsList = this.getPetitionsList.bind(this)
    this.getPetition = this.getPetition.bind(this);
  }

  // getPetitionsList() {
  //   <PetitionsContainer petitions={() => this.props.render(this.getPetitions)}/>
  // }

  // getPetition() {
  //   const list = this.getPetitionsList()
  //   list.map((item) => {
  //     return item;
  //   })
  // }

  componentDidMount(){
    getPetition( petition => {
      this.setState({petition: petition})
    })
  }

  // STEPS:
  // Once user is rerouted to the new page, they should see the title of the petition and its description
  // Render the title and description of a single petition
  // Create a "Return to list" button that returns the user to the list of petitions
  render() {
    // This will be handled by the Views in second iteration
    return (
      <div>
        <PetitionsContainer petition={(petition) => {
          const items = this.getPetitions
          items.maps(item => {
            return item
          }
          )
        }}/>
        <h1>Petition Title:{this.petition.title}</h1>
        <h3>Description: <p>{this.petition.description}</p></h3>
      </div>
    )
  }
}
