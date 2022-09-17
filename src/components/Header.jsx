import React from 'react'
import '../styles/header.css'
import {NavLink} from 'react-router-dom';
import Dropdown from './Dropdown.jsx'

function Header() {

    const [open, setOpen] = React.useState(false)
    const [hoveringOnLink, setHoveringOnLink] = React.useState(false)
    const [hoveringOnMenu, setHoveringOnMenu] = React.useState(false)
   
    
  
    

    const handleHoverLink = () => {
        setHoveringOnLink(true)
        console.log("hovering on link:", hoveringOnLink)
    }

    const handleHoverMenu = () => {
        setHoveringOnMenu(true)
        console.log("hovering on menu:", hoveringOnMenu)
    }

    const handleMouseExitFromLink = () => {
        setTimeout(()=>{setHoveringOnLink(false)}, 100)
    }

    const handleMouseExitFromMenu = () => {
        setTimeout(()=>{setHoveringOnMenu(false)}, 100)
    }

    const handleClick = () => {
        setHoveringOnLink(false)
        setHoveringOnMenu(false)
    }



    return (
        <header>
            
            <ul>
                <li><NavLink className={({isActive}) => isActive ? "link active" : "link"} to="/">root</NavLink></li>
                {/* <li><NavLink className={({isActive}) => isActive ? "link active" : "link"} to="/projects">projects</NavLink></li> */}
                <li onMouseLeave={handleMouseExitFromLink} 
                onMouseEnter={handleHoverLink}><a className="link" href="#">Projects</a>{(hoveringOnLink || hoveringOnMenu) && <Dropdown handleClick={handleClick} handleMouseOver={handleHoverMenu} handleMouseOut={handleMouseExitFromMenu} />}</li>
                <li><NavLink className={({isActive}) => isActive ? "link active" : "link"} to="/aboutme">about me</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "link active" : "link"} to="/hireme">hire me</NavLink></li>
            </ul>
           
        </header>
    )
}

export default Header