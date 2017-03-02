import React from 'react';

import { shallow } from 'enzyme';
import { assert } from 'chai';

import Confirmation from './confirmation';

describe('Confirmation', () => {
  it('renders as a <section>', () => {
    const wrapper = shallow(<Confirmation user={fakeUser}/>)
    assert.equal(wrapper.type(), 'section');
  });
});



const fakeUser = {
  name: 'Kobe Bryant',
  zipcode: '90210',
  learnSci: false,
  learnArt: true,
  learnTech: false,
  learnSports: false,
  teachSci: false,
  teachArt: false,
  teachTech: false,
  teachSports: true,
  userLearn: '',
  userTeach: '',
  userRequirement: '',
  needToKnow: 'My home is the bomb!',
  lease: '6 months',
  hours: '15-20hours',
  learnTopics: ['Defense', 'Tagalog'],
  teachTopics: ['Hustle', 'Ego'],
  requirementTopics: ['Stay fresh'],
}
