import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Proyects from './components/Proyects';
import Contact from './components/Contact';


class Routes extends React.Component {
  render() {
    return (
      <div className="Routes">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/proyects" component={Proyects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default Routes;
