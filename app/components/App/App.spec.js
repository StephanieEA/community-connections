import React from 'react';

import { shallow } from 'enzyme';
import { assert, expect } from 'chai';

import App from './App';

describe('App', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<App/>)
    assert.equal(wrapper.type(), 'div')
  });

  it('renders a child header Component', () => {
    const wrapper = shallow(<App/>)
    wrapper.debug()
    expect(wrapper.find('Header')).to.have.length(1);
  });

  it('renders a child SeniorForm component', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find('SeniorForm')).to.have.length(1);
  });
});
