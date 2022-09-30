import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Dash from './Components/App/Dash'
import Login from './Components/App/Login'
import Brand from './Components/App/routes/brand'
import Signup from './Components/App/Signup'
import Privet from './Components/App/props/Privet'
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <BrowserRouter>
    <ToastContainer />
    {/* Nav Routes */}
      <Routes>
      <Route element= {<Privet/>}>
      <Route path="/dashboard" element={<Dash/>}/>
      <Route path="/brand" element={<Brand/>}/>
      </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      </Routes>


    </BrowserRouter>
  )
}

export default App