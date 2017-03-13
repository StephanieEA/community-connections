import React from 'react';

import Header from '../../components/header/header.js'
import SeniorForm from '../../components/senior-form/senior-form.js'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userInput: {
        name: '',
        zipcode: '',
        // learnDefault: [{learnSci: false}, ]
        learnSci: false,
        learnArt: false,
        learnTech: false,
        learnSports: false,
        teachSci: false,
        teachArt: false,
        teachTech: false,
        teachSports: false,
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
      user: null
    }
    this.createAccount = this.createAccount.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  handleInputChange(e) {
    const target = e.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value
    const infoToAdd = {[name]: value}
    const updatedInfo = Object.assign(this.state.userInput, infoToAdd)

    this.setState({
      userInput: updatedInfo
    })
  }

  addItem(e) {
    e.preventDefault()

    const target = e.target
    const name = target.name
    const userTopic = target.className.split(' ').find(name => name.includes('user'))
    const updatedTopics = [...this.state.userInput[name], this.state.userInput[userTopic]]
    const updatedTopicObject = {[name]: updatedTopics, [userTopic]: ''}
    const updatedUserInput = Object.assign(this.state.userInput, updatedTopicObject)

    this.setState({
      userInput: updatedUserInput,
    })
  }

  createAccount(){
    this.setState({
      user: Object.assign({}, this.state.userInput)
    })
  }

  render(){
    return (
      <div>
        <Header />
        <SeniorForm userInput={this.state.userInput}
                    user={this.state.user}
                    createAccount={this.createAccount}
                    handleInput={this.handleInputChange}
                    addItem={this.addItem}/>
      </div>
    );
  }
}
