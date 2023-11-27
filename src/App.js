
import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {
    const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) =>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>
      {
        setAlert(null);
      }, 1500);
    }
    const toggleMode = ()=>{
      if(mode === 'light')
      {
        setMode('dark');
        document.body.style.backgroundColor = 'grey';
        showAlert(" Dark Mode has been Enabled", "success");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert(" Light Mode has been Enabled", "success");
      }
    }
    return (
    <>
      {/* <Navbar title="Dev App's" aboutText="About Dev App's"/> */}
      <Navbar title="Dev App's" mode={mode} toggleMode={toggleMode}/>
      <Alert alert ={alert}/>
      <div className="container my-3">
        <TextForm showAlert = {showAlert} heading="Enter the text to analyze below" mode={mode}/>
      </div>
    </>
 );
}

export default App;