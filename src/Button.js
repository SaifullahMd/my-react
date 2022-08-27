import React from 'react'

export default function Button(props) {
    console.log("button component",props.color)
  return (
    <button 
     style={{backgroundColor: props.color, margin: "2px", padding: "10px"}} 
    //  onClick={() => setBackgrdColor(props.color)}
     />
  )
}
