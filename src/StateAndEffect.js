import React, { useState } from 'react'
import Button from './Button'
import { Popup } from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

function StateAndEffect() {
  const [backgrdColor, setBackgrdColor] = useState("green")
  const [color, setColor] = useState("black")
  const [heading, setHeading] = useState("Rahmani Foundation of India")

  const [openForBG, setOpenForBG] = useState(false)

    //const [header, setHeader] = useState(false)

    const [val, setVal] = useState()

  const handleTextAndColor = () => {
    setBackgrdColor("green")
    setColor("black")
    setHeading("Rahmani Foundation of India")
     //setVal("")
  }

  return (
    <>
      <div>Use state</div>
      <div style={{
        backgroundColor: backgrdColor,
        color: color,
        margin: "200px",
        marginTop: "5px",
        marginBottom: "5px"
      }}>
        <h1>{heading}</h1>
      </div>

      <div>
        {/* <Button color="red" setBackgrdColor={setBackgrdColor}/>
        <Button color="blue"/>
        <Button color="black"/>
        <Button color="yellow"/>
        <Button color="green"/>
        <Button color="purple"/>
        <Button color="brown"/>
        <Button color="teal"/>
        <Button color="tan"/> */}

        {/* <button
          style={{ backgroundColor: "green", margin: "2px", padding: "10px" }}
          onClick= {modal} /> */}

        <Popup trigger={
          <button style={{ backgroundColor: "green", margin: "2px", padding: "10px" }} />}
          position="top center">
          {/* inner butten */}
          <button
            style={{ backgroundColor: "green" }}
            onClick={() => setBackgrdColor("green")}
          >change Background
          </button>

          <button
            style={{ color: "green" }}
            onClick={() => setColor("green")}
          >change text color</button>
        </Popup>



        {/* <button style={{ backgroundColor: "blue", margin: "2px", padding: "10px" }}
          onClick={() => setBackgrdColor("blue")} /> */}

        <Popup trigger={
          <button style={{ backgroundColor: "blue", margin: "2px", padding: "10px" }} />}
          position="top center">

          <button
            style={{ backgroundColor: "blue" }}
            onClick={() => setBackgrdColor("blue")}
          >change Background
          </button>

          <button
            style={{ color: "blue" }}
            onClick={() => setColor("blue")}
          >change text color</button>
        </Popup>

        {/* <button style={{ backgroundColor: "black", margin: "2px", padding: "10px" }} onClick={() => setBackgrdColor("black")} /> */}

        <Popup trigger={
          <button style={{ backgroundColor: "black", margin: "2px", padding: "10px" }} />}
          position="top center">

          <button
            style={{ backgroundColor: "black", color: "white" }}
            onClick={() => setBackgrdColor("black")}
          >change Background
          </button>

          <button
            style={{ color: "black" }}
            onClick={() => setColor("black")}
          >change text color</button>
        </Popup>


        {/* <button style={{ backgroundColor: "yellow", margin: "2px", padding: "10px" }} onClick={() => setBackgrdColor("yellow")} /> */}

        <Popup trigger={
          <button style={{ backgroundColor: "yellow", margin: "2px", padding: "10px" }} />}
          position="top center">

          <button
            style={{ backgroundColor: "yellow" }}
            onClick={() => setBackgrdColor("yellow")}
          >change Background
          </button>

          <button
            style={{ color: "yellow" }}
            onClick={() => setColor("yellow")}
          >change text color</button>
        </Popup>


        {/* <button style={{ backgroundColor: "red", margin: "2px", padding: "10px" }} onClick={() => setBackgrdColor("red")} /> */}

        <Popup trigger={
          <button style={{ backgroundColor: "red", margin: "2px", padding: "10px" }} />}
          position="top center">

          <button
            style={{ backgroundColor: "red" }}
            onClick={() => setBackgrdColor("red")}
          >change Background
          </button>

          <button
            style={{ color: "red" }}
            onClick={() => setColor("red")}
          >change text color</button>
        </Popup>


        {/* <button style={{ backgroundColor: "purple", margin: "2px", padding: "10px" }} onClick={() => setBackgrdColor("purple")} /> */}

        <Popup trigger={
          <button style={{ backgroundColor: "purple", margin: "2px", padding: "10px" }} />}
          position="top center">

          <button
            style={{ backgroundColor: "purple" }}
            onClick={() => setBackgrdColor("purple")}
          >change Background
          </button>

          <button
            style={{ color: "purple" }}
            onClick={() => setColor("purple")}
          >change text color</button>
        </Popup>


        {/* <button style={{ backgroundColor: "brown", margin: "2px", padding: "10px" }} onClick={() => setBackgrdColor("brown")} /> */}

        <Popup trigger={
          <button style={{ backgroundColor: "brown", margin: "2px", padding: "10px" }} />}
          position="top center">

          <button
            style={{ backgroundColor: "brown" }}
            onClick={() => setBackgrdColor("brown")}
          >change Background
          </button>

          <button
            style={{ color: "brown" }}
            onClick={() => setColor("brown")}
          >change text color</button>
        </Popup>
      </div>

      <p>OR </p>
      <button onClick={() => setOpenForBG(!openForBG)}>
        {openForBG ? "Close" : "Open"} manually
      </button>
      {openForBG &&
        <>
          <div style={{ margin: "2px" }}>

            <p>Enter BackgroundColor </p>
            <input type="text" value={val}  onChange={e => setBackgrdColor(e.target.value)} />
            {/* <input
          type="text" 
          onChange={e => setBackgrdColor()} /> */}

          </div>

          <div style={{ margin: "2px" }}>
            <p>Enter TextColor </p>
            <input
              type="text" value={val} onChange={e =>
                setColor(e.target.value)} />
          </div>
          <div style={{ margin: "2px" }}>
            <p>Enter Heading </p>
            <input
              type="text" value={val}
              onChange={e => setHeading(e.target.value)} />
          </div>
          <div style={{ margin: "20px" }}>
            <button
              onClick={handleTextAndColor}>Reset</button>
          </div>
        </>
      }


    </>
  )
}

export default StateAndEffect