//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Links from './components/Links';
import Counter from './components/Counter';
import Overview from './components/Overview';
import Funclinks from './components/Funclinks';
import Test from './components/Test';
import NewForm from './components/NewForm'
import Dark from './components/Dark';
import { useState } from 'react';


//let name = prompt("What is your name?");
function App() {
  const [modeEnabled, setModeEnabled] = useState("light")
  
  const toggleBtn = () => {
    if (modeEnabled === "light"){
    setModeEnabled("dark")
document.body.style.backgroundColor = "black"

    console.log(modeEnabled);
    }
    else {
      setModeEnabled("light")
      document.body.style.backgroundColor = "white"
    }
    

  }
  return (
    <>
      <Dark mode={modeEnabled} toggleBtn={toggleBtn}/>
      <NewForm />
    </>

  );
}

export default App;


/* <Navbar title="navs" link="HOME" /> */ 
/* <div className="container">
        <Form title="Input text here" />
      </div>
      <Links link="this is a link" />
      <Counter />
      <Overview />
       // {/* */
      // <Funclinks />
      // <Test /> */