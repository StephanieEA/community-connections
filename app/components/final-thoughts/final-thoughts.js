import React from 'react'

import Button from '../../components/button/button.js'

const FinalThoughts = ({needToKnow, handleInput, createAccount, lastStep}) =>
<section>
  <Button text='PREVIOUS' onClick={lastStep}/>
  <label>Is there anything else you want tenants to know about you or your home?</label>
  <br/>
  <textarea className='needToKnow'
            name='needToKnow'
            value={needToKnow}
            onChange={handleInput}
            placeholder='I have 2 dogs and a cat.   Dirty dishes and punk rock are pet peeves.  I have a small unfurnished room available.'>
  </textarea>
  <input type='submit' onClick={createAccount}/>
</section>

export default FinalThoughts
