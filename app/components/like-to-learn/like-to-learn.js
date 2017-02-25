import React from 'react'

const LikeToLearn = ({learnSci, learnArt, learnTech, learnSports, inputLearn, userLearn, addLearn, handleInput, addItem}) =>
  <section>
    <label>I would like to learn about:</label>
    <br/>
    <input type='checkbox'
           name='learnSci'
           onChange={handleInput}/>Science
    <br/>
    <input type='checkbox'
           name='learnArt'
           onChange={handleInput}/>Art
    <br/>
    <input type='checkbox'
           name='learnTech'
           onChange={handleInput}/> Technology
    <br/>
    <input type='checkbox'
           name='learnSports'
           onChange={handleInput}/> Sports
    <br/>
    <section>{inputLearn}</section>
    <input placeholder='pop culture'
           name='userLearn'
           value={userLearn}
           onChange={handleInput}/>
    <button name='learnTopics'
            className='userLearn addition'
            onClick={addItem}
          >
            +
    </button>
  </section>

export default LikeToLearn
