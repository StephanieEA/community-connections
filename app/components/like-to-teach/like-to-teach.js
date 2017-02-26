import React from 'react'

import Button from '../../components/button/button.js'

export default class LikeToTeach extends React.Component {
  render () {
    let inputTeach =
      this.props.teachTopics.length >= 1 ?
      this.props.teachTopics.map((teach, index) => <p key={index}>{teach}</p>)
      : ''

    return (
      <section>
        <Button text='PREVIOUS' onClick={this.props.lastStep}/>
        <label>I would like to teach about:</label>
        <br/>
        <input type='checkbox'
               name='teachSci'
               onChange={this.props.handleInput}/>Science
        <br/>
        <input type='checkbox'
               name='teachArt'
               onChange={this.props.handleInput}/>Art
        <br/>
        <input type='checkbox'
               name='teachTech'
               onChange={this.props.handleInput}/> Technology
        <br/>
        <input type='checkbox'
               name='teachSports'
               onChange={this.props.handleInput}/> Sports
        <br/>
        <section>{inputTeach}</section>
        <input placeholder='music theory'
               name='userTeach'
               value={this.props.userTeach}
               onChange={this.props.handleInput}/>
        <button name ='teachTopics'
                onClick={this.props.addItem}
                className='userTeach add-teach-submit'>
                +
        </button>
        <br/>
        <Button text='SUBMIT' onClick={this.props.nextStep}/>
      </section>
    )
  }
}
