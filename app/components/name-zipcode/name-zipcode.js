import React from 'react'

import Button from '../../components/button/button.js'

const NameZipcode = ({name, zipcode, handleInput, nextStep}) =>
    (<section>
    <label> NAME </label>
    <input placeholder='Cynthia Aguilar'
           type='text'
           name='name'
           value={name}
           onChange={handleInput}/>
    <br/>
    <label>ZIPCODE</label>
    <input placeholder='80202'
           value={zipcode}
           type='number'
           name='zipcode'
           onChange={handleInput}/>
    <br/>
    <Button text='SUBMIT' onClick={nextStep}/>
    </section>)


export default NameZipcode
