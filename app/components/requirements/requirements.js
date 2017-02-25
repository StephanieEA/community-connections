import React from 'react'

const Requirements = ({noSleepovers, noSmoking, yesClean, addItem, handleInput, userRequirement}) =>
<section>
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
</section>

export default Requirements
