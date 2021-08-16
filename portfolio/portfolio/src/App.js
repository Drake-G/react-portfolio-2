import React from 'react';
import { Navigation } from './components/navigation';
import { Footer } from './components/footer'
import './App.css'; 
import { BrowserRouter as Switch, Route } from "react-router-dom";
import HomePage from './pages/home.js';
import ContactPage from './pages/contact';
import PortfolioPage from './pages/portfolio';
import ResumePage from './pages/resume.js';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Navigation />
        <Switch>
          <Route exact path='/About' component={HomePage} />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/Portfolio' component={PortfolioPage} />
          <Route exact path='/Contact' component={ContactPage} />
          <Route exact path='/Resume' component={ResumePage} />
        </Switch>
        <Footer />
      </div>
    )
  }
}


export default App;
