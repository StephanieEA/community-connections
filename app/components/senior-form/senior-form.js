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
    this.addItem = this.addItem.bind(this)
    this.createAccount = this.createAccount.bind(this)
  }

  handleInputChange(e) {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  addItem(e) {
    e.preventDefault()

    const target = e.target
    const name = target.name
    const userTopic = target.className.split(' ').find(name => name.includes('user'))

    let updatedTopics = [...this.state[name], this.state[userTopic]]
    this.setState({
      [name]: updatedTopics,
      [userTopic]: ''
    })
  }

  addTeach(e) {
    e.preventDefault()
    let updatedTeachTopics = [...this.state.teachTopics, this.state.userTeach]
    this.setState({
      teachTopics: updatedTeachTopics,
      userTeach: ''
    })
  }

  addRequirement(e) {
    e.preventDefault()
    let updatedRequirementTopics = [...this.state.requirementTopics, this.state.userRequirement]
    this.setState({
      requirementTopics: updatedRequirementTopics,
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
        <LikeToLearn addItem={this.addItem}
                     learnSci={this.state.learnSci}
                     learnArt={this.state.learnArt}
                     learnTech={this.state.learnTech}
                     learnSports={this.state.learnSports}
                     handleInput={this.handleInputChange}
                     userLearn={userLearn}
                     inputLearn={inputLearn}/>
        <LikeToTeach addItem={this.addItem}
                     teachSci={this.state.teachSci}
                     teachArt={this.state.teachArt}
                     teachTech={this.state.teachTech}
                     teachSports={this.state.teachSports}
                     handleInput={this.handleInputChange}
                     userTeach={userTeach}/>
        <Requirements addItem={this.addItem}
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
