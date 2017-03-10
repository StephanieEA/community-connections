import React from 'react'

import Button from '../../components/button/button.js'
import Input from '../../components/input/input.js'


export default class LikeToLearn extends React.Component {
  render() {
    const learnTopics = this.props.learnTopics
    let InputLearn =
      learnTopics.length >= 1 ?
      learnTopics.map((learn, index) =>
        <label className='checkbox-question' key={index}>
          <Input type='checkbox'/>
          {learn}
        </label>)
      : ''

    return (
    <section className='step-container'>
      <Button text='PREVIOUS' className='previous' onClick={this.props.lastStep}/>
      <label className='checkbox-title'>I would like to learn about:</label>
      <br/>
      <label className='checkbox-question'>
        <Input type='checkbox'
            name='learnSci'
            onChange={this.props.handleInput}/>
            Science
      </label>
      <label className='checkbox-question'>
        <Input type='checkbox'
               name='learnArt'
               onChange={this.props.handleInput}/>
               Art
      </label>
      <label className='checkbox-question'>
        <Input type='checkbox'
               name='learnTech'
               onChange={this.props.handleInput}/>
               Technology
      </label>
      <label className='checkbox-question'>
        <Input type='checkbox'
             name='learnSports'
             onChange={this.props.handleInput}/>
             Sports
      </label>
      <section>{InputLearn}</section>
      <label className='add-learn'>
        <Input placeholder='pop culture'
               name='userLearn'
               value={this.props.userLearn}
               onChange={this.props.handleInput}/>
      <button name='learnTopics'
              className='userLearn addition'
              onClick={this.props.addItem}
            >
              +
      </button>
    </label>
      <br/>
      <Button text='SUBMIT' className='next' onClick={this.props.nextStep}/>
    </section>
    )
  }
}
