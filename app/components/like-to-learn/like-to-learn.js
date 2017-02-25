import React from 'react'

import Button from '../../components/button/button.js'

const LikeToLearn = ({learnSci, learnArt, learnTech, learnSports, inputLearn, userLearn, handleInput, addItem, nextStep, lastStep}) =>
  <section>
    <Button text='PREVIOUS' onClick={lastStep}/>
    <label>I would like to learn about:</label>
    <br/>
    <input type='checkbox'
           name='learnSci'
           onChange={handleInput}/>Science
    <br/>
    <input type='checkbox'
           name='learnArt'
           onChange={handleInput}/>Art
    <br/>
    <input type='checkbox'
           name='learnTech'
           onChange={handleInput}/> Technology
    <br/>
    <input type='checkbox'
           name='learnSports'
           onChange={handleInput}/> Sports
    <br/>
    <section>{inputLearn}</section>
    <input placeholder='pop culture'
           name='userLearn'
           value={userLearn}
           onChange={handleInput}/>
    <button name='learnTopics'
            className='userLearn addition'
            onClick={addItem}
          >
            +
    </button>
    <Button text='SUBMIT' onClick={nextStep}/>
  </section>

export default LikeToLearn
