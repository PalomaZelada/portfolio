import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Proyects from './components/Proyects';
import Skills from './components/Skills';
import Contact from './components/Contact';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Home />
        <Skills />
        <Proyects />
        <Contact />
      </div>
    )
  }
}

export default App;
