import React from 'react'

import Button from '../../components/button/button.js'
import Input from '../../components/input/input.js'


const FinalThoughts = ({userInput, handleInput, lastStep, confirm}) => {

return (
<section className='step-container'>
  <Button text='PREVIOUS'
          onClick={lastStep}
          className='previous'/>
  <label>Is there anything else you want tenants to know about you or your home?</label>
  <br/>
  <label className='add-need-to-know'>
    <textarea className='needToKnow'
              name='needToKnow'
              value={userInput.needToKnow}
              onChange={handleInput}
              placeholder='I have 2 dogs and a cat.  Dirty dishes and punk rock are pet peeves.  I have a small unfurnished room available.'>
    </textarea>
    <br/>
    <Button text='SUBMIT'
           className='next'
           onClick={confirm}/>
  </label>
</section>)
}
export default FinalThoughts
