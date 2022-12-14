import React from 'react'
import '../styles/home.css'
import {useState, useEffect} from 'react'
export default function Home() {

    const [myName, setMyName] = useState("kornel")
    const [nameLetters, setNameLetters] = useState(["k","o","r","n","e","l"])
    const [counter, setCounter] = useState(0)
    
       
   
    


    return (
        <div className="home_container">
            <div className="left_side">
                <h2>Hi, my name is</h2>
                <h1>{myName}</h1>
                <h3>Software and Front-end Developer</h3> 
                <div className="description_home">
                <p>I'm a creative individual with a background in computer science that enjoys working on purposeful technical projects.</p>
                </div>
                <img className="dots_bottom" src="/dots_bottom.png"/>
            </div>
            <div className="right_side">
                    <img className="dots_top" src="/dots_top.png"/>
                    
                    <div className="stack">
                        <div className="stack_selector"></div>
                        <div className="stack_element"><img src="/javalogo.png" /></div>
                        <div className="stack_element"><img src="/reactlogo.png" /></div>
                        <div className="stack_element"><img src="/springlogo.png" /></div>
                        <div className="stack_element"><img src="/javascriptlogo.png" /></div>
                    </div>
                
                <img className="lines" src="/lines.png"/>
            </div>
        </div>
    )
}
