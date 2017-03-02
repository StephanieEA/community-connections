import React, { Component } from 'react'

import Button from '../../components/button/button.js'


const Confirmation = ({user, lastStep}) =>
<section className='step-container'>
  <Button text='PREVIOUS' onClick={lastStep} className='previous'/>
  <h3>Your information will appear to potential lodgers as:</h3>
  <article className='display-user'>
  <h1>{user.name}</h1>
  <p>{user.name} is open to sharing his/her home for {user.lease}</p>
  <p>Would like to spend {user.hours} with you</p>
  <p>Would like to learn about {user.learnTopics.map(learn => learn)}
    {user.learnSci ? 'Science' : ''}
    {user.learnArt ? 'Art' : ''}
    {user.learnTech ? 'Tech' : ''}
    {user.learnSports ? 'Sports' : ''}
  </p>
  <p>Would like to share their knowledge about {user.teachTopics.map(teach => teach)}
    {user.teachSci ? 'Science' : ''}
    {user.teachArt ? 'Art' : ''}
    {user.teachTech ? 'Tech' : ''}
    {user.teachSports ? 'Sports' : ''}
  </p>
  <p>Requires that you:
   {user.noSmoking ? 'Are a non-smoker' : ''}
   {user.noSleepovers ? "Don't have overnight Guests" : ''}
   {user.yesClean ? 'Know that cleanliness is a thing' : ''}
   {user.requirementTopics.map(requirement => requirement)}
  </p>
  <p>Would like you to know: {user.needToKnow}</p>
  </article>
</section>

export default Confirmation
