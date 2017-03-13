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
      step: 6,
    }
    this.nextStep = this.nextStep.bind(this)
    this.lastStep = this.lastStep.bind(this)
    this.confirm = this.confirm.bind(this)
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

  confirm () {
    this.props.createAccount()
    this.nextStep()
  }

  render() {
    let {step} = this.state

    const renderStep = step => {
      switch(step) {
        case 1:
          return <NameZipcode userInput={this.props.userInput}
                              handleInput={this.props.handleInput}
                              nextStep={this.nextStep}/>
          break
        case 2:
          return <LeaseHours userInput={this.props.userInput}
                             handleInput={this.props.handleInput}
                             nextStep={this.nextStep}
                             lastStep={this.lastStep}/>
            break
        case 3:
          return <LikeToLearn userInput={this.props.userInput}
                              addItem={this.props.addItem}
                              handleInput={this.props.handleInput}
                              nextStep={this.nextStep}
                              lastStep={this.lastStep}/>
          break
        case 4:
          return <LikeToTeach userInput={this.props.userInput}
                              addItem={this.props.addItem}
                              handleInput={this.props.handleInput}
                              nextStep={this.nextStep}
                              lastStep={this.lastStep}/>
          break
        case 5:
          return <Requirements userInput={this.props.userInput}
                               addItem={this.props.addItem}
                               handleInput={this.props.handleInput}
                               nextStep={this.nextStep}
                               lastStep={this.lastStep}/>
          break
        case 6:
          return <FinalThoughts userInput={this.props.userInput}
                                handleInput={this.props.handleInput}
                                confirm={this.confirm}
                                lastStep={this.lastStep}/>
        case 7:
          return <Confirmation  user={this.props.user}
                                lastStep={this.lastStep}/>
      }
    }

    return (
      <form className='senior-form'>
       {!this.props.user ?
         <h2 className='create-account-header'>
           <span className='double'>Create Your Account</span>
         </h2> :
         <h2> 'Your information will appear as:' </h2>}
       {renderStep(step)}
      </form>
    )
  }
}
