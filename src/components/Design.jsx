import React from 'react'
import '../styles/design.css'

const Design = () => {

    return (
    <div className="gallery">
        
        <img src='../../public/savvatore.gif' />
        <img src='../../public/a1.jpg' />
        <img className="lion" src='../../public/lion2.png' />
        <img className="row-span-2" src='../../public/index.jpg' />
        <img className="col-span-2" src='../../public/jobrange.png' />
        <div className="design_header"><h1>Design</h1></div>
        <img src='../../public/Df.jpg' />
        <div className="inner_gallery">
                <img src='../../public/EMPIRE1.jpg' />
                <img src='../../public/life.png' />
        </div>
        <img className="waterplane" src='../../public/waterplane.png' />

    </div>
)

}

export default Design 