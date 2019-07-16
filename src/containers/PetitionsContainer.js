import React, { Component } from 'react'

export default class PetitionsContainer extends Component {
  export const getPetitionsList = () => {
    return (dispatch, getState) => {
      return fetch("http://localhost:3001/petitions").then(function(response) {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
          }
          dispatch({
            payload: response.json()
          });
        }).catch(function(error) {
          dispatch({
            payload:error
          });
        });
      }
    }
  }
  render() {
    return (
      <div>
        Petitions container
      </div>
    )
  }
}
