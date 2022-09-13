import React from 'react'
import ProjectCard from './ProjectCard'
let projects1 = [
    {
        name: "Summer House",
        img: "https://www.w3schools.com/w3images/house5.jpg"
    },
    {
        name: "Brick House",
        img: "https://www.w3schools.com/w3images/house2.jpg"
    },
    {
        name: "Renovated",
        img: "https://www.w3schools.com/w3images/house3.jpg"
    },
    {
        name: "Barn House",
        img: "https://www.w3schools.com/w3images/house4.jpg"
    },
]
function ProjectSection() {
    return (
        <div>
            {/* <!-- Project Section --> */}
            <div className="w3-container w3-padding-32" id="projects">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Projects</h3>
            </div>

            <div className="w3-row-padding">
                {projects1.map(item => (
                    <ProjectCard key={item.name.toString()} name={item.name.toString()} img={item.img.toString()} />
                ))}
            </div>

            <div className="w3-row-padding">
                {projects1.map(item => (
                    <ProjectCard key={item.name.toString()} name={item.name.toString()} img={item.img.toString()} />
                ))}
            </div>
        </div>
    )
}

export default ProjectSection