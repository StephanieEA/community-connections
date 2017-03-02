import React from 'react'

import Button from '../../components/button/button.js'

const FinalThoughts = ({needToKnow, handleInput, createAccount, lastStep}) =>
<section className='step-container'>
  <Button text='PREVIOUS' onClick={lastStep} className='previous'/>
  <label>Is there anything else you want tenants to know about you or your home?</label>
  <br/>
  <textarea className='needToKnow'
            name='needToKnow'
            value={needToKnow}
            onChange={handleInput}
            placeholder='I have 2 dogs and a cat.  Dirty dishes and punk rock are pet peeves.  I have a small unfurnished room available.'>
  </textarea>
  <br/>
  <input type='submit' className='next' onClick={createAccount}/>
</section>

export default FinalThoughts
