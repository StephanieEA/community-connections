import React from 'react'

import Button from '../../components/button/button.js'
import Input from '../../components/input/input.js'


const NameZipcode = ({userInput, handleInput, nextStep}) =>
    (<section className='step-container'>
    <h2 className='enter-your-header'>PLEASE ENTER YOUR:</h2>
    <label> NAME
      <Input placeholder='Cynthia Aguilar'
             type='text'
             name='name'
             value={userInput.name}
             onChange={handleInput}/>
    </label>
    <br/>
    <br/>
    <label>ZIPCODE
      <Input placeholder='80202'
             value={userInput.zipcode}
             type='number'
             name='zipcode'
             onChange={handleInput}/>
    </label>
    <br/>
    <br/>
    <br/>
    <Button text='SUBMIT' className='next' onClick={nextStep}/>
    </section>)


export default NameZipcode
