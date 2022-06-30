//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import NewForm from './components/NewForm'
import Alert from './components/Alert';
import { useState } from 'react';


function App() {
  const [modeEnabled, setModeEnabled] = useState("light")
  const [alert, setAlert] = useState(null)
  const [newColor, setNewColor] = useState(null)
  const showAlert = (type, msg) => {
    setAlert({
      type: type,
      message: msg
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }


  const toggleBtn = () => {

    if (modeEnabled === "light") {
      setModeEnabled("dark")
      document.body.style.backgroundColor = "black"
      setNewColor({ background: "linear-gradient(15deg, #13547a 1%, #80d0c7 75%)", })
      showAlert("success", " Wooo Hoooo !!! Dark Mode is Enabled ")
      console.log(modeEnabled);
    }

    else {
      setModeEnabled("light")
      document.body.style.backgroundColor = "white"
    }


  }
  const handleChange = (event) => {
    let newColorValue = event.target.value

    setNewColor({
      backgroundColor: newColorValue
    })

  }

  return (
    <>

      <Navbar newColor={newColor} title="Words" toggleBtn={toggleBtn} myColor={newColor} switchColor={handleChange} link="Home" mode={modeEnabled} />
      <Alert alert={alert} />
      <NewForm myColor={newColor} showAlert={showAlert} mode={modeEnabled} />

    </>

  );
}

export default App;
