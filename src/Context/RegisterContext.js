import React from 'react'

const RegisteredContext = React.createContext({
  name: '',
  topic: 'Arts and Culture',
  isRegistered: false,
  showError: false,
  changeName: () => {},
  changeTopic: () => {},
  registerName: () => {},
  updateError: () => {},
})

export default RegisteredContext
