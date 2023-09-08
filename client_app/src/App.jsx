import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Container } from '@chakra-ui/react'
import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import SearchForm from './components/SerchForm'
import UsersTable from './components/UsersTable'
import './App.css'



function App() {

  return (
    <div className='App'>
      <SearchForm />
      <UsersTable />
    </div>
  )
}

export default App
