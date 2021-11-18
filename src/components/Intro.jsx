import React from 'react'
import '../css/intro.css'
import myportrait from '../img/me.jpeg'
function Intro() {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello my name is </h2>
                    <h1 className="i-name">Nikhil Mourya</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UI Designer</div>
                            <div className="i-title-item">Graphic Designer</div>
                            <div className="i-title-item">Lorem Ipsum</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quae dignissimos rerum nisi expedita itaque, quaerat, nulla doloribus non adipisci cumque repellat id optio magni!
                    </div>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={myportrait} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro
