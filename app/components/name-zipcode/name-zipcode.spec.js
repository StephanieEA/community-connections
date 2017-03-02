import React from 'react';

import { shallow } from 'enzyme';
import { assert } from 'chai';

import NameZipcode from './name-zipcode';

describe('NameZipcode', () => {
  it('renders as a <section>', () => {
    const wrapper = shallow(<NameZipcode />)
    assert.equal(wrapper.type(), 'section');
  });
});
