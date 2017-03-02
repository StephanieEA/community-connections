import React from 'react';

import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { assert, expect } from 'chai';

import Button from './Button';

describe('Button', () => {
  it('renders as a <button>', () => {
    const wrapper = shallow(<Button />)
    assert.equal(wrapper.type(), 'button');
  });

  it('has className and aria-label properties', () => {
    const fakeName = 'fakeName'
    const wrapper = mount(<Button className={fakeName} />)
    const buttonWrapper = wrapper.find('button')
    expect(buttonWrapper.props().className).to.equal('fakeName')
  })

  it('the onClick property triggers the function from its parent', () => {
    const pFunction = sinon.spy()
    const wrapper = shallow(<Button onClick={pFunction}/>)
    assert.equal(pFunction.calledOnce, false)
    wrapper.simulate('click')
    assert.equal(pFunction.calledOnce, true)
  })

});
