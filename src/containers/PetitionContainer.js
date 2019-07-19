import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class PetitionContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petition: '',
      title:'',
      description: ''
    };
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

  // componentDidMount(){
  //   getPetition( petition => {
  //     this.setState({petition: petition})
  //   })
  // }

  // STEPS:
  // Once user is rerouted to the new page, they should see the title of the petition and its description
  // Render the title and description of a single petition
  // Create a "Return to list" button that returns the user to the list of petitions
  render() {
    const { petitionId } = this.props.match.params;
    const currentPetition = this.props.petitions.filter(({ id }) => id === petitionId);
    // This will be handled by the Views in second iteration
    return (
      <div>
        <h1>Petition Title:{currentPetition.title}</h1>
        <h3>Description: <p>{currentPetition.description}</p></h3>
      </div>
    )
  }
}

export default withRouter(PetitionContainer);
