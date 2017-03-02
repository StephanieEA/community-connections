import React, { Component } from 'react'

import NameZipcode from '../../components/name-zipcode/name-zipcode.js'
import LeaseHours from '../../components/lease-hours/lease-hours.js'
import LikeToLearn from '../../components/like-to-learn/like-to-learn.js'
import LikeToTeach from '../../components/like-to-teach/like-to-teach.js'
import Requirements from '../../components/requirements/requirements.js'
import FinalThoughts from '../../components/final-thoughts/final-thoughts.js'
import Confirmation from '../../components/confirmation/confirmation.js'


export default class SeniorForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      userInput: {
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
      },
      user: null,
      step: 1,
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.addItem = this.addItem.bind(this)
    this.createAccount = this.createAccount.bind(this)
    this.nextStep = this.nextStep.bind(this)
    this.lastStep = this.lastStep.bind(this)
  }

  nextStep () {
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

    const enteredInfo = this.state.userInput
    const infoToAdd = {[name]: value}
    const updatedInfo = Object.assign(enteredInfo, infoToAdd)

    this.setState({
      userInput: updatedInfo
    })
  }

  addItem(e) {
    e.preventDefault()

    const target = e.target
    const name = target.name
    const entries = this.state.userInput
    const userTopic = target.className.split(' ').find(name => name.includes('user'))

    const updatedTopics = [...this.state.userInput[name], this.state.userInput[userTopic]]

    const updatedTopicObject = {[name]: updatedTopics, [userTopic]: ''}
    const updatedUserInput = Object.assign(entries, updatedTopicObject)

    debugger
    this.setState({
      userInput: updatedUserInput,
    })
  }

  createAccount(e){
    e.preventDefault()

    this.setState({
      user: Object.assign({}, this.state.userInput)
    })
    this.nextStep()
  }


  render() {
    let {step, user} = this.state
    let { name, zipcode, userLearn, userTeach, userRequirement, needToKnow,
      lease, hours, learnTopics, teachTopics, requirementTopics } =
      this.state.userInput

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
                              userInput={this.state.userInput}
                              learnSci={this.state.learnSci}
                              learnArt={this.state.learnArt}
                              learnTech={this.state.learnTech}
                              learnSports={this.state.learnSports}
                              learnTopics={learnTopics}
                              handleInput={this.handleInputChange}
                              nextStep={this.nextStep}
                              lastStep={this.lastStep}/>
          break
        case 4:
          return <LikeToTeach addItem={this.addItem}
                              userInput={this.state.userInput}
                              teachSci={this.state.teachSci}
                              teachArt={this.state.teachArt}
                              teachTech={this.state.teachTech}
                              teachSports={this.state.teachSports}
                              teachTopics={teachTopics}
                              userTeach={userTeach}
                              handleInput={this.handleInputChange}
                              nextStep={this.nextStep}
                              lastStep={this.lastStep}/>
          break
        case 5:
          return <Requirements addItem={this.addItem}
                               userInput={this.state.userInput}
                               noSleepovers={this.state.noSleepovers}
                               noSmoking={this.state.noSmoking}
                               yesClean={this.state.yesClean}
                               userRequirement={userRequirement}
                               handleInput={this.handleInputChange}
                               requirementTopics={requirementTopics}
                               nextStep={this.nextStep}
                               lastStep={this.lastStep}/>
          break
        case 6:
          return <FinalThoughts needToKnow={needToKnow}
                                handleInput={this.handleInputChange}
                                createAccount={this.createAccount}
                                lastStep={this.lastStep}/>
        case 7:
          return <Confirmation  user={user}
                                lastStep={this.lastStep}/>
      }
    }

    return (
      <form className='senior-form'>
       <h2 className='create-account-header'>
         <span className='double'>Create Your Account</span>
       </h2>
       {renderStep(step)}
      </form>
    )
  }
}
