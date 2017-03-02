import React from 'react';

import { shallow } from 'enzyme';
import { assert } from 'chai';

import LeaseHours from './lease-hours';

describe('LeaseHours', () => {
  it('renders as a <section>', () => {
    const wrapper = shallow(<LeaseHours/>)
    assert.equal(wrapper.type(), 'section');
  });
});
