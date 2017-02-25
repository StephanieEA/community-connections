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
      requirementTopics: []
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.createAccount = this.createAccount.bind(this)
    this.addLearn = this.addLearn.bind(this)
    this.addTeach = this.addTeach.bind(this)
    this.addRequirement = this.addRequirement.bind(this)
  }

  handleInputChange(e) {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  addLearn(e) {
    e.preventDefault()
    this.setState({
      learnTopics: this.state.learnTopics.push(this.state.userLearn),
      userLearn: ''
    })
  }

  addTeach(e) {
    e.preventDefault()
    this.setState({
      teachTopics: this.state.teachTopics.push(this.state.userTeach),
      userTeach: ''
    })
  }

  addRequirement(e) {
    e.preventDefault()
    this.setState({
      requirementTopics: this.state.requirementTopics.push(this.state.userRequirement),
      userRequirement: ''
    })
  }

  createAccount(e){
    e.preventDefault()
    this.setState({
      user: Object.assign({}, this.state)
    })
  }

  render() {
    let { name, zipcode, userLearn, userTeach, userRequirement, needToKnow, lease, hours, learnTopics, teachTopics, requirementTopics } = this.state

    let inputLearn = learnTopics.length >= 1 ? learnTopics.map((learn, index) => <p key={index}>{learn}</p>) : ''

    return (
      <form className='senior-form'>
       <h2>Create Your Account</h2>
       <NameZipcode name={name}
                    zipcode={zipcode}
                    handleInput={this.handleInputChange} />
        <LeaseHours lease={lease}
                    hours={hours}
                    handleInput={this.handleInputChange}/>
        <LikeToLearn addLearn={this.addLearn}
                     learnSci={this.state.learnSci}
                     learnArt={this.state.learnArt}
                     learnTech={this.state.learnTech}
                     learnSports={this.state.learnSports}
                     handleInput={this.handleInputChange}
                     userLearn={userLearn}/>
        <LikeToTeach addTeach={this.addTeach}
                     teachSci={this.state.teachSci}
                     teachArt={this.state.teachArt}
                     teachTech={this.state.teachTech}
                     teachSports={this.state.teachSports}
                     handleInput={this.handleInputChange}
                     userTeach={userTeach}/>
        <Requirements addRequirement={this.addRequirement}
                      noSleepovers={this.state.noSleepovers}
                      noSmoking={this.state.noSmoking}
                      yesClean={this.state.yesClean}
                      handleInput={this.handleInputChange}
                      userRequirement={userRequirement}/>
        <button onClick={this.renderNext}>SUBMIT</button>
        <FinalThoughts needToKnow={needToKnow}
                       handleInput={this.handleInputChange}/>
        <input type='submit' onClick={this.createAccount}/>
      </form>
    )
  }
}
