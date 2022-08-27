//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import NavScrollExample from'./Navbar';
import StateAndEffect from './StateAndEffect';
import 'bootstrap/dist/css/bootstrap.min.css' 

function App() {
  var b = 30;
  const [a, seta] = useState(40)

 const [counter, setCounter] = useState(0)

  // // component did mount 

  useEffect(() => {
    // a = getter seta = setter 
    seta(60)
    seta(260)
    console.log("a--", a) // getter
    b = 50; // setter
    b = 100; // setter
    console.log("b--", b) // getter
  }, [])


  // // [] => dependancy -

  const handleIncriment = () => {
    setCounter(counter + 1)
  }
  console.log("counter--", counter)

  return (
    <div className="App">
        {/* <NavScrollExample/>
        <h1>
        welcome : {counter}
        <button onClick={handleIncriment}>
           press me
        </button>
      </h1>  */}
      <StateAndEffect />
    </div>
  );
}

export default App; 
