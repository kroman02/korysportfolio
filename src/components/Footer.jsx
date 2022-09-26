import React from 'react'
import '../styles/footer.css'
import { useState } from 'react'

export default function Footer() {

    const [showFooter, setShowFooter] = useState(false)
    let year = new Date().getFullYear() 
    return(
        
        <footer 
        onMouseEnter={() => {setShowFooter(true)}} 
        onMouseLeave={() => {setShowFooter(false)}}
        className={`footer_main ${!showFooter ? "hidden" : ""}`}
        >   <div className="footer_header">
                <h3 className="footer_name">footer</h3>
                <img src={`${showFooter 
                ? 
                "/arrowicon_down.png"
                : 
                "/arrowicon_up.png" }`
                    } />
            </div>
            {showFooter && <div className="logo_container"><img src="/korylogo.jpg"/><p>©{year} by Kornel Roman </p></div>}
        </footer>
    )
}
