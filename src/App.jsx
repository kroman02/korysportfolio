import { useState } from 'react'
// components
import SharedLayout from './components/SharedLayout.jsx'
import Home from './components/Home.jsx'
import Projects from './components/Projects.jsx'
import Design from './components/Design.jsx'
import Coding from './components/Coding.jsx'
import Contact from './components/Contact.jsx'

import './styles/app.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
 return (
    <Router>
        <div className="app_container">
        <div className="stripes_img"></div>
        {/* <img className="stripes_img" src="../public/stripes.png" /> */}
        
        <Routes>
            <Route path="/" element={<SharedLayout />} >
                <Route index element={<Home />} />
                <Route path="/projects" element={<Projects />}>
                    <Route exact path="/projects/code" element={<Coding />} />
                    <Route exact path="/projects/design" element={<Design />} />
                </Route>
                <Route path="/aboutme" element={<div><h1>About me</h1></div>} />
                <Route path="/hireme" element={<Contact />} />
            </Route>
        </Routes>
        </div>
    </Router>
 )
}

export default App
