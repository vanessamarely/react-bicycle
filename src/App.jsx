import { useState } from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';

import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Layout from './components/Layout/Layout'
import './App.css'

function App() {
  

  return (
    <Router>
      <section>                              
        <Routes>                                                                        
              <Route path="/" element={<Layout/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route index element={<Login/>}/>
        </Routes>                    
      </section>
    </Router>
  )
}

export default App
