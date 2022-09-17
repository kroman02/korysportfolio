import React from 'react'
import {NavLink} from 'react-router-dom'
export default function Dropdown (props) {

   return (<div onMouseOver={props.handleMouseOver} onMouseLeave={props.handleMouseOut} className="dropdown">
                <ul className="dropdown_menu">
                    <li><NavLink className={({isActive}) => isActive ? "link_dropped active" : "link_dropped"} to="/projects/code">Coding</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? "link_dropped active" : "link_dropped"} to="/projects/design">Design</NavLink></li>
                </ul>
            </div>)

}