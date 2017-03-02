import React from 'react';

import { shallow } from 'enzyme';
import { assert } from 'chai';

import App from './App';

describe('App', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<App/>)
    assert.equal(wrapper.type(), 'div');
  });
});
