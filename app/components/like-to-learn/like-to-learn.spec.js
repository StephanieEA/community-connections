import React from 'react';

import { shallow } from 'enzyme';
import { assert } from 'chai';

import LikeToLearn from './like-to-learn';

describe('LikeToLearn', () => {
  it('renders as a <section>', () => {
    const learns = ['non-attachment', 'humility']
    const wrapper = shallow(<LikeToLearn learnTopics={learns}/>)
    assert.equal(wrapper.type(), 'section');
  });
});
