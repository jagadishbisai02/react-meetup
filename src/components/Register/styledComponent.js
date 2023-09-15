import styled from 'styled-components'

export const RegisterHomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 25px;
  height: 90vh;
`

export const RegisterImage = styled.img`
  width: 450px;
`

export const RegisterFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const RegisterHeading = styled.h1`
  color: #334155;
  font-size: 45px;
  font-weight: 400;
  font-family: 'Roboto';
  margin-bottom: 20px;
`

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const Label = styled.label`
  color: #475569;
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-bottom: 5px;
`

export const Name = styled.input`
  color: #64748b;
  font-size: 13px;
  font-weight: 400;
  font-family: 'Roboto';
  margin-bottom: 25px;
  outline: none;
  padding: 5px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #cbd5e1;
`

export const TopicSelector = styled.select`
  color: #64748b;
  font-size: 13px;
  font-weight: 400;
  font-family: 'Roboto';
  margin-bottom: 25px;
  outline: none;
  padding: 5px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #cbd5e1;
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
  color: #ffffff;
`

export const Error = styled.p`
  color: #ff0b37;
  font-size: 15px;
  font-family: 'Roboto';
`
