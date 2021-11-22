import '../css/about.css'
import React from 'react'
import photo from '../img/about-photographer.jpg'
export const About = () => {
    return (
        <div className="about">
            <h1 className="a-title">About Me</h1>
            <div className="a-left">
            
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={photo} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, eveniet veniam odio praesentium ab placeat?</p>
                <p className="a-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, repellendus tempora. Modi ex ipsam placeat possimus necessitatibus velit blanditiis, minus at, sint libero nesciunt repellat similique, iste earum. Quo iusto illo aliquid id nostrum deleniti aperiam repellendus assumenda cum non, quaerat at aliquam recusandae consectetur alias voluptate omnis qui asperiores?
                </p>
            </div>
        </div>
    )
}
