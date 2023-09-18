import HomeNavBar from '../NavBar'
import RegisterContext from '../../Context/RegisterContext'
import {
  HomeContainer,
  ContentContainer,
  Heading,
  Name,
  Topic,
  Desc,
  RegisterBtn,
  Meetup,
  NavLink,
} from './styledComponent'

const Home = props => {
  const onRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <RegisterContext.Consumer>
      {value => {
        const {isRegistered, name, topic} = value

        return (
          <>
            <HomeContainer>
              <HomeNavBar />
              {isRegistered === true ? (
                <ContentContainer>
                  <Name>Hello {name}</Name>
                  <Topic>Welcome to {topic}</Topic>
                  <Meetup
                    src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"
                  />
                </ContentContainer>
              ) : (
                <ContentContainer>
                  <Heading>Welcome to Meetup</Heading>
                  <Desc>Please register for the topic</Desc>
                  <RegisterBtn type="button" onClick={onRegister}>
                    <NavLink to="/register">Register</NavLink>
                  </RegisterBtn>
                  <Meetup
                    src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"
                  />
                </ContentContainer>
              )}
            </HomeContainer>
          </>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Home
