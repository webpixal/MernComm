import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Dash from './Components/App/Dash'
import Login from './Components/App/Login'
import Signup from './Components/App/Signup'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/dashboard" element={<Dash/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App