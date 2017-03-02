import React from 'react'

import Button from '../../components/button/button.js'

const LeaseHours = ({handleInput, lease, hours, nextStep, lastStep}) =>
  <section className='step-container'>
    <Button text='PREVIOUS' className='previous' onClick={lastStep}/>
    <article className='radio-article'>
      <label className='radio-title'>
        How long will you consider sharing your home?
      </label>
      <br/>
      <label className='radio-answer'>
        <input type='radio'
           name='lease'
           value='3 months'
           checked={lease === '3 months'}
           onChange={handleInput}/>
        3 months
      </label>
      <label className='radio-answer'>
        <input type='radio'
             name='lease'
             value='6 months'
             checked={lease === '6 months'}
             onChange={handleInput}/>
         6 months
      </label>
      <label className='radio-answer'>
        <input type='radio'
               name='lease'
               value='9 months'
               checked={lease === '9 months'}
               onChange={handleInput}/>
               9 months
      </label>
      <label className='radio-answer'>
        <input type='radio'
             name='lease'
             value='1 year +'
             checked={lease === '1 year +'}
             onChange={handleInput}/>
             1 year +
      </label>
      <br/>
      <br/>
      <br/>
      <label className='radio-title'>
        How much time would you like to spend with your tenant each week?
      </label>
      <br/>
      <label className='radio-answer'>
        <input type='radio'
               name='hours'
               value='10-15 hours'
               checked={hours === '10-15 hours'}
               onChange={handleInput}/>
        10-15 hours
      </label>
      <label className='radio-answer'>
        <input type='radio'
               name='hours'
               value='15-20 hours'
               checked={hours === '15-20 hours'}
               onChange={handleInput}/>
          15-20 hours
      </label>
      <label className='radio-answer'>
        <input type='radio'
               name='hours'
               value='20-25 hours'
               checked={hours === '20-25 hours'}
               onChange={handleInput}/>
          20-25 hours
      </label>
      <label className='radio-answer'>
        <input type='radio'
               name='hours'
               value='25-30 hours'
               checked={hours === '25-30 hours'}
               onChange={handleInput}/>
          25-30 hours
      </label>
      <br/>
      <Button text='SUBMIT' className='next' onClick={nextStep}/>
    </article>

  </section>

  export default LeaseHours
