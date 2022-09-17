import React from 'react'
import '../styles/design.css'

const Design = () => {

    return (
        <>
        <img src='../../public/gallery_deco.png' className="left_deco" />
        <div className="gallery_container">
        <div className="gallery">
            <a className="appear_1" target='_blank' href='../../savvatore.gif'><img src='../../public/savvatore.gif' /></a>
            <a className="appear_2" target='_blank' href='../../public/lion2.png'><img className="lion" src='../../public/lion2.png' /></a>
            <a className="appear_3" target='_blank' href='../../public/a1.jpg'><img src='../../public/a1.jpg' /></a>
            <a target='_blank' href='../../public/index.jpg' className="row-span-2 appear_4"><img  src='../../public/index.jpg' /></a>
            <a target='_blank' href='../../public/jobrange.png' className="col-span-2 appear_5"><img  src='../../public/jobrange.png' /></a>
            <div className="design_header"><h1>Design</h1></div>
            <a className="appear_6" target='_blank' href='../../public/Df.jpg'><img src='../../public/Df.jpg' /></a>
            <div className="inner_gallery">
            <a  target='_blank' className="inner_images empire appear_7" href='../../public/EMPIRE1.jpg'></a>
            <a target='_blank' className="inner_images life appear_8" href='../../public/life.png'></a>
            </div>
            <a  href='../../public/waterplane.png' target='_blank' className="waterplane appear_9"><img href=""  src='../../public/waterplane.png' /></a>
        </div>
    </div>
    <img href="#" src='../../public/gallery_deco.png' className="right_deco" />
    </>
)

}

export default Design 