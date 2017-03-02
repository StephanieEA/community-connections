import React from 'react';

import { shallow } from 'enzyme';
import { assert } from 'chai';

import SeniorForm from './senior-form';

describe('SeniorForm', () => {
  it('renders as a <form>', () => {
    const wrapper = shallow(<SeniorForm/>)
    assert.equal(wrapper.type(), 'form');
  });
});
