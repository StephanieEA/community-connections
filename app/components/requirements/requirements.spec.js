import React from 'react';

import { shallow } from 'enzyme';
import { assert } from 'chai';

import Requirements from './requirements';

describe('Requirements', () => {
  it('renders as a <section>', () => {
    const requirement = ['stay humble', 'no drama']
    const wrapper = shallow(<Requirements requirementTopics={requirement}/>)
    assert.equal(wrapper.type(), 'section');
  });
});
