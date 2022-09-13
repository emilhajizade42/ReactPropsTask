import React from 'react'

function AboutSection() {
  let employees = [
    {
      name: "John Doe",
      img: "https://www.w3schools.com/w3images/team2.jpg",
      pos: "CEO & Founder",
      bio: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
    },
    {
      name: "Jane Doe",
      img: "https://www.w3schools.com/w3images/team1.jpg",
      pos: "Architect",
      bio: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
    },
    {
      name: "Mike Ross",
      img: "https://www.w3schools.com/w3images/team3.jpg",
      pos: "Architect",
      bio: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
    },
    {
      name: "Dan Star",
      img: "https://www.w3schools.com/w3images/team4.jpg",
      pos: "Architect",
      bio: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
    },
  ]
  return (
    <>
      {/* <!-- About Section --> */}
      <div className="w3-container w3-padding-32" id="about">
        <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="w3-row-padding w3-grayscale">
        {employees.map(item => (
          <div key={item.name} className="w3-col l3 m6 w3-margin-bottom">
            <img src={item.img} alt="John" style={{ width: "100%" }} />
            <h3>{item.name}</h3>
            <p className="w3-opacity">{item.pos}</p>
            <p>{item.bio}</p>
            <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
          </div>
        ))}
      </div>
    </>
  )
}

export default AboutSection