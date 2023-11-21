import './App.css';
let name = "Dev";
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <h1>Hello {name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Voluptatibus, qui. Ut numquam 
        explicabo laborum sapiente nihil, est quibusdam.
         Inventore, earum!</p>
    </div>
    </>
  );
}

export default App;
