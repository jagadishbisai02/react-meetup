import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  color: #334155;
  font-size: 45px;
  font-weight: 600;
  font-family: 'Roboto';
  line-height: 1.5px;
`

export const Desc = styled.p`
  color: #475569;
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
  line-height: 1.2px;
`

export const Meetup = styled.img`
  width: 850px;
`

export const RegisterBtn = styled.button`
  background-color: #2563eb;
  border: none;
  padding: 6px 15px;
  border-radius: 5px;
  font-size: 13px;
  font-family: 'Roboto';
  cursor: pointer;
  outline: none;
`
export const NavLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`
