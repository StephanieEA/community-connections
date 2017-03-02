import React from 'react'

import Button from '../../components/button/button.js'

const NameZipcode = ({name, zipcode, handleInput, nextStep}) =>
    (<section className='step-container'>
    <h2 className='enter-your-header'>PLEASE ENTER YOUR:</h2>
    <label> NAME </label>
    <input placeholder='Cynthia Aguilar'
           type='text'
           name='name'
           value={name}
           onChange={handleInput}/>
    <br/>
    <br/>
    <label>ZIPCODE</label>
    <input placeholder='80202'
           value={zipcode}
           type='number'
           name='zipcode'
           onChange={handleInput}/>
    <br/>
    <br/>
    <Button text='SUBMIT' className='next' onClick={nextStep}/>
    </section>)


export default NameZipcode
