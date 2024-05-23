import React from 'react'
import  "./style.css"

const MyData = (props) => {
  return (
    <div>
        <h3>My Name is: {props.name}</h3>
        <p>My Age is:{props.age}</p>
    </div>
  )
}

export default MyData