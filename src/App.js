import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Mapas } from './Mapas';
import { Descarga } from './Descarga';
import { Analisis } from './Analisis';
import { Explicacion } from './Explicacion';
import { About } from './About';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/mapas" component={Mapas} />
              <Route path="/descarga" component={Descarga} />
              <Route path="/analisis" component={Analisis} />
              <Route path="/explicacion" component={Explicacion} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
