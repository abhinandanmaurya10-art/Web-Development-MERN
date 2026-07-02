import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className="card" style={{overflow:"hidden"}}>
      <img src="http://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="" width={250}
      style={{border:"2px solid black"}} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
