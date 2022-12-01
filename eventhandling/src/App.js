import './App.css';

function App() { //component bc it has return = PascalCase

  function activateLasers(){ //function = camelCase
    console.log("pew pew");
  }

  function mouseEnter(){ //function = camelCase
    alert("Hejsan");
  }

  return (
    <div className="App">
      <button onClick={activateLasers}>Activate Lasers</button>
      <p onMouseEnter={mouseEnter}>För musen över mig</p>
    </div>
  );
}

export default App;
