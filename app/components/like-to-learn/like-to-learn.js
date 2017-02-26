import React from 'react'

import Button from '../../components/button/button.js'

export default class LikeToLearn extends React.Component {
  render() {
    let inputLearn =
      this.props.learnTopics.length >= 1 ?
      this.props.learnTopics.map((learn, index) => <p key={index}>{learn}</p>)
      : ''

    return (
    <section>
      <Button text='PREVIOUS' onClick={this.props.lastStep}/>
      <label>I would like to learn about:</label>
      <br/>
      <input type='checkbox'
             name='learnSci'
             onChange={this.props.handleInput}/>Science
      <br/>
      <input type='checkbox'
             name='learnArt'
             onChange={this.props.handleInput}/>Art
      <br/>
      <input type='checkbox'
             name='learnTech'
             onChange={this.props.handleInput}/> Technology
      <br/>
      <input type='checkbox'
             name='learnSports'
             onChange={this.props.handleInput}/> Sports
      <br/>
      <section>{inputLearn}</section>
      <input placeholder='pop culture'
             name='userLearn'
             value={this.props.userLearn}
             onChange={this.props.handleInput}/>
      <button name='learnTopics'
              className='userLearn addition'
              onClick={this.props.addItem}
            >
              +
      </button>
      <Button text='SUBMIT' onClick={this.props.nextStep}/>
    </section>
    )
  }
}
