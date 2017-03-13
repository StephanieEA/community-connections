import React from 'react'

import Button from '../../components/button/button.js'
import Input from '../../components/input/input.js'


export default class Requirements extends React.Component {
  render() {
    let inputRequirements =
      this.props.userInput.requirementTopics.length >= 1 ?
      this.props.userInput.requirementTopics.map((requirement, index) =>
        <label className='checkbox-question' key={index}><input type='checkbox'/>
          {requirement}
        </label>)
      : ''
    return (
      <section className='step-container'>
        <Button text='PREVIOUS' className='previous' onClick={this.props.lastStep}/>
        <label>Do you have specific requirements for tenants:</label>
        <br/>
        <label className='checkbox-question'>
        <Input type='checkbox'
               name='noSleepovers'
               onChange={this.props.handleInput}/>
               No overnight guests
        </label>
        <label className='checkbox-question'>
          <Input type='checkbox'
                 name='noSmoking'
                 onChange={this.props.handleInput}/>
                 No smoking
        </label>
        <label className='checkbox-question'>
          <Input type='checkbox'
                 name='yesClean'
                 onChange={this.props.handleInput}/>
                 Keep Common Areas Clean
        </label>
        <section>{inputRequirements}</section>
        <label className='add-requirement'>
        <Input placeholder='no pets'
               name='userRequirement'
               value={this.props.userRequirement}
               onChange={this.props.handleInput}/>
        <button onClick={this.props.addItem}
                name='requirementTopics'
                className='userRequirement add-requirements-submit addition'>
                +
        </button>
      </label>
        <br/>
        <Button text='SUBMIT' className='next' onClick={this.props.nextStep}/>
      </section>
    )
  }
}
