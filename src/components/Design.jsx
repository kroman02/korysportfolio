import React from 'react'
import '../styles/design.css'

const Design = () => {

    return (
        <>
        <div className="left_deco"></div>
    <div className="gallery">
        <img src='../../public/savvatore.gif' />
        <img src='../../public/a1.jpg' />
        <img className="lion" src='../../public/lion2.png' />
        <img className="row-span-2" src='../../public/index.jpg' />
        <img className="col-span-2" src='../../public/jobrange.png' />
        <div className="design_header"><h1>Design</h1></div>
        <img src='../../public/Df.jpg' />
        <div className="inner_gallery">
                {/* <img src='../../public/EMPIRE1.jpg' />
                <img src='../../public/life.png' /> */}
                <div className="inner_images empire"></div>
                <div className="inner_images life"></div>
        </div>
        <img className="waterplane" src='../../public/waterplane.png' />
    </div>
    <div className="right_deco"></div>
    </>
)

}

export default Design 