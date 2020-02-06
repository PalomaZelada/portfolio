import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './components/intro';
import Aboutme from './components/title';
import Navbar1 from './components/Navbar';
import Proyects from './components/Proyects';


class App extends React.Component {
  render(){
      return (
    <div className="App">
      <Navbar1 />
      <Logo />
      <Aboutme />
    
    <div className="secondView">
      <Proyects />
    </div>
    </div>
      )
  }
}

export default App;
