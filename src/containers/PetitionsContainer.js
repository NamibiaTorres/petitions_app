import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class PetitionsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petitions: [{ id: 1, display_title: 'display_title', description: 'description' }],
      page: 1,
      pageSize: 10,
      sortBy: ['created_at', 'displayed_signature_count'],
    };

    this.onLoadPetitions = this.onLoadPetitions.bind(this);
    this.getPetitions = this.getPetitions.bind(this);
    this.sortBy = this.sortBy.bind(this);
  }


  onLoadPetitions(e) {
    e.preventDefault();
    const currentPageSize = this.state.pageSize
    this.setState({pageSize: currentPageSize + 5 }, () => this.getPetitions())
  }

  getPetitions() {
    axios.get(`http://localhost:3001/petitions?size=${this.state.pageSize}&sortBy=${this.state.sortBy}`)
     .then(res => {
       this.setState({petitions: res.data.items})
      })
      .catch(err => console.log('There was an error' + err));
  }

  componentDidMount() {
    if(!this._isMounted){
      this.getPetitions();
    }
    this._isMounted = true;
  }

  sortBy(sortType) {
    this.setState({sortBy: sortType, pageSize: 10}, () => this.getPetitions())
  };

  render() {
    const componentProps = {
       getPetitions: this.getPetitions,
       petitions: this.state.petitions,
       onLoadPetitions: this.onLoadPetitions,
       sortBy: this.sortBy,
     };

    // const queryParams = querystring.stringify({ test: 'test' });

    const {petitions} = this.props
    let petitionsList = (
      <ul>
        {petitions && petitions.map((petition) => {
          return (<li key={petition.display_title}>
            <a href="petition" onClick={() => this.props.history.push(`/${petition.id}?${componentProps}`)}>
            {petition.display_title}
            </a>
          </li>)
        })}
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
