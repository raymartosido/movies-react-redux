import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/HomePage';
import Movie from './components/pages/MoviePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/movie/:id" component={Movie} />
              {/* <Route path="/application" component={Application} /> */}
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
