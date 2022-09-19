import React from 'react'
import '../styles/project.css'
export default function Project(props) {

    const stackElements = props.stack.map(stack => {
        return <li className="stack_used">{stack}</li>
    })

  return  (
    <div className="single_project_container">
        <div className="project_info">
            <h2>{props.title}</h2>
            <ul className="stack_used_list">{stackElements}</ul>
            <p className="project_description">{props.desc}</p>
        </div>
        <img  src={props.img}/>

    </div>)

}


// key={project.id} title={project.title} desc={project.description} stack={project.stack} img={project.img_url}