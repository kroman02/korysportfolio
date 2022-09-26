import React from 'react'
import '../styles/design.css'

const Design = () => {

    return (
        <>
        <img src='/gallery_deco.png' className="left_deco" />
        <div className="gallery_container">
        <div className="gallery">
            <a className="appear_1" target='_blank' href='/savvatore.gif'><img src='/savvatore.gif' /></a>
            <a className="appear_2" target='_blank' href='/lion2.png'><img className="lion" src='/lion2.png' /></a>
            <a className="appear_3" target='_blank' href='/a1.jpg'><img src='../../public/a1.jpg' /></a>
            <a target='_blank' href='/index.jpg' className="row-span-2 appear_4"><img  src='/index.jpg' /></a>
            <a target='_blank' href='/jobrange.png' className="col-span-2 appear_5"><img  src='/jobrange.png' /></a>
            <div className="design_header"><h1>Design</h1></div>
            <a className="appear_6" target='_blank' href='../../public/Df.jpg'><img src='../../public/Df.jpg' /></a>
            <div className="inner_gallery">
            <a  target='_blank' className="inner_images empire appear_7" href='/EMPIRE1.jpg'></a>
            <a target='_blank' className="inner_images life appear_8" href='/life.png'></a>
            </div>
            <a  href='/waterplane.png' target='_blank' className="waterplane appear_9"><img href=""  src='/waterplane.png' /></a>
        </div>
    </div>
    <img href="#" src='/gallery_deco.png' className="right_deco" />
    </>
)

}

export default Design 
