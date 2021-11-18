import '../css/Project.css'
import React from 'react'
function Project({img,link}) {
    console.log("image URL: ",img)
    console.log("link: ",link)
    return (
        <div className="project">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src= {img} alt="" className="p-img"/>
            </a>
        </div>
    )
}

export default Project
