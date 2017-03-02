import React from 'react';

import { shallow } from 'enzyme';
import { assert } from 'chai';

import FinalThoughts from './final-thoughts';

describe('FinalThoughts', () => {
  it('renders as a <section>', () => {
    const wrapper = shallow(<FinalThoughts/>)
    assert.equal(wrapper.type(), 'section');
  });
});
