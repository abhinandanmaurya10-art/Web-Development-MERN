import React, { useEffect } from 'react'

const Navbar = ({color}) => {
  // Case 1: Run on every render
  useEffect(() => {
    alert("Hey I will run on every render.")
  
  }, [])

  // Case 2: Run only on first render
  useEffect(() => {
    alert("Hey welcome to my page.This is the first render")
    
  
  }, [])


  // Case 3: Run only when certain value was changed
  useEffect(() => {
    alert("Hey I am running because color was changed.")
  
  }, [color])

  // Example of cleanup function 
  useEffect(() => {
    alert("Hey welcome to my page. This is the first render of app.jsx")
  
    return () => {
      alert("Componment was unmounted")
      
    }
  }, [])
  
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
