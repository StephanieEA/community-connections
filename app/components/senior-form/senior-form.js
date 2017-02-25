import React, { Component } from 'react'

import NameZipcode from '../../components/name-zipcode/name-zipcode.js'
import LeaseHours from '../../components/lease-hours/lease-hours.js'
import LikeToLearn from '../../components/like-to-learn/like-to-learn.js'
import LikeToTeach from '../../components/like-to-teach/like-to-teach.js'
import Requirements from '../../components/requirements/requirements.js'
import FinalThoughts from '../../components/final-thoughts/final-thoughts.js'

import './senior-form.scss'

export default class SeniorForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      zipcode: '',
      userLearn: '',
      userTeach: '',
      userRequirement: '',
      needToKnow: '',
      lease: '',
      hours: '',
      learnTopics: [],
      teachTopics: [],
      requirementTopics: [],
      step: 1,
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.addItem = this.addItem.bind(this)
    this.createAccount = this.createAccount.bind(this)
    this.nextStep = this.nextStep.bind(this)
    this.lastStep = this.lastStep.bind(this)
  }

  nextStep () {
    //  I had to increment next after assigning, it won't work on the same line, why?
    let next = this.state.step

    next++
    this.setState({
      step: next
    })
  }

  lastStep () {
    let last = this.state.step

    last--
    this.setState({
      step: last
  })
  }

  handleInputChange(e) {
    const target = e.target
    const name = target.name

    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({
      [name]: value
    })
  }

  addItem(e) {
    e.preventDefault()

    const target = e.target
    const name = target.name
    
    // this is weird...  is there a better way to do this?
    const userTopic = target.className.split(' ').find(name => name.includes('user'))

    let updatedTopics = [...this.state[name], this.state[userTopic]]

    this.setState({
      [name]: updatedTopics,
      [userTopic]: ''
    })
  }

  createAccount(e){
    e.preventDefault()

    this.setState({
      user: Object.assign({}, this.state)
    })
  }


  render() {
    let { name, zipcode, userLearn, userTeach, userRequirement, needToKnow, lease, hours, learnTopics, teachTopics, requirementTopics, step } = this.state

    let inputLearn = learnTopics.length >= 1 ? learnTopics.map((learn, index) => <p key={index}>{learn}</p>) : ''
    // is this a weird place to be doing this?
    const renderStep = step => {
      switch(step) {
        case 1:
          return <NameZipcode name={name}
                              zipcode={zipcode}
                              handleInput={this.handleInputChange}
                              nextStep={this.nextStep}/>
          break
        case 2:
          return <LeaseHours lease={lease}
                             hours={hours}
                             handleInput={this.handleInputChange}
                             nextStep={this.nextStep}
                             lastStep={this.lastStep}/>
            break
        case 3:
          return <LikeToLearn addItem={this.addItem}
                              learnSci={this.state.learnSci}
                              learnArt={this.state.learnArt}
                              learnTech={this.state.learnTech}
                              learnSports={this.state.learnSports}
                              handleInput={this.handleInputChange}
                              userLearn={userLearn}
                              inputLearn={inputLearn}
                              nextStep={this.nextStep}
                              lastStep={this.lastStep}/>
          break
        case 4:
          return <LikeToTeach addItem={this.addItem}
                              teachSci={this.state.teachSci}
                              teachArt={this.state.teachArt}
                              teachTech={this.state.teachTech}
                              teachSports={this.state.teachSports}
                              handleInput={this.handleInputChange}
                              userTeach={userTeach}
                              nextStep={this.nextStep}
                              lastStep={this.lastStep}/>
          break
        case 5:
          return <Requirements addItem={this.addItem}
                               noSleepovers={this.state.noSleepovers}
                               noSmoking={this.state.noSmoking}
                               yesClean={this.state.yesClean}
                               handleInput={this.handleInputChange}
                               userRequirement={userRequirement}
                               nextStep={this.nextStep}
                               lastStep={this.lastStep}/>
          break
        case 6:
          return <FinalThoughts needToKnow={needToKnow}
                                handleInput={this.handleInputChange}
                                createAccount={this.createAccount}
                                lastStep={this.lastStep}/>}
      }

    return (
      <form className='senior-form'>
       <h2>Create Your Account</h2>
       {renderStep(step)}
      </form>
    )
  }
}
