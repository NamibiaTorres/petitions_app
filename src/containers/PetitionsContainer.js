import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class PetitionsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
    };
  }

  componentDidMount() {
    if(!this._isMounted){
      this.props.getPetitions();
    }
    this._isMounted = true;
  }

  render() {
    const {
      petitions,
    } = this.props;

    let petitionsList = (
    <ul>
      {petitions && petitions.map((petition) => (
          <li key={petition.display_title}>
            <button onClick={() => this.props.history.push(`/${petition.id}`)}>
              {petition.display_title}
            </button>
          </li>
      ))}
    </ul>
    )

    // This will be handled by the Views in second iteration
    return (
      <div>
        <h1>These are trending petitions</h1>
        <h2>
          Sort petitions by:

          <button onClick={() => this.props.sortBy('displayed_signature_count')}> Signature count</button>
          <button onClick={() => this.props.sortBy('created_at')}> When created</button>
        </h2>
        {petitions.length > 0 ? petitionsList : "loading"}
        <a href="#" onClick={this.props.onLoadPetitions}>Load more petitions...</a>
      </div>
    );
  }
}

export default withRouter(PetitionsContainer);
