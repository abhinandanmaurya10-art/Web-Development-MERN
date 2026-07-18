import React from 'react'

const Navbar = ({color}) => {
  return (
    <div>
      <nav>
     <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        This is the Navbar of color {color}
     </ul>
      </nav>
    </div>
  )
}

export default Navbar
