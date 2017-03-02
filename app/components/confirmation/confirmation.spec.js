import React from 'react';

import { shallow } from 'enzyme';
import { assert, expect } from 'chai';

import Confirmation from './confirmation';

describe('Confirmation', () => {
  it('renders as a <section>', () => {
    const wrapper = shallow(<Confirmation user={fakeUser}/>)
    assert.equal(wrapper.type(), 'section');
  });

  it('renders a child Button Component', () => {
    const wrapper = shallow(<Confirmation user={fakeUser}/>)
    expect(wrapper.find('Button')).to.have.length(1);
  });

  it('renders a child <article> with a display-user class', () => {
    const wrapper = shallow(<Confirmation user={fakeUser}/>)
    expect(wrapper.find('.display-user')).to.have.length(1);
  });

  it('renders a child <h3> Component', () => {
    const wrapper = shallow(<Confirmation user={fakeUser}/>)
    expect(wrapper.find('h3')).to.have.length(1);
  });

  it('renders a child h1 Component correctly', () => {
    const wrapper = shallow(<Confirmation user={fakeUser}/>)
    const name = wrapper.find('h1').text()
    expect(wrapper.find('h1')).to.have.length(1);
    expect(name).to.equal('Kobe Bryant')
  });

  it('renders 6 child <p>s', () => {
    const wrapper = shallow(<Confirmation user={fakeUser}/>)
    expect(wrapper.find('p')).to.have.length(6);
  });

  it('renders the first <p> component correctly with respect to the users name', () => {
    const wrapper = shallow(<Confirmation user={fakeUser}/>)
    const nameP = wrapper.find('p').first().text()
    expect(nameP).to.equal('Kobe Bryant is open to sharing his/her home for 6 months');
  });

  it('renders the second <p> component correctly with respect to the users name', () => {
    const wrapper = shallow(<Confirmation user={fakeUser}/>)
    const hoursP = wrapper.find('p').at(1).text()
    expect(hoursP).to.equal('Would like to spend 15-20 hours with you');

    const wrapper2 = shallow(<Confirmation user={fakeBlankUser}/>)
    const hoursP2 = wrapper2.find('p').at(1).text()
    expect(hoursP2).to.equal('Would like to spend an unspecified amount of time with you');
  });

  it('renders the third <p> component correctly with respect to the users learn interests', () => {
    const wrapper = shallow(<Confirmation user={fakeUser}/>)
    const learnsP = wrapper.find('p').at(2).text()
    expect(learnsP).to.equal('Would like to learn about: DefenseTagalogArt');

    const wrapper2 = shallow(<Confirmation user={fakeBlankUser}/>)
    const learnsP2 = wrapper2.find('p').at(2).text()
    expect(learnsP2).to.equal('Would like to learn about: ');
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
  hours: '15-20 hours',
  learnTopics: ['Defense', 'Tagalog'],
  teachTopics: ['Hustle', 'Ego'],
  requirementTopics: ['Stay fresh'],
}

const fakeBlankUser = {
  name: '',
  zipcode: '',
  learnSci: false,
  learnArt: false,
  learnTech: false,
  learnSports: false,
  teachSci: false,
  teachArt: false,
  teachTech: false,
  teachSports: false,
  userLearn: '',
  userTeach: '',
  userRequirement: '',
  needToKnow: '',
  lease: '',
  hours: '',
  learnTopics: [],
  teachTopics: [],
  requirementTopics: [],
}
