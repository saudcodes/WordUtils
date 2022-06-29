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
  const [myColor, setMyColor] = useState(null)
  const showAlert = (type, msg) => {setAlert({
    type: type,
    message : msg
  })

setTimeout(() => {
  setAlert(null);
}, 2000)
}
  

  const toggleBtn = () => {
    if (modeEnabled === "light"){
    setModeEnabled("dark")
document.body.style.backgroundColor = "black"
     setMyColor( { background: "linear-gradient(15deg, #13547a 1%, #80d0c7 75%)",  })

showAlert("success", " Wooo Hoooo !!! Dark Mode is Enabled ")

    console.log(modeEnabled);
    }
    else {
      setModeEnabled("light")
      document.body.style.backgroundColor = "white"
    }
    

  }
  const handleChange = (event) => {
    let ncolor = event.target.value
  
    setMyColor({
 backgroundColor: ncolor
})

  }

  return (
    <>
    
      <Navbar newtest={myColor} title="Words" toggleBtn={toggleBtn} myColor={myColor} switchColor={handleChange} link="Home" mode={modeEnabled} />
      <Alert alert={alert}/>
      <NewForm myColor={myColor} showAlert={showAlert} mode={modeEnabled} />
    
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