import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


function Article(props){
  const [show, setShow] = useState(false);

  function hasClicked() {
    setShow(!show);
    console.log(show);
  }

  function Children() {
    if(show) {
      return(<div className="Article_Children">{props.children}</div>);
    }
  }

  return (
    <div className="article">
      <div className="Article-header">
      <h2 onClick={hasClicked}>{props.title}</h2>
      <p>
        {props.author} | {props.published}
      </p>
    </div>
    <Children />
    {/* <div className="Article_Children">{props.children}</div> */}
    </div>
  );
}


function App() {
  const name = "Adna";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        My name is {name}.
      </p>
      </header>
      <Article published="2022-11-04" author="Anders" title="Learning JSX">
      <p>This is a component child</p>
      </Article>
      <Article published="2022-07-03" author="Björn" title="Learning JS">
      <p>This is a component child</p>
      </Article>
      <Article 
      published="2022-04-02" 
      author="Adna" 
      title="Learning React">
      <p>This is a component child</p>
      </Article>

    </div>
    
  );
}

export default App;
