import React from 'react'
import {Route,Routes} from 'react-router'
import App from './App'
import Login from './Components/Login_Page'

function Run() {
  return (
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element ={<App/>}/>

    </Routes>
  )
}

export default Run