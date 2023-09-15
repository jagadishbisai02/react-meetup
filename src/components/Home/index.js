import HomeNavBar from '../NavBar'
import {
  HomeContainer,
  ContentContainer,
  Heading,
  Desc,
  RegisterBtn,
  Meetup,
  NavLink,
} from './styledComponent'

const Home = props => {
  const {name, topic} = props

  console.log(name, topic)

  return (
    <>
      <HomeContainer>
        <HomeNavBar />
        <ContentContainer>
          <Heading>Welcome to Meetup</Heading>
          <Desc>Please register for the topic</Desc>
          <RegisterBtn type="button">
            <NavLink to="/register">Register</NavLink>
          </RegisterBtn>
          <Meetup
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </ContentContainer>
      </HomeContainer>
    </>
  )
}

export default Home
