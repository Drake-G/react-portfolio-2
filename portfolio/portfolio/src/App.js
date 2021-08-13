import React from 'react';
import { Navigation } from './components/navigation';
import { About } from './components/about';
import { Footer } from './components/footer'
import './App.css'; 
import { ThreeTruth } from './components/threeTruth';


class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Navigation />
        <ThreeTruth />
        <About />
        <Footer />
      </div>
    )
  }
}


export default App;
