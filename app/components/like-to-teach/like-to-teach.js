import React from 'react'

import Button from '../../components/button/button.js'

const LikeToTeach = ({teachSci, teachArt, teachTech, teachSports, userTeach, addItem, handleInput, nextStep, lastStep}) =>
<section>
  <Button text='PREVIOUS' onClick={lastStep}/>
  <label>I would like to teach about:</label>
  <br/>
  <input type='checkbox'
         name='teachSci'
         onChange={handleInput}/>Science
  <br/>
  <input type='checkbox'
         name='teachArt'
         onChange={handleInput}/>Art
  <br/>
  <input type='checkbox'
         name='teachTech'
         onChange={handleInput}/> Technology
  <br/>
  <input type='checkbox'
         name='teachSports'
         onChange={handleInput}/> Sports
  <br/>
  <input placeholder='music theory'
         name='userTeach'
         value={userTeach}
         onChange={handleInput}/>
  <button name ='teachTopics'
          onClick={addItem}
          className='userTeach add-teach-submit'>
          +
  </button>
  <br/>
  <Button text='SUBMIT' onClick={nextStep}/>
</section>

export default LikeToTeach
