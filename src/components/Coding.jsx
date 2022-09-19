import React from 'react'
import Project from './Project.jsx'
import '../styles/coding.css'
import project_data from '../assets/project_data.js'

export default function Coding() {

    const projectsElements = project_data.map(project => {
        return <Project key={project.id} title={project.title} desc={project.description} stack={project.stack} img={project.img_url} />
    })

    return(
        <div className="coding_container">
            <img className="project_arrows" src="../../public/arrows.png"/>
            <h1 className="coding_header">Coding</h1>
            <div className="projectElements_container">
                {projectsElements}
            </div>
        </div>
    )
}