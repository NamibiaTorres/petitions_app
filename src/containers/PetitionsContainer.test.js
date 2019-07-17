import React from 'react';
import ReactDOM from 'react-dom';
import PetitionsContainer from './containers/PetitionsContainer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// Tests with Enzyme testing library

/// UNIT TESTS:
// when there are 10 petitions in state, user sees 3 items in the list of petitions
// when there a no petitions in state user sees 'loading'
// When user sorts by created_at the list is sorted by most recent petition creation date/time
// When user sorts by displayed_signature_count the list is sorted by (highest to lowest)


/// INTEGRATION TEST
// onClick handlers perform proper functions:
//    for example, sortByCreatedAt, manipulates component state
