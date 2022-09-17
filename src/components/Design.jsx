import React from 'react'
import '../styles/design.css'

const Design = () => {

    return (
        <>
        <img src='../../public/gallery_deco.png' className="left_deco" />
    <div className="gallery">
        <a><img src='../../public/savvatore.gif' /></a>
        <a><img src='../../public/a1.jpg' /></a>
        <a><img className="lion" src='../../public/lion2.png' /></a>
        <a className="row-span-2"><img  src='../../public/index.jpg' /></a>
        <a target='_blank' href='../../public/jobrange.png' className="col-span-2"><img  src='../../public/jobrange.png' /></a>
        <div className="design_header"><h1>Design</h1></div>
        <a target='_blank' href='../../public/Df.jpg'><img src='../../public/Df.jpg' /></a>
        <div className="inner_gallery">
        <a target='_blank' className="inner_images empire" href='../../public/EMPIRE1.jpg'></a>
        <a target='_blank' className="inner_images life" href='../../public/life.png'></a>
        </div>
        <a href='../../public/waterplane.png' target='_blank' className="waterplane"><img href=""  src='../../public/waterplane.png' /></a>
    </div>
    <img href="#" src='../../public/gallery_deco.png' className="right_deco" />
    </>
)

}

export default Design 