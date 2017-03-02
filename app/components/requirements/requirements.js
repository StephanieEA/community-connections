import React from 'react'

import Button from '../../components/button/button.js'
import Input from '../../components/input/input.js'


export default class Requirements extends React.Component {
  render() {
    let inputRequirements =
      this.props.requirementTopics.length >= 1 ?
      this.props.requirementTopics.map((requirement, index) =>
        <p key={index}>{requirement}</p>)
      : ''
    return (
      <section className='step-container'>
        <Button text='PREVIOUS' className='previous' onClick={this.props.lastStep}/>
        <label>Do you have specific requirements for tenants:</label>
        <br/>
        <Input type='checkbox'
               name='noSleepovers'
               onChange={this.props.handleInput}/>
               No overnight guests
        <br/>
        <Input type='checkbox'
               name='noSmoking'
               onChange={this.props.handleInput}/>
               No smoking
        <br/>
        <Input type='checkbox'
               name='yesClean'
               onChange={this.props.handleInput}/>
               Keep Common Areas Clean
        <br/>
        <section>{inputRequirements}</section>
        <Input placeholder='no pets'
               name='userRequirement'
               value={this.props.userRequirement}
               onChange={this.props.handleInput}/>
        <Button onClick={this.props.addItem}
                name='requirementTopics'
                className='userRequirement add-requirements-submit addition'>
                +
        </Button>
        <br/>
        <Button text='SUBMIT' className='next' onClick={this.props.nextStep}/>
      </section>
    )
  }
}
