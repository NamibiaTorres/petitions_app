import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Title from './Title';
import React from 'react';


describe('Title', () => {
  it('should render a correct text from props', () => {
    const text = "Something";
    const component = shallow(<Title text={text} />);

    expect(component).toMatchSnapshot();
  });
});
