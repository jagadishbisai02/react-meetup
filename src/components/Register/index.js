import HomeNavBar from '../NavBar'
import RegisterContext from '../../Context/RegisterContext'

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

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        showError,
        changeName,
        changeTopic,
        updateError,
        registerName,
      } = value

      const onRegister = event => {
        event.preventDefault()
        const {history} = props
        if (name !== '') {
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }

      const onChangeSelect = event => {
        changeTopic(event.target.value)
      }

      const onChangeInput = event => {
        changeName(event.target.value)
      }

      return (
        <>
          <HomeNavBar />
          <RegisterHomeContainer>
            <RegisterImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <RegisterFormContainer onSubmit={onRegister}>
              <RegisterHeading>Let us join</RegisterHeading>
              <RegisterForm>
                <Label htmlFor="name">Name</Label>
                <Name
                  type="text"
                  placeholder="Your Name"
                  id="name"
                  onChange={onChangeInput}
                />
                <Label htmlFor="selector">Topic</Label>
                <TopicSelector
                  value={topic}
                  id="selector"
                  onChange={onChangeSelect}
                >
                  {topicsList.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.displayText}
                    </option>
                  ))}
                </TopicSelector>
                <RegisterBtn type="submit">Register Now</RegisterBtn>
                {showError === true ? (
                  <Error>Please enter your name</Error>
                ) : (
                  ''
                )}
              </RegisterForm>
            </RegisterFormContainer>
          </RegisterHomeContainer>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
