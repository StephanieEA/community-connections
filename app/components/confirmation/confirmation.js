import React, { Component } from 'react'

import Button from '../../components/button/button.js'


const Confirmation = ({user, lastStep}) =>
<section className='step-container'>
  <Button text='PREVIOUS' onClick={lastStep} className='previous'/>
  <h2>Your information is saved as</h2>
 {user.name}
 Open to sharing your home for {user.lease}
 Would like to spend {user.hours} with a lodger
 Would like to learn about {user.learnTopics.map(learn => learn)}
 Would like to share their knowledge about {user.teachTopics.map(teach => teach)}
 Requires that {userRequirement.map(requirement => requirement)}


</section>

export default Confirmation
