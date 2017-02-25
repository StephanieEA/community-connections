import React from 'react'

const FinalThoughts = ({needToKnow, handleInput}) =>
<section>
  <label>Is there anything else you want tenants to know about you or your home?</label>
  <br/>
  <textarea className='needToKnow'
            name='needToKnow'
            value={needToKnow}
            onChange={handleInput}
            placeholder='I have 2 dogs and a cat.   Dirty dishes and punk rock are pet peeves.  Other than that I’m easy- going and open-minded.  I have a small unfurnished guest room available.'>
  </textarea>
</section>

export default FinalThoughts
