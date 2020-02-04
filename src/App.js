import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aboutme from './components/title';
import Navbar1 from './components/Navbar';

class App extends React.Component {
  render(){
      return (
    <div className="App">
      <Navbar1 />
      <h1>Paloma Zelada</h1>
      <h1>Front-end Developer</h1>
      <Aboutme />
    </div>
      )
  }
}

export default App;
