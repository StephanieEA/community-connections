import React from 'react'

import Button from '../../components/button/button.js'
import Input from '../../components/input/input.js'


const LeaseHours = ({handleInput, lease, hours, nextStep, lastStep}) =>
  <section className='step-container'>
    <Button text='PREVIOUS' className='previous' onClick={lastStep}/>
    <fieldset>
      <legend className='radio-title'>
        How long will you consider sharing your home?
      </legend>
      <br/>
      <label className='radio-answer'>
        <Input type='radio'
               onChange={handleInput}
               value='3 months'
               name='lease'
               checked={lease === '3 months'}
               label='lease-options'/>
        3 months
      </label>
      <label className='radio-answer'>
        <Input type='radio'
               onChange={handleInput}
               value='6 months'
               name='lease'
               checked={lease === '6 months'}
               label='lease-options'/>
         6 months
      </label>
      <label className='radio-answer'>
        <Input type='radio'
               onChange={handleInput}
               value='9 months'
               name='lease'
               checked={lease === '9 months'}
               label='lease-options'/>
               9 months
      </label>
      <label className='radio-answer'>
        <Input type='radio'
               onChange={handleInput}
               value='1 year +'
               name='lease'
               checked={lease === '1 year +'}
               label='lease-options'/>
             1 year +
      </label>
    </fieldset>
      <br/>
      <br/>
      <br/>
    <fieldset className='radio-title'>
      <legend>
        How much time would you like to spend with your tenant each week?
      </legend>
      <br/>
      <label className='radio-answer'>
        <Input type='radio'
               onChange={handleInput}
               value='10-15 hours'
               name='hours'
               checked={hours === '10-15 hours'}
               label='lease-hours'/>
        10-15 hours
      </label>
      <label className='radio-answer'>
        <Input type='radio'
               onChange={handleInput}
               value='15-20 hours'
               name='hours'
               checked={hours === '15-20 hours'}
               label='lease-hours'/>
          15-20 hours
      </label>
      <label className='radio-answer'>
        <Input type='radio'
               onChange={handleInput}
               value='20-25 hours'
               name='hours'
               checked={hours === '20-25 hours'}
               label='lease-hours'/>
          20-25 hours
      </label>
      <label className='radio-answer'>
        <Input type='radio'
               onChange={handleInput}
               value='25-30 hours'
               name='hours'
               checked={hours === '25-30 hours'}
               label='lease-hours'/>
          25-30 hours
      </label>
    </fieldset>
    <br/>
    <Button text='SUBMIT' className='next' onClick={nextStep}/>
  </section>

  export default LeaseHours
