import React from 'react';
import './App.css';
import CITYSEARCH from './components/citySearch'; 
//import { render } from 'react-dom';


class App extends React.Component{
    render() {
      return (
        <div className="App">
          <CITYSEARCH />
      </div>
      );
    }
  }
 

export default App;

