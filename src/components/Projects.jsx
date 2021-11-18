import React from 'react'
import '../css/projects.css'
import Project from './Project'
import { data } from '../data'

const Projects = () => {
    console.log(data)
    return (
        <div className="projects">
            <div className="p-texts">
                <h1 className="p-title">Create & Inspire</h1>
                <p className="p-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid expedita consequatur adipisci. A, est. Maxime obcaecati deleniti esse molestias quaerat maiores quae delectus. Asperiores delectus at quam quis voluptatum eius!
                </p>
            </div>
            <h4 className="project-heading">&#60;projects&#47;&#62;</h4>
            <div className="p-list">
                {data.map((item)=>(
                    <Project key={item.id} img= {item.img} link={item.link}/>
                ))}
            </div>
        </div>
    )
}

export default Projects
