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


//let name = prompt("What is your name?");
function App() {
  return (
    <>
      {/* <Navbar title="navs" link="HOME" /> */}
      {/* <div className="container">
        <Form title="Input text here" />
      </div>
      <Links link="this is a link" />
      <Counter />
      <Overview />
      <Funclinks />
      <Test /> */}
      <NewForm />
    </>

  );
}

export default App;
