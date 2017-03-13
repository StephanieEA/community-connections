import React, { Component } from 'react'

import Button from '../../components/button/button.js'


const Confirmation = ({user, lastStep}) =>
<section className='step-container'>
  <Button text='PREVIOUS' onClick={lastStep} className='previous'/>
  <article className='user-card'>
    <h1>{user.name ? user.name : 'Unnamed User'}</h1>
    <br/>
    <p>{user.name ? user.name : 'Unnamed User'} is open to sharing his/her home for {user.lease ? user.lease : 'an unclear period of time'}</p>
    <br/>
    <p>Would like to spend {user.hours ? user.hours : 'an unspecified amount of time'} with you</p>
    <br/>
    <p>Would like to learn about:
      {user.learnTopics.map(learn => {learn})}
      {user.learnSci ? 'Science' : ''}
      {user.learnArt ? 'Art' : ''}
      {user.learnTech ? 'Tech' : ''}
      {user.learnSports ? 'Sports' : ''}
    </p>
    <br/>
    <p>Would like to share their knowledge about: {user.teachTopics.map(teach => teach)}
      {user.teachSci ? 'Science' : ''}
      {user.teachArt ? 'Art' : ''}
      {user.teachTech ? 'Tech' : ''}
      {user.teachSports ? 'Sports' : ''}
    </p>
    <br/>
    <p>Requires that you:
      {user.noSmoking ? 'Are a non-smoker' : ''}
      {user.noSleepovers ? "Don't have overnight Guests" : ''}
      {user.yesClean ? 'Know that cleanliness is a thing' : ''}
      {user.requirementTopics.map(requirement => requirement)}
    </p>
    <br/>
    <p>Would like you to know: {user.needToKnow ? user.needToKnow : 'No additional information'}</p>
  </article>
</section>

export default Confirmation
