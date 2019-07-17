import React from 'react';
import ReactDOM from 'react-dom';
import PetitionContainer from './containers/PetitionContainer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// UNIT TESTS with Enzyme:
// The user sees a title and description for one petition

// INTEGRATION TESTS with Enzyme:
// Return button "onClick" returns user back to petitions list
