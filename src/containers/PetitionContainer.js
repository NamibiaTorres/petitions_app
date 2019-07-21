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

  stripBoundaryQuotes(str){
	var strLen = str.length;
	if (str.charAt(0)=='"') str = str.substring(1,strLen--);
	if (str.charAt(--strLen)=='"') str =str.substring(0,strLen);
	return str;
  }
  render() {
    const { display_title, description } = this.state.petition;
    // let domparser = new DOMParser();
    // const parseDescription = parse(description)
    // const cleanDescription = stripBoundaryQuotes(description)
    // NOTE: Attempting to remove boundary quotes around description string
    //        In order to read html tags and properly render description.
    // NOTE 2: This Component view file will handle description in next iteration
    return (
      <div>
        <Title text = {display_title}/>
        <h3>Description: {description}</h3>
      </div>
    )
  }
}

export default withRouter(PetitionContainer);
