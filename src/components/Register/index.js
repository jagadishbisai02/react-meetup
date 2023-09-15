import {Component} from 'react'
import HomeNavBar from '../NavBar'

import {
  RegisterHomeContainer,
  RegisterImage,
  RegisterFormContainer,
  RegisterHeading,
  RegisterForm,
  Label,
  Name,
  TopicSelector,
  RegisterBtn,
  Error,
} from './styledComponent'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {
    topic: topicsList[0].id,
    nameInput: '',
    nameError: false,
  }

  onChangeSelect = event => {
    this.setState({topic: event.target.value})
  }

  onChangeInput = event => {
    this.setState({nameInput: event.target.value})
  }

  onBlurName = () => {
    const {nameInput} = this.state
    const isRequired = nameInput === ''
    this.setState({nameError: isRequired})
  }

  validateName = () => {
    const {nameInput} = this.state

    return nameInput !== ''
  }

  onRegister = event => {
    event.preventDefault()
    const {history} = this.props
    const isValid = this.validateName()
    if (!isValid) {
      this.setState({nameError: !isValid})
    } else {
      history.replace('/')
    }
  }

  render() {
    const {topic, nameError} = this.state

    return (
      <>
        <HomeNavBar />
        <RegisterHomeContainer>
          <RegisterImage
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
            alt="website register"
          />
          <RegisterFormContainer>
            <RegisterHeading>Let us join</RegisterHeading>
            <RegisterForm>
              <Label htmlFor="name">Name</Label>
              <Name
                type="text"
                placeholder="Your Name"
                id="name"
                onBlur={this.onBlurName}
                onChange={this.onChangeInput}
              />
              <Label htmlFor="selector">Topic</Label>
              <TopicSelector
                value={topic}
                id="selector"
                onChange={this.onChangeSelect}
              >
                {topicsList.map(item => (
                  <option key={item.id} value={item.id}>
                    {item.displayText}
                  </option>
                ))}
              </TopicSelector>
              <RegisterBtn type="submit" onClick={this.onRegister}>
                Register Now
              </RegisterBtn>
              {nameError ? <Error>Please enter your name</Error> : ''}
            </RegisterForm>
          </RegisterFormContainer>
        </RegisterHomeContainer>
      </>
    )
  }
}

export default Register
