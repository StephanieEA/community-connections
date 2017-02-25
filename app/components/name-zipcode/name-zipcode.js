import React from 'react'

const NameZipcode = ({name, zipcode, handleInput}) =>
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
    </section>)


export default NameZipcode
