import React, { Component } from 'react'

export default class PetitionContainer extends Component {
  render() {
    return (
      <div>
        Petition id: {this.props.match.params.petitionId}
      </div>
    )
  }
}
