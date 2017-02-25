import React from 'react'

import Button from '../../components/button/button.js'

const Requirements = ({noSleepovers, noSmoking, yesClean, addItem, handleInput, userRequirement, nextStep, lastStep}) =>
<section>
  <Button text='PREVIOUS' onClick={lastStep}/>
  <label>Do you have specific requirements for tenants:</label>
  <br/>
  <input type='checkbox'
         name='noSleepovers'
         onChange={handleInput}/>No overnight guests
  <br/>
  <input type='checkbox'
         name='noSmoking'
         onChange={handleInput}/>No smoking
  <br/>
  <input type='checkbox'
         name='yesClean'
         onChange={handleInput}/> Keep Common Areas Clean
  <br/>
  <input placeholder='no pets'
         name='userRequirement'
         value={userRequirement}
         onChange={handleInput}/>
  <button onClick={addItem}
          name='requirementTopics'
          className='userRequirement add-requirements-submit'>
          +
  </button>
  <Button text='SUBMIT' onClick={nextStep}/>
</section>

export default Requirements
