import React from 'react';

import { shallow } from 'enzyme';
import { assert } from 'chai';

import LikeToTeach from './like-to-teach';

describe('LikeToTeach', () => {
  it('renders as a <section>', () => {
    const teach = ['non-attachment', 'humility']
    const wrapper = shallow(<LikeToTeach teachTopics={teach}/>)
    assert.equal(wrapper.type(), 'section');
  });
});
