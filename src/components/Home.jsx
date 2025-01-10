import React from 'react'
import '../styles/home.css'
import {useState, useEffect} from 'react'
export default function Home() {

    const [myName, setMyName] = useState("kornel")
    const [nameLetters, setNameLetters] = useState(["k","o","r","n","e","l"])
    const [counter, setCounter] = useState(0)
    
       
   const statement = "I'm a software engineer with an MSc in Computer Science, dedicated to creating meaningful technical projects. I specialize in both front-end and back-end development, delivering innovative and impactful solutions."
    


    return (
        <div className="home_container">
            <div className="left_side">
                <h2>Hi, my name is</h2>
                <h1>{myName}</h1>
                <h3>Software Engineer</h3> 
                <div className="description_home">
                <p>{statement}</p>
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
