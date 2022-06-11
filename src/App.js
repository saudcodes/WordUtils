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

import Alert from './components/Alert'; 
import { useState } from 'react';


//let name = prompt("What is your name?");
function App() {
  const [modeEnabled, setModeEnabled] = useState("light")
  const [alert, setAlert]  = useState(null)
  const showAlert = (type, msg) => setAlert({
    type: type,
    message : msg
  })
  
  const toggleBtn = () => {
    if (modeEnabled === "light"){
    setModeEnabled("dark")
document.body.style.backgroundColor = "black"
showAlert("success", "Dark Mode is Enabled ")

    console.log(modeEnabled);
    }
    else {
      setModeEnabled("light")
      document.body.style.backgroundColor = "white"
    }
    

  }
  return (
    <>
      <Navbar title="Words" toggleBtn={toggleBtn} link="Home" glow={modeEnabled} />
      <Alert alert={alert}/>
      <NewForm showAlert={showAlert} new={modeEnabled} />
    
    </>

  );
}

export default App;


/*  */ 
/* <div className="container">
        <Form title="Input text here" />
      </div>
      <Links link="this is a link" />
      <Counter />
      <Overview />
       // {/* */
      // <Funclinks />
      // <Test /> */