import React from 'react'
import '../styles/projects.css'
import {Outlet} from 'react-router-dom'

export default function Projects() {
    return (
        <div className="projects_container">
            <Outlet />
        </div>
    )
}