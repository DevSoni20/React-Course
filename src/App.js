import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
    <Navbar title = "Dev App's" aboutText = "About Dev App's"/>
    {/* <Navbar/> */}
    <div className="container my-3">
      <TextForm heading = "Enter the text to analyze below"/>
    </div>
    </>
  );
}

export default App;
