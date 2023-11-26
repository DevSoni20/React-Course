
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
 return (
    <>
      {/* Navbar component is imported and used here. It contains the title and aboutText properties. */}
      <Navbar title="Dev App's" aboutText="About Dev App's"/>
      
      {/* A container div is used to hold the TextForm component. */}
      <div className="container my-3">
        {/* TextForm component is imported and used here. It contains the heading property. */}
        <TextForm heading="Enter the text to analyze below"/>
      </div>
    </>
 );
}

export default App;
//
//In this code, we have a functional component called `App`. Inside this component, we are using the `Navbar` and `TextForm` components. The `Navbar` component is used to display the title and about text of the application. The `TextForm` component is used to allow the user to enter text for analysis.
//
//The `Navbar` and `TextForm` components are imported from their respective files in the `Components` folder. The `Navbar` component takes two properties: `title` and `aboutText`, which are used to display the title and about text of the application. The `TextForm` component takes one property: `heading`, which is used to display the heading text above the text input field.
//
//The `App` component is exported as the default component, making it available